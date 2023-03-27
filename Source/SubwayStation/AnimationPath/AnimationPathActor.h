// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/SplineComponent.h"
#include "GameFramework/Actor.h"
#include "AnimationPathActor.generated.h"

UCLASS()
class SUBWAYSTATION_API AAnimationPathActor : public AActor
{
	GENERATED_BODY()

public:
	// Sets default values for this actor's properties
	AAnimationPathActor();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:
	// Called every frame
	virtual void Tick(float DeltaTime) override;


public:
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	USplineComponent* MovePath = nullptr;

	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	UStaticMeshComponent* MoveMesh = nullptr;

	float currentTime = 0.0;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	float speedRate = 1.0;
};
