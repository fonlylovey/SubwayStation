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
		StaticMeshComponent = Floor->GetStaticMeshComponent();
	}

	OriginLocation = OwnerActor->GetActorLocation();
	
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

	//三维、二维空间切换时间轴初始化
	SpaceSwitchTickCallback.BindUFunction(this, TEXT("OnSpaceSwitchUpdate"));
	SpaceSwitchTimelineComp->AddInterpFloat(SpaceSwitchCurve, SpaceSwitchTickCallback, NAME_None, FName(TEXT("SpaceSwitchTrack")));

	//楼层透明度切换时间轴初始化
	TranspLerpTickCallback.BindUFunction(this, TEXT("OnTranspLerpUpdate"));
	TranspLerpTimelineComp->AddInterpFloat(TranspLerpCurve, TranspLerpTickCallback, NAME_None, FName(TEXT("TranspLerpTrack")));

	//楼层抬升时间轴初始化
	LiftLerpTickCallback.BindUFunction(this, TEXT("OnLiftLerpUpdate"));
	LiftLerpTimelineComp->AddInterpFloat(LiftLerpCurve, LiftLerpTickCallback, NAME_None, FName(TEXT("LiftLerpTrack")));
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
	TranspParamName = ParameterName;
	TranspParamValue = Transparency;
	StaticMeshComponent->GetMaterial(0)->GetScalarParameterDefaultValue(TranspParamName, CurTranspParamValue);
	if (StaticMeshComponent != nullptr)
	{
		if (bLerp)
		{
			TranspLerpTimelineComp->PlayFromStart();
		}
		else
		{
			StaticMeshComponent->SetScalarParameterValueOnMaterials(TranspParamName, CurTranspParamValue);
		}
	}
}

void UFloorComponent::FloorLift(bool bReverse, bool bLerp)
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
	}
	else
	{
		OwnerActor->SetActorLocation(TargetLiftLocation);
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
	StaticMeshComponent->SetScalarParameterValueOnMaterials(TranspParamName, UKismetMathLibrary::Lerp(CurTranspParamValue, TranspParamValue, Alpha));
}

void UFloorComponent::OnLiftLerpUpdate(float Alpha)
{
	OwnerActor->SetActorLocation(UKismetMathLibrary::VLerp(CurLocation, TargetLocation, Alpha));
}

