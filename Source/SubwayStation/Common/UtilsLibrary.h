// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"

/**
 * 
 */
class SUBWAYSTATION_API UtilsLibrary : UBlueprintFunctionLibrary
{
public:
	UFUNCTION(BlueprintCallable, Category = "UtilsLibrary")
	static void Log(FString str, bool bScreen = false, float fFtime = 3, FColor color = FColor::Green);
};
