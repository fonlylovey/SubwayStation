// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "ExtObject.generated.h"

/**
 * 
 */

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnExtObjectDestroyed);

UCLASS(Blueprintable)
class FLOORSHOW_API UExtObject : public UObject, public FTickableGameObject
{
	GENERATED_BODY()

protected:
	/** 类初始化时调用 */
	virtual void OnBegin();
	/** 使用 DestroyObject() 回收当前对象时调用 */
	virtual void OnEnd();

public:
	/** 是否启用 Tick() */
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "DevExtension|ExtObject")
	bool bIsTickable;

	/** 当使用 DestroyObject() 回收对象时调用 */
	UPROPERTY(BlueprintAssignable, Category = "DevExtension|ExtObject")
	FOnExtObjectDestroyed OnExtObjectDestroyed;

public:
	/** 在大部分变量都初始化结束后调用 */
	virtual void PostInitProperties() override;
	virtual UWorld* GetWorld() const override;

	//~ Begin FTickableObjectBase Interface.
	virtual void Tick(float DeltaTime) override;
	virtual bool IsTickable() const override { return bIsTickable && !HasAnyFlags(EObjectFlags::RF_ClassDefaultObject); }
	virtual TStatId GetStatId() const override { return Super::GetStatID(); }
	virtual bool IsTickableWhenPaused() const override { return false; }
	virtual bool IsTickableInEditor() const override { return false; }
	virtual UWorld* GetTickableGameObjectWorld() const override { return GetOuter()->GetWorld(); }
	//~ End FTickableObjectBase Interface.

	/** 蓝图重写, 类初始化时调用 */
	UFUNCTION(BlueprintImplementableEvent)
	void BeginPlay();

	/** 蓝图重写，每帧更新 */
	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "Tick"))
	void ReceiveTick();

	/** 蓝图重写, 使用 DestroyObject() 回收当前对象时调用 */
	UFUNCTION(BlueprintImplementableEvent)
	void EndPlay();

	/** 销毁当前 ExtObject */
	UFUNCTION(BlueprintCallable)
	virtual void DestroyObject();
};
