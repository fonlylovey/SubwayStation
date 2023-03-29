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
	UE_LOG(LogTemp, Warning, TEXT("%p"), this);
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

	int32 BuildingArrNum = BuildingArray.Num();
	for (int32 i = 0; i < BuildingArrNum; i++)
	{
		TArray<AActor*> TempFloor;
		BuildingArray[i]->GetAttachedActors(TempFloor, true, true);
		BuildingArray.Append(TempFloor);
	}
	
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

TArray<AActor*> UFloorManager::GetFloorWithAttached(const FString& BuildingName, int32 FloorIndex)
{
	AActor* Floor = GetFloor(BuildingName, FloorIndex);
	TArray<AActor*> AttachedActors;
	Floor->GetAttachedActors(AttachedActors, true, true);
	AttachedActors.Add(Floor);
	return AttachedActors;
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

TArray<UFloorComponent*> UFloorManager::GetFloorComponentHigher(const FString& BuildingName, int32 FloorIndex)
{
	TArray<UFloorComponent*> Result;
	TArray<UFloorComponent*> Components = GetBuildingComponentArray(BuildingName);

	for (auto& Itr : Components)
	{
		if (Itr->FloorIndex > FloorIndex)
		{
			Result.Add(Itr);
		}
	}

	return Result;
}

TArray<UFloorComponent*> UFloorManager::GetFloorComponentLower(const FString& BuildingName, int32 FloorIndex)
{
	TArray<UFloorComponent*> Result;
	TArray<UFloorComponent*> Components = GetBuildingComponentArray(BuildingName);

	for (auto& Itr : Components)
	{
		if (Itr->FloorIndex < FloorIndex)
		{
			Result.Add(Itr);
		}
	}

	return Result;
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

void UFloorManager::SetBuildingTransparent(const FString& BuildingName, FName ParameterName, float Transparency,
                                           bool bLerp)
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

void UFloorManager::SetFloorTransparent(const FString& BuildingName, const int32 FloorIndex, FName ParameterName,
                                        float Transparency,
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
	TArray<AActor*> Floor = GetFloorWithAttached(BuildingName, FloorIndex);
	for (auto& Itr : Floor)
	{
		Itr->SetActorHiddenInGame(bNewHidden);
	}
}

void UFloorManager::LiftBuilding(const FString& BuildingName, bool bReverse, bool bLerp, FOnTimelineEvent OnTimelineFinished)
{
	TArray<UFloorComponent*> FloorComponents = GetBuildingComponentArray(BuildingName);

	for (auto& Itr : FloorComponents)
	{
		Itr->FloorLift(bReverse, bLerp, OnTimelineFinished);
	}
}

void UFloorManager::ShowFloor(const FString& BuildingName, int32 FloorIndex, bool bReverse, bool bLerp, FOnTimelineEvent OnTimelineFinished)
{
	TArray<UFloorComponent*> Components = GetFloorComponentHigher(BuildingName, FloorIndex);
	for (auto& Itr : Components)
	{
		Itr->FloorLift(bReverse, bLerp, OnTimelineFinished);
	}
}

void UFloorManager::HighlightFloor(const FString& BuildingName, int32 FloorIndex)
{
	TArray<UFloorComponent*> Components = GetBuildingComponentArray(BuildingName);
	for (auto& Itr : Components)
	{
		Itr->SetAsTransparency(Itr->FloorIndex == FloorIndex, nullptr);
	}
}

void UFloorManager::ReverseHighlight(const FString& BuildingName)
{
	TArray<UFloorComponent*> Components = GetBuildingComponentArray(BuildingName);
	for (auto& Itr : Components)
	{
		Itr->SetAsTransparency(true, nullptr);
	}
}
