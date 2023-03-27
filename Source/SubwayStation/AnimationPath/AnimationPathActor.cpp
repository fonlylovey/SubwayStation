// Fill out your copyright notice in the Description page of Project Settings.


#include "AnimationPathActor.h"

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

	MovePath = CreateDefaultSubobject<USplineComponent>(TEXT("MovePath"));
	MovePath->SetupAttachment(RootComponent);
}

// Called when the game starts or when spawned
void AAnimationPathActor::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void AAnimationPathActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	FTransform transform = MovePath->GetTransformAtTime(currentTime, ESplineCoordinateSpace::World);
	currentTime += DeltaTime / speedRate;
	
	if(currentTime > MovePath->Duration)
	{
		currentTime = 0;
		UtilsLibrary::Log("Duration: " + FString::FormatAsNumber(MovePath->Duration) + "Current:" + FString::FormatAsNumber(currentTime), true);
	}
	MoveMesh->SetWorldLocation(transform.GetLocation());
	MoveMesh->SetWorldRotation(transform.GetRotation());
}

