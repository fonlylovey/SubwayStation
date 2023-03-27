// Fill out your copyright notice in the Description page of Project Settings.


#include "FloorInstanceSubsystem.h"

#include "Manager/FloorManager.h"

void UFloorInstanceSubsystem::Execute(const FString& Data)
{
	TSharedPtr<FJsonObject> JsonObject = nullptr;
	TSharedRef<TJsonReader<>> JsonReader = TJsonReaderFactory<TCHAR>::Create(Data);
	FJsonSerializer::Deserialize(JsonReader, JsonObject);

	FString FunctionName = JsonObject->GetStringField("functionName");
	if (FunctionName == "FloorLift")
	{
		TSharedPtr<FJsonObject> ParamObject = JsonObject->GetObjectField("params");
		if (ParamObject.IsValid())
		{
			FloorLift(ParamObject->GetStringField("buildingName"), ParamObject->GetIntegerField("floorIndex"));	
		}
	}
}

void UFloorInstanceSubsystem::FloorLift(const FString& BuildingName, const int32 FloorIndex)
{
	GFloorManager->LiftFloor(BuildingName, FloorIndex, false, true);
}
