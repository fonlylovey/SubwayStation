// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "MaterialUtil.generated.h"

/**
 * 
 */
UCLASS()
class FLOORSHOW_API UMaterialUtil : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	/*//获取一个动态材质上的各个参数
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Material")
	static bool GetMaterialParameters(UMaterialInterface* MatInterface,
		TArray<FMaterialScalarParameter>& OutScalarParameters,
		TArray<FMaterialVectorParameter>& OutVectorParameters,
		TArray<FMaterialTextureParameter>& OutTextureParameters);*/
};
