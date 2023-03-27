// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "FloorInstanceSubsystem.generated.h"

/**
 * 
 */
UCLASS()
class SUBWAYSTATION_API UFloorInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()

public:
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	virtual void Deinitialize() override;
	
	void Execute(const FString& Data);

	void FloorLift(const FString& BuildingName, const int32 FloorIndex);
};
