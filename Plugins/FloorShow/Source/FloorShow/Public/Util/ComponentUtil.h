// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "ComponentUtil.generated.h"

/**
 * 
 */
UCLASS()
class FLOORSHOW_API UComponentUtil : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	void AddComponents(TArray<AActor*> Actors, TSubclassOf<UActorComponent> Components, bool RemoveComponent);
};
