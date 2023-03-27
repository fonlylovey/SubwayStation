// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "SingletonAttribute.h"
#include "Base/ExtObject.h"
#include "GameSingleton.generated.h"

/**
 * 全局单例管理类
 */

UCLASS()
class FLOORSHOW_API UGameSingleton : public UExtObject
{
	GENERATED_BODY()

public:
	static UGameSingleton* Get();

	UPROPERTY()
	TArray<USingletonAttribute*> SingletonAttributeArray;

	UFUNCTION(BlueprintCallable, meta = (WorldContext = "WorldContextObject"))
	static void InitGameSingleton(UObject* WorldContextObject);

	UFUNCTION(BlueprintCallable, Category = "FloorShow|GameSingleton")
	static void UninitGameSingleton();

	template<typename T>
	void AddSingletonAttribute(UGameInstance* GameInstance)
	{
		for (auto& AtrributeItr : SingletonAttributeArray)
		{
			if (AtrributeItr != nullptr && AtrributeItr->GetClass() == T::StaticClass())
			{
				return;
			}
		}

		T* SingletonAttribute = NewObject<T>(GameInstance);

		if (nullptr == SingletonAttribute)
			return;

		SingletonAttributeArray.Add(SingletonAttribute);
	}

	template<typename T>
	T* GetSingletonAttribute()
	{
		T* singletonAttribute = nullptr;

		for (int index = 0; index < SingletonAttributeArray.Num(); ++index)
		{
			if (SingletonAttributeArray[index]->GetClass() == T::StaticClass())
			{
				singletonAttribute = Cast<T>(SingletonAttributeArray[index]);
				break;
			}
		}

		return singletonAttribute;
	}

	void clearSingletonAttribute()
	{
		SingletonAttributeArray.Empty();
	}
};

#define GGameSingleton UGameSingleton::Get()
