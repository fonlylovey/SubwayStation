// Fill out your copyright notice in the Description page of Project Settings.


#include "Singleton/GameSingleton.h"

#include "Kismet/GameplayStatics.h"
#include "Manager/FloorManager.h"

UGameSingleton* UGameSingleton::Get()
{
#if WITH_EDITOR

    return Cast<UGameSingleton>(GEngine->GameSingleton);
#else

    static UGameSingleton* singletonObject = Cast<UGameSingleton>(GEngine->GameSingleton);
    return singletonObject;

#endif
}

void UGameSingleton::InitGameSingleton(UObject* WorldContextObject)
{
    GGameSingleton->AddSingletonAttribute<UFloorManager>(UGameplayStatics::GetGameInstance(WorldContextObject->GetWorld()));
}

void UGameSingleton::UninitGameSingleton()
{
    GGameSingleton->clearSingletonAttribute();
}
