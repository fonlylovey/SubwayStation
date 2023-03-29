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

private:
	TQueue<int32> LiftFloorQueue;

	UFUNCTION()
	void FloorLiftFinished();
	
public:
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	virtual void Deinitialize() override;
	
	void Execute(const FString& Data);

	//抬升楼层
	void FloorLift(const FString& BuildingName, const int32 FloorIndex);
	//复原楼层
	void ReverseLiftBuilding(const FString& BuildingName);

	//二维、三维融合模式
	void SpaceSwitch(const FString& BuildingName, bool bSwitchToThreeDim);
	
	//突出展示某一层
	void HighlightFloor(const FString& BuildingName, const int32 FloorIndex);
	void ReverseHighlight(const FString& BuildingName);
};
