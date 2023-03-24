// Fill out your copyright notice in the Description page of Project Settings.


#include "UtilsLibrary.h"

void UtilsLibrary::Log(FString str, bool bScreen, float fFtime, FColor color)
{
	str = FString::Printf(TEXT("Log: %s"), *str);
	UE_LOG(LogTemp, Warning, TEXT("%s"), *str);
	if (bScreen)
	{
		GEngine->AddOnScreenDebugMessage(-1, fFtime, color, str);
	}
}
