// Fill out your copyright notice in the Description page of Project Settings.


#include "FloorInstanceSubsystem.h"

#include "Component/FloorComponent.h"
#include "Manager/FloorManager.h"
#include "Singleton/GameSingleton.h"

void UFloorInstanceSubsystem::FloorLiftFinished()
{
	if (!LiftFloorQueue.IsEmpty())
	{
		int32 FloorIndex;
		LiftFloorQueue.Dequeue(FloorIndex);
		GFloorManager->SetFloorHidden("Station", FloorIndex + 1, true);
	}
}

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
	// GEngine->AddOnScreenDebugMessage(-1, 1000, FColor::Green, "FloorLift" + FString::FromInt(FloorIndex));
	//修改第零层抬升高度
	UFloorComponent* Component_Zero = GFloorManager->GetFloorComponent("Station", 0);
	// GEngine->AddOnScreenDebugMessage(-1, 1000, FColor::Green, "GetFloor: " + FString::FromInt(FloorIndex) + "Successful");
	if (Component_Zero != nullptr)
	{
		Component_Zero->SetLiftLocation(FVector(Component_Zero->GetLiftLocation().X, Component_Zero->GetLiftLocation().Y, 15000));
	}

	//修改负一层抬升高度
	UFloorComponent* Component_B1 = GFloorManager->GetFloorComponent("Station", -1);
	// GEngine->AddOnScreenDebugMessage(-1, 1000, FColor::Green, "GetFloor: " + FString::FromInt(FloorIndex) + "Successful");
	if (Component_B1 != nullptr)
	{
		Component_B1->SetLiftLocation(FVector(Component_B1->GetLiftLocation().X, Component_B1->GetLiftLocation().Y, 15000));
	}

	
	LiftFloorQueue.Enqueue(FloorIndex);
	FOnTimelineEvent FinishedEvent;
	FinishedEvent.BindUFunction(this, TEXT("FloorLiftFinished"));
	
	//移动楼层
	GFloorManager->ShowFloor(BuildingName, FloorIndex, false, true, FinishedEvent);
	
	//设置物体透明渐变
	// GFloorManager->SetFloorTransparent(BuildingName, FloorIndex, TEXT("Transparency"), 0, true);
}

void UFloorInstanceSubsystem::ReverseLiftBuilding(const FString& BuildingName)
{
	GFloorManager->SetBuilldingHidden(BuildingName, false);
	//还原楼层位置楼层
	GFloorManager->LiftBuilding(BuildingName, true, true, FOnTimelineEvent());
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
