// Fill out your copyright notice in the Description page of Project Settings.


#include "StationInstanceSubsystem.h"

#include "FloorInstanceSubsystem.h"

void UStationInstanceSubsystem::ExecJsEvent(const FString& jsonData)
{
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
	
}
