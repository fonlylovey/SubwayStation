// Fill out your copyright notice in the Description page of Project Settings.


#include "Base/ExtObject.h"

void UExtObject::OnBegin()
{
	BeginPlay();
}

void UExtObject::OnEnd()
{
	EndPlay();
}

void UExtObject::PostInitProperties()
{
	UObject::PostInitProperties();

	/** 只在游戏世界中调用 */
	if (GetWorld())
	{
		OnBegin();
	}
}

UWorld* UExtObject::GetWorld() const
{
	// CDO objects do not belong to a world
	// If the actors outer is destroyed or unreachable we are shutting down and the world should be nullptr
	if (!HasAnyFlags(RF_ClassDefaultObject) && ensureMsgf(GetOuter(), TEXT("Actor: %s has a null OuterPrivate in AActor::GetWorld()"), *GetFullName())
		&& !GetOuter()->HasAnyFlags(RF_BeginDestroyed) && !GetOuter()->IsUnreachable())
	{
		return GetOuter()->GetWorld();
	}
	return nullptr;

	/*
	// Возвращаем ссылку на мир из владельца объекта, если не работаем редакторе.
	if (!FApp::IsGame()) return nullptr;
	else if (GetOuter()) return GetOuter()->GetWorld();
	else return nullptr;
	*/
}

void UExtObject::Tick(float DeltaTime)
{
	ReceiveTick();
}

void UExtObject::DestroyObject()
{
	UE_LOG(LogTemp, Log, TEXT("%s 已被销毁!"), *this->GetName());

	OnEnd();
	if (this && OnExtObjectDestroyed.IsBound())
	{
		OnExtObjectDestroyed.Broadcast();
	}

	//标记为需要被回收，所有引用置空
	this->MarkPendingKill();
	//this->MarkAsGarbage();
}
