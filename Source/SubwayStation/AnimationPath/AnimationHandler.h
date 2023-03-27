// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/Object.h"
#include "JsonLibraryValue.h"
#include "AnimationHandler.generated.h"

/**
 * 
 */
UCLASS()
class SUBWAYSTATION_API UAnimationHandler : public ULocalPlayerSubsystem
{
	GENERATED_BODY()

public:
	
	UFUNCTION(BlueprintCallable, Category="AnimationPath Module")
	void AddAnimationPath(const FString& jsonData);

	UFUNCTION(BlueprintCallable, Category="AnimationPath Module")
	void RemoveAnimationPath(const FString& jsonData);
	
private:
	TMap<FString, class AAnimationPathActor*> _mapActors; //维护所有添加到场景当中的路径动画Act
};
