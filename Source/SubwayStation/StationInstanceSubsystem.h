// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/Object.h"
#include "StationInstanceSubsystem.generated.h"

/**
 * 
 */
UCLASS()
class SUBWAYSTATION_API UStationInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintCallable)
	void ExecJsEvent(const FString& jsonData);

	void Test1(const FString& jsonData);

	void Fengya(const FString& jsonData);

private:
	TArray<class AAnimationPathActor*> ActorList;

	class ACesiumGeoreference* Georeference = nullptr;
};
