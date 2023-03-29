// Fill out your copyright notice in the Description page of Project Settings.


#include "AnimationPathActor.h"
#include "CesiumGeoreference.h"
#include "SubwayStation/Common/UtilsLibrary.h"


// Sets default values
AAnimationPathActor::AAnimationPathActor()
{
	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;
	RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("RootComponent"));
	MoveMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MoveMesh"));
	MoveMesh->SetupAttachment(RootComponent);
	MoveMesh->SetCollisionProfileName(UCollisionProfile::BlockAll_ProfileName);
	MoveMesh->Mobility = EComponentMobility::Movable;
	MoveMesh->bUseDefaultCollision = true;
	MoveMesh->SetWorldScale3D(FVector3d(30, 30, 30));
	
	SkeMoveMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("SkeMoveMesh"));
	SkeMoveMesh->SetWorldScale3D(FVector3d(50, 50, 50));
	
	MovePath = CreateDefaultSubobject<USplineComponent>(TEXT("MovePath"));
	MovePath->SetupAttachment(RootComponent);
	
	//GlobeAnchor = CreateDefaultSubobject<UCesiumGlobeAnchorComponent>("CesiumAnchor");
}

// Called when the game starts or when spawned
void AAnimationPathActor::BeginPlay()
{
	Super::BeginPlay();
	
}

void AAnimationPathActor::BeginDestroy()
{
	Super::BeginDestroy();
	MoveMesh = nullptr;
	MovePath = nullptr;
}

void AAnimationPathActor::InitData(const FAnimationPathData& data)
{
	FSoftObjectPath sorftPath(data.MeshRefPath);
	UObject* obj = sorftPath.TryLoad();
	if(IsValid(obj))
	{
		UStaticMesh* staticMesh = Cast<UStaticMesh>(obj);
		if(staticMesh != nullptr)
		{
			MoveMesh->SetStaticMesh(staticMesh);
		}
		else
		{
			auto skeMesh = Cast<USkeletalMesh>(obj);
			
			if(skeMesh != nullptr)
			{
				SkeMoveMesh->SetSkeletalMesh(skeMesh);
			}
		}
	}

	UAnimationAsset* animAsset = Cast<UAnimationAsset>(StaticLoadObject(UAnimationAsset::StaticClass(), nullptr, *data.AnimRefPath));
	SkeMoveMesh->PlayAnimation(animAsset, true);
	
	MovePath->ClearSplinePoints();
	for (int i = 0; i < data.KeyPoints.Num(); i++)
	{
		FSplinePoint keyPoint;
		keyPoint.Position = data.KeyPoints[i];
		keyPoint.LeaveTangent = FVector();
		keyPoint.ArriveTangent = FVector();
		keyPoint.InputKey = i;
		keyPoint.Type = ESplinePointType::Linear;
		MovePath->AddSplinePoint(data.KeyPoints[i], ESplineCoordinateSpace::World);
	}
	MovePath->UpdateSpline();
	
	MovePath->Duration = data.Duration;
	if(MoveMesh != nullptr)
	{
		MoveMesh->SetWorldLocation(data.KeyPoints[0]);
	}
	if(SkeMoveMesh != nullptr)
	{
		SkeMoveMesh->SetWorldLocation(data.KeyPoints[0]);
	}

	isLoopPlay = data.IsLoop;
	isPlay = true;
}

// Called every frame
void AAnimationPathActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if(!isPlay) return;
	
	FTransform transform = MovePath->GetTransformAtTime(currentTime, ESplineCoordinateSpace::World);
	currentTime += DeltaTime / speedRate;
	
	if(currentTime > MovePath->Duration)
	{
		currentTime = 0;
		if(!isLoopPlay)
		{
			isPlay = false;
		}
		//UtilsLibrary::Log("Duration: " + FString::FormatAsNumber(MovePath->Duration) + "Current:" + FString::FormatAsNumber(currentTime), true);
	}
	//GlobeAnchor->MoveToLongitudeLatitudeHeight(FVector3d(transform.GetLocation().X, transform.GetLocation().Y, 0));
	
	if(MoveMesh != nullptr)
	{
		MoveMesh->SetWorldLocation(transform.GetLocation());
		MoveMesh->SetWorldRotation(transform.GetRotation().Rotator() + FRotator3d(0, -90, 0));
	}
	if(SkeMoveMesh != nullptr)
	{
		SkeMoveMesh->SetWorldLocation(transform.GetLocation());
		SkeMoveMesh->SetWorldRotation(transform.GetRotation().Rotator() + FRotator3d(0, -90, 0));
	}
}

