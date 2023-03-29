// Fill out your copyright notice in the Description page of Project Settings.


#include "Component/FloorComponent.h"

#include "Engine/StaticMeshActor.h"
#include "Kismet/KismetMaterialLibrary.h"
#include "Kismet/KismetMathLibrary.h"
#include "Manager/FloorManager.h"
#include "Singleton/GameSingleton.h"

// Sets default values for this component's properties
UFloorComponent::UFloorComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;

	// ...
	SpaceSwitchTimelineComp = CreateDefaultSubobject<UTimelineComponent>(TEXT("SpaceSwitchTimeline"));
	TranspLerpTimelineComp = CreateDefaultSubobject<UTimelineComponent>(TEXT("TranspLerpTimeline"));
	LiftLerpTimelineComp = CreateDefaultSubobject<UTimelineComponent>(TEXT("LiftLerpTimeline"));
}


// Called when the game starts
void UFloorComponent::BeginPlay()
{
	Super::BeginPlay();

	OwnerActor = GetOwner();
	AStaticMeshActor* Floor = Cast<AStaticMeshActor>(OwnerActor);
	if (Floor != nullptr)
	{
		StaticMeshComponents.Add(Floor->GetStaticMeshComponent());
	}
	TArray<AActor*> AttachedActors;
	OwnerActor->GetAttachedActors(AttachedActors, true, true);
	for (auto& Itr : AttachedActors)
	{
		UActorComponent* Component = Itr->GetComponentByClass(UStaticMeshComponent::StaticClass());
		if (Component != nullptr)
		{
			StaticMeshComponents.Add(Cast<UStaticMeshComponent>(Component));
		}
	}

	OriginLocation = OwnerActor->GetActorLocation();
	for (auto& Itr : StaticMeshComponents)
	{
		FMaterialArray Arr;
		Arr.MaterialArray = Itr->GetMaterials();
		OriginMaterials.Add(Arr);
	}
	
	//添加楼层到FloorManager中
	GGameSingleton->GetSingletonAttribute<UFloorManager>()->EmplaceFloor(BuildingName, FloorIndex, OwnerActor);

	if (SpaceSwitchCurve == nullptr)
	{
		FStringAssetReference DefaultCurveRef = "CurveFloat'/FloorShow/DefaultSpaceSwitchCurve.DefaultSpaceSwitchCurve'";
		DefaultCurveRef.TryLoad();
		//尝试从路径中查找资源
		UObject* MyCharacterObj = DefaultCurveRef.ResolveObject();
		UCurveFloat* DefaultCurve = Cast<UCurveFloat>(MyCharacterObj);
		SpaceSwitchCurve = DefaultCurve;
		TranspLerpCurve = DefaultCurve;
		LiftLerpCurve = DefaultCurve;
	}

	if (TranspMaterialInstance == nullptr)
	{
		FStringAssetReference DefaultCurveRef = "/Script/Engine.MaterialInstanceConstant'/FloorShow/MI_Transparency.MI_Transparency'";
		DefaultCurveRef.TryLoad();
		//尝试从路径中查找资源
		UObject* MyCharacterObj = DefaultCurveRef.ResolveObject();
		UMaterialInstance* DefaltTanspMaterial = Cast<UMaterialInstance>(MyCharacterObj);
		TranspMaterialInstance = DefaltTanspMaterial;
	}

	//三维、二维空间切换时间轴初始化
	SpaceSwitchTickCallback.BindUFunction(this, TEXT("OnSpaceSwitchUpdate"));
	SpaceSwitchTimelineComp->AddInterpFloat(SpaceSwitchCurve, SpaceSwitchTickCallback, NAME_None, FName(TEXT("SpaceSwitchTrack")));

	//楼层透明度切换时间轴初始化
	TranspLerpTickCallback.BindUFunction(this, TEXT("OnTranspLerpUpdate"));
	TranspLerpTimelineComp->AddInterpFloat(TranspLerpCurve, TranspLerpTickCallback, NAME_None, FName(TEXT("TranspLerpTrack")));

	//楼层抬升时间轴初始化
	LiftLerpTickCallback.BindUFunction(this, TEXT("OnLiftLerpUpdate"));
	LiftLerpFinished.BindUFunction(this, TEXT("OnLiftLerpFinished"));
	LiftLerpTimelineComp->AddInterpFloat(LiftLerpCurve, LiftLerpTickCallback, NAME_None, FName(TEXT("LiftLerpTrack")));
	LiftLerpTimelineComp->SetTimelineFinishedFunc(LiftLerpFinished);
}


// Called every frame
void UFloorComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
}

void UFloorComponent::SpaceSwitch(bool bSwitchToThreeDim)
{
	bSwitchToThreeDim ? SpaceSwitchTimelineComp->Play() : SpaceSwitchTimelineComp->Reverse();
}

void UFloorComponent::SetTransparent(FName ParameterName, float Transparency, bool bLerp)
{
	UE_LOG(LogTemp, Warning, TEXT("Components Number: %d"), StaticMeshComponents.Num());
	if (StaticMeshComponents.IsEmpty())
	{
		return;
	}
	
	TranspParamName = ParameterName;
	TranspParamValue = Transparency;

	TArray<UStaticMeshComponent*> Components;
	//获取附加的 Actor
	TArray<AActor*> AttachedActors;
	OwnerActor->GetAttachedActors(AttachedActors, true, true);

	//假设透明度是统一的，并且透明度的参数在第一个材质上
	StaticMeshComponents[0]->GetMaterial(0)->GetScalarParameterDefaultValue(TranspParamName, CurTranspParamValue);
	if (bLerp)
	{
		TranspLerpTimelineComp->PlayFromStart();
	}
	else
	{
		for (auto& Itr : StaticMeshComponents)
		{
			Itr->SetScalarParameterValueOnMaterials(TranspParamName, CurTranspParamValue);
		}	
	}
}

void UFloorComponent::FloorLift(bool bReverse, bool bLerp, FOnTimelineEvent OnTimelineFinished)
{
	CurLocation = OwnerActor->GetActorLocation();
	if (bLerp)
	{
		if (bReverse)
		{
			TargetLocation = OriginLocation;
		}
		else
		{
			TargetLocation = TargetLiftLocation;
			
		}
		LiftLerpTimelineComp->PlayFromStart();
		LiftLerpTimelineComp->SetTimelineFinishedFunc(OnTimelineFinished);
	}
	else
	{
		OwnerActor->SetActorLocation(TargetLiftLocation);
	}
}

FVector UFloorComponent::GetLiftLocation()
{
	return TargetLiftLocation;
}

void UFloorComponent::SetLiftLocation(FVector NewLiftLocation)
{
	TargetLiftLocation = NewLiftLocation;
}

void UFloorComponent::SetAsTransparency(bool bReverse, UMaterialInstance* TransParencyMaterial)
{
	if (TransParencyMaterial == nullptr)
	{
		TransParencyMaterial = TranspMaterialInstance;
	}
	
	for (int32 i = 0; i < StaticMeshComponents.Num(); i++)
	{
		TArray<UMaterialInterface*> ComponentMaterials = OriginMaterials[i].MaterialArray;
		for	(int32 j = 0; j < ComponentMaterials.Num(); j++)
		{
			if (bReverse)
			{
				StaticMeshComponents[i]->SetMaterial(j, ComponentMaterials[j]);	
			}
			else
			{
				StaticMeshComponents[i]->SetMaterial(j, TransParencyMaterial);
			}
		}
	}
}

void UFloorComponent::OnSpaceSwitchUpdate(float Alpha)
{
	//当前楼层缩放大小
	FVector CurrentActorScale = OwnerActor->GetActorScale3D();
	//计算后楼层缩放的Z值
	float ScaleZ = Alpha;
	//更新
	OwnerActor->SetActorScale3D(FVector(CurrentActorScale.X, CurrentActorScale.Y, ScaleZ));
}

void UFloorComponent::OnTranspLerpUpdate(float Alpha)
{
	for (auto& Itr : StaticMeshComponents)
	{
		Itr->SetScalarParameterValueOnMaterials(TranspParamName, UKismetMathLibrary::Lerp(CurTranspParamValue, TranspParamValue, Alpha));	
	}
}

void UFloorComponent::OnLiftLerpUpdate(float Alpha)
{
	OwnerActor->SetActorLocation(UKismetMathLibrary::VLerp(CurLocation, TargetLocation, Alpha));
}

void UFloorComponent::OnLiftLerpFinished()
{
	
}

