// Fill out your copyright notice in the Description page of Project Settings.


#include "Manager/FloorManager.h"

#include "Component/FloorComponent.h"
#include "DSP/BufferOnePoleLPF.h"
#include "Kismet/GameplayStatics.h"
#include "Singleton/GameSingleton.h"
#include "Util/ColorConstants.h"

UFloorManager* UFloorManager::GetFloorManager()
{
	if (GGameSingleton)
	{
		return GGameSingleton->GetSingletonAttribute<UFloorManager>();
	}

	return nullptr;
}

void UFloorManager::InitFloorManager(UObject* WorldContextObject)
{
	GGameSingleton->AddSingletonAttribute<UFloorManager>(
		UGameplayStatics::GetGameInstance(WorldContextObject->GetWorld()));
}

void UFloorManager::UninitFloorManager()
{
}

void UFloorManager::EmplaceBuilding(const FString& BuildingName, FBuilding BuildingStruct)
{
	BuildingMap.Emplace(BuildingName, BuildingStruct);
}

void UFloorManager::EmplaceFloor(const FString& BuildingName, int32 FloorIndex, AActor* Floor)
{
	FBuilding& BuildingStruct = BuildingMap.FindOrAdd(BuildingName);
	BuildingStruct.FloorMap.Emplace(FloorIndex, Floor);
}

FBuilding UFloorManager::GetBuilding(const FString& BuildingName)
{
	return BuildingMap.FindRef(BuildingName);
}

TArray<AActor*> UFloorManager::GetBuildingArray(const FString& BuildingName)
{
	FBuilding BuildingStruct = GetBuilding(BuildingName);
	TArray<AActor*> BuildingArray;
	BuildingStruct.FloorMap.GenerateValueArray(BuildingArray);
	return BuildingArray;
}

TArray<UFloorComponent*> UFloorManager::GetBuildingComponentArray(const FString& BuildingName)
{
	TArray<AActor*> BuildingArray = GetBuildingArray(BuildingName);
	TArray<UFloorComponent*> Components;

	for (auto& Itr : BuildingArray)
	{
		UActorComponent* Component = Itr->GetComponentByClass(UFloorComponent::StaticClass());
		if (Component != nullptr)
		{
			Components.Add(Cast<UFloorComponent>(Component));
		}
	}

	return Components;
}

AActor* UFloorManager::GetFloor(const FString& BuildingName, int32 FloorIndex)
{
	//查找楼栋
	FBuilding* BuildingStruct = BuildingMap.Find(BuildingName);
	if (BuildingStruct != nullptr)
	{
		//查找楼层
		AActor** Floor = BuildingStruct->FloorMap.Find(FloorIndex);
		if (Floor != nullptr)
		{
			return *Floor;
		}
	}

	return nullptr;
}

UFloorComponent* UFloorManager::GetFloorComponent(const FString& BuildingName, int32 FloorIndex)
{
	AActor* Floor = GetFloor(BuildingName, FloorIndex);
	if (Floor != nullptr)
	{
		UActorComponent* Component = Floor->GetComponentByClass(UFloorComponent::StaticClass());
		if (Component != nullptr)
		{
			return Cast<UFloorComponent>(Component);
		}
	}
	return nullptr;
}

void UFloorManager::SpaceSwitch(const FString& BuildingName, bool bSwitchToThreeDim)
{
	TArray<AActor*> BuildingArray = GetBuildingArray(BuildingName);

	for (auto& Itr : BuildingArray)
	{
		UActorComponent* FloorComponent = Itr->GetComponentByClass(UFloorComponent::StaticClass());
		if (FloorComponent != nullptr)
		{
			Cast<UFloorComponent>(FloorComponent)->SpaceSwitch(bSwitchToThreeDim);
		}
	}
}

void UFloorManager::SetBuildingTransparent(const FString& BuildingName, FName ParameterName, float Transparency, bool bLerp)
{
	TArray<AActor*> BuildingArray = GetBuildingArray(BuildingName);

	for (auto& Itr : BuildingArray)
	{
		UActorComponent* FloorComponent = Itr->GetComponentByClass(UFloorComponent::StaticClass());
		if (FloorComponent != nullptr)
		{
			Cast<UFloorComponent>(FloorComponent)->SetTransparent(ParameterName, Transparency, bLerp);
		}
	}
}

void UFloorManager::SetFloorTransparent(const FString& BuildingName, const int32 FloorIndex,FName ParameterName, float Transparency,
                                        bool bLerp)
{
	AActor* Floor = GetFloor(BuildingName, FloorIndex);
	if (Floor != nullptr)
	{
		UActorComponent* FloorComponent = Floor->GetComponentByClass(UFloorComponent::StaticClass());
		if (FloorComponent != nullptr)
		{
			Cast<UFloorComponent>(FloorComponent)->SetTransparent(ParameterName, Transparency, bLerp);
		}
	}
}

void UFloorManager::SetBuilldingHidden(const FString& BuildingName, bool bNewHidden)
{
	TArray<AActor*> BuildingArray = GetBuildingArray(BuildingName);

	for (auto& Itr : BuildingArray)
	{
		Itr->SetActorHiddenInGame(bNewHidden);
	}
}

void UFloorManager::SetFloorHidden(const FString& BuildingName, int32 FloorIndex, bool bNewHidden)
{
	AActor* Floor = GetFloor(BuildingName, FloorIndex);
	if (Floor != nullptr)
	{
		Floor->SetActorHiddenInGame(bNewHidden);
	}
}

void UFloorManager::LiftBuilding(const FString& BuildingName, bool bReverse, bool bLerp)
{
	TArray<UFloorComponent*> FloorComponents = GetBuildingComponentArray(BuildingName);

	for (auto& Itr : FloorComponents)
	{
		Itr->FloorLift(bReverse, bLerp);
	}
}

void UFloorManager::LiftFloor(const FString& BuildingName, int32 FloorIndex, bool bReverse, bool bLerp)
{
	UFloorComponent* Component = GetFloorComponent(BuildingName, FloorIndex);
	if (Component != nullptr)
	{
		Component->FloorLift(bReverse, bLerp);
	}
}
