// Fill out your copyright notice in the Description page of Project Settings.


#include "StationInstanceSubsystem.h"
#include "AnimationPath/AnimationPathActor.h"
#include "Common/UtilsLibrary.h"
#include "CesiumGeoreference.h"

#include "FloorInstanceSubsystem.h"

void UStationInstanceSubsystem::ExecJsEvent(const FString& jsonData)
{
	if(Georeference == nullptr)
	{
		Georeference = ACesiumGeoreference::GetDefaultGeoreference(this);
	}
	Test1(jsonData);
	Fengya(jsonData);
}

void UStationInstanceSubsystem::Test1(const FString& jsonData)
{
	//to do tranlate animation

	GetGameInstance()->GetSubsystem<UFloorInstanceSubsystem>()->Execute(jsonData);
	
}

void UStationInstanceSubsystem::Fengya(const FString& jsonData)
{
	
	TSharedRef< TJsonReader<> > Reader = TJsonReaderFactory<>::Create(jsonData);
	TSharedPtr<FJsonObject> rootObj;
	bool bSuccess = FJsonSerializer::Deserialize(Reader, rootObj);
	if(jsonData.Contains(TEXT("addAnimationPath")))
	{
		if(bSuccess)
		{
			FAnimationPathData data;
			TSharedPtr<FJsonObject> paramsObj = rootObj->GetObjectField("params");
			data.ID =  paramsObj->GetStringField(TEXT("ID"));
			data.Name = paramsObj->GetStringField(TEXT("Name"));
			data.Duration = paramsObj->GetNumberField(TEXT("Duration"));
			data.IsLoop = paramsObj->GetBoolField(TEXT("IsLoop"));
			data.MeshRefPath = paramsObj->GetStringField(TEXT("MeshRefPath"));
			data.AnimRefPath = paramsObj->GetStringField(TEXT("AnimRefPath"));
			auto keypoints = paramsObj->GetArrayField(TEXT("KeyPoints"));
			for (auto JsonValue : keypoints)
			{
				auto item = JsonValue->AsArray();
				FVector3d keyPoint = FVector3d(item[0]->AsNumber(), item[1]->AsNumber(), 0);
				data.KeyPoints.Add(Georeference->TransformLongitudeLatitudeHeightToUnreal(keyPoint));
			}

			auto* pathActor = GWorld->SpawnActor<AAnimationPathActor>(AAnimationPathActor::StaticClass());
			pathActor->InitData(data);
			ActorList.Add(pathActor);
		}
	}
	else if (jsonData.Contains(TEXT("removeAnimationPath")))
	{
		for (auto actor : ActorList)
		{
			GWorld->DestroyActor(actor);
		}
	}
	else if (jsonData.Contains(TEXT("addPOIFeature")))
	{
		
	}
	else if (jsonData.Contains(TEXT("removePOIFeature")))
	{
		
	}

	
}
