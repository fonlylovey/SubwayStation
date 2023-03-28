// Fill out your copyright notice in the Description page of Project Settings.


#include "FloorInstanceSubsystem.h"

#include "Component/FloorComponent.h"
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

	//获取函数名
	FString FunctionName = JsonObject->GetStringField("functionName");
	//获取函数参数
	TSharedPtr<FJsonObject> ParamObject = JsonObject->GetObjectField("params");
	if (ParamObject.IsValid())
	{
		if (FunctionName == "FloorLift")
		{
			FloorLift(ParamObject->GetStringField("buildingName"), ParamObject->GetIntegerField("floorIndex"));
		}
		if (FunctionName == "Highlight")
		{
			HighlightFloor(ParamObject->GetStringField("buildingName"), ParamObject->GetIntegerField("floorIndex"));
		}
		if (FunctionName == "SpaceSwitch")
		{
			SpaceSwitch(ParamObject->GetStringField("buildingName"), !ParamObject->GetBoolField("isPlane"));
		}
		if (FunctionName == "ReverseLiftBuilding")
		{
			ReverseLiftBuilding(ParamObject->GetStringField("buildingName"));
		}
		if (FunctionName == "ReverseHighlight")
		{
			ReverseHighlight(ParamObject->GetStringField("buildingName"));
		}
	}
}

void UFloorInstanceSubsystem::FloorLift(const FString& BuildingName, const int32 FloorIndex)
{
	//增加第零层抬升高度
	UFloorComponent* Component = GFloorManager->GetFloorComponent("Station", 0);
	if (Component != nullptr)
	{
		Component->SetLiftLocation(FVector(Component->GetLiftLocation().X, Component->GetLiftLocation().Y, 4000));
	}	

	//移动楼层
	GFloorManager->ShowFloor(BuildingName, FloorIndex, false, true);
	
	//设置物体透明渐变
	// GFloorManager->SetFloorTransparent(BuildingName, FloorIndex, TEXT("Transparency"), 0, true);
}

void UFloorInstanceSubsystem::ReverseLiftBuilding(const FString& BuildingName)
{
	//还原楼层位置楼层
	GFloorManager->LiftBuilding(BuildingName, true, true);
	//设置物体透明渐变
	// GFloorManager->SetBuildingTransparent(BuildingName, TEXT("Transparency"), 1, true);
}

void UFloorInstanceSubsystem::SpaceSwitch(const FString& BuildingName, bool bSwitchToThreeDim)
{
	GFloorManager->SpaceSwitch(BuildingName, bSwitchToThreeDim);
}

void UFloorInstanceSubsystem::HighlightFloor(const FString& BuildingName, const int32 FloorIndex)
{
	GFloorManager->HighlightFloor(BuildingName, FloorIndex);
}

void UFloorInstanceSubsystem::ReverseHighlight(const FString& BuildingName)
{
	GFloorManager->ReverseHighlight(BuildingName);
}
