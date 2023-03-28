// Fill out your copyright notice in the Description page of Project Settings.


#include "FloorInstanceSubsystem.h"

#include "Manager/FloorManager.h"
#include "Singleton/GameSingleton.h"

void UFloorInstanceSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
	
	UGameSingleton::InitGameSingleton(this);
}

void UFloorInstanceSubsystem::Deinitialize()
{
	Super::Deinitialize();

	UGameSingleton::UninitGameSingleton();
}

void UFloorInstanceSubsystem::Execute(const FString& Data)
{
	TSharedPtr<FJsonObject> JsonObject = nullptr;
	TSharedRef<TJsonReader<>> JsonReader = TJsonReaderFactory<TCHAR>::Create(Data);
	FJsonSerializer::Deserialize(JsonReader, JsonObject);

	FString FunctionName = JsonObject->GetStringField("functionName");
	TSharedPtr<FJsonObject> ParamObject = JsonObject->GetObjectField("params");
	if (ParamObject.IsValid())
	{
		if (FunctionName == "FloorLift")
		{
			FloorLift(ParamObject->GetStringField("buildingName"), ParamObject->GetIntegerField("floorIndex"));	
		}
		if (FunctionName == "SpaceSwitch")
		{
			SpaceSwitch(ParamObject->GetStringField("buildingName"), !ParamObject->GetBoolField("isPlane"));
		}
		if (FunctionName == "ReverseLiftBuilding")
		{
			ReverseLiftBuilding(ParamObject->GetStringField("buildingName"));
		}
	}
}

void UFloorInstanceSubsystem::FloorLift(const FString& BuildingName, const int32 FloorIndex)
{
	GFloorManager->LiftFloor(BuildingName, FloorIndex, false, true);
	GFloorManager->SetFloorTransparent(BuildingName, FloorIndex, TEXT("Transparency"), 0, true);
}

void UFloorInstanceSubsystem::ReverseLiftBuilding(const FString& BuildingName)
{
	GFloorManager->LiftBuilding(BuildingName, true, true);
	GFloorManager->SetBuildingTransparent(BuildingName, TEXT("Transparency"), 1, true);
}

void UFloorInstanceSubsystem::SpaceSwitch(const FString& BuildingName, bool bSwitchToThreeDim)
{
	GFloorManager->SpaceSwitch(BuildingName, bSwitchToThreeDim);
}
