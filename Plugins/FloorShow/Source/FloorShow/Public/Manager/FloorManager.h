// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Singleton/SingletonAttribute.h"
#include "FloorManager.generated.h"

/**
 * 描述建筑楼栋构成
 */
USTRUCT(BlueprintType)
struct FBuilding
{
	GENERATED_BODY()

public:
	UPROPERTY()
	TMap<int32, AActor*> FloorMap;
};

/**
 * 楼层管理器
 */
UCLASS()
class FLOORSHOW_API UFloorManager : public USingletonAttribute
{
	GENERATED_BODY()

private:
	//保存所有楼栋
	UPROPERTY()
	TMap<FString, FBuilding> BuildingMap;

public:
	/**
	 * 获取楼层管理器
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	static UFloorManager* GetFloorManager();

	/**
	 * 初始化楼层管理器
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager", meta = (WorldContext = "WorldContextObject"))
	static void InitFloorManager(UObject* WorldContextObject);

	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	static void UninitFloorManager();

	/**
	 * 添加楼栋
	 *
	 * @param BuildingName		楼栋名称
	 * @param BuildingStruct	楼栋结构
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void EmplaceBuilding(const FString& BuildingName, FBuilding BuildingStruct);

	/**
	 * 添加楼层
	 *
	 * @param	BuildingName	楼栋名称
	 * @param	FloorIndex		楼层号
	 * @param	Floor			楼栋
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void EmplaceFloor(const FString& BuildingName, const int32 FloorIndex, AActor* Floor);

	/**
	 * 获取楼栋
	 *
	 * @param	BuildingName 楼栋名称
	 * @return	查找到的楼栋
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	FBuilding GetBuilding(const FString& BuildingName);

	/**
	 * 获取楼栋并以数组的形式返回
	 *
	 * @param BuildingName 楼栋名称
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	TArray<AActor*> GetBuildingArray(const FString& BuildingName);
	
	/**
	 * 获取楼层组件并以数组的形式返回
	 *
	 * @param BuildingName 楼栋名称
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	TArray<UFloorComponent*> GetBuildingComponentArray(const FString& BuildingName);

	/**
	 * 获取楼层
	 *
	 * @param	BuildingName	楼栋名称
	 * @param	FloorIndex		楼层号
	 * @return	查找到的楼层，未查询到则返回 nullptr
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	AActor* GetFloor(const FString& BuildingName, int32 FloorIndex);

	/**
	 * 获取楼层组件
	 *
	 * @param BuildingName		楼栋名称
	 * @param FloorIndex		楼层号
	 */
	UFUNCTION(BlueprintPure, Category = "FloorShow|FloorManager")
	UFloorComponent* GetFloorComponent(const FString& BuildingName, int32 FloorIndex);

	/**
	 * 楼栋三维，二维空间切换
	 *
	 * @param BuildingName			楼栋名称
	 * @param bSwitchToThreeDim		勾选切换到三维，不勾选切换到二维
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void SpaceSwitch(const FString& BuildingName, bool bSwitchToThreeDim);

	/**
	 * 楼栋透明度切换
	 *
	 * @param BuildingName			楼栋名称
	 * @param ParameterName			透明度参数名称
	 * @param Transparency			透明度
	 * @param bLerp					是否应用过渡
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void SetBuildingTransparent(const FString& BuildingName, FName ParameterName, float Transparency, bool bLerp);

	/**
	 * 楼层透明度切换
	 *
	 * @param BuildingName			楼栋名称
	 * @param FloorIndex			楼层号
	 * @param ParameterName			透明度参数名称
	 * @param Transparency			透明度
	 * @param bLerp					是否应用过渡
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void SetFloorTransparent(const FString& BuildingName, int32 FloorIndex, FName ParameterName, float Transparency, bool bLerp);

	/**
	 * 设置楼栋可见性
	 *
	 * @param BuildingName		楼栋名称
	 * @param bNewHidden		可见性
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void SetBuilldingHidden(const FString& BuildingName, bool bNewHidden);

	/**
	 * 设置楼层可见性
	 *
	 * @param BuildingName		楼栋名称
	 * @param FloorIndex		楼层号
	 * @param bNewHidden		可见性
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void SetFloorHidden(const FString& BuildingName, int32 FloorIndex, bool bNewHidden);

	/**
	 * 楼栋抬升
	 *
	 * @param BuildingName		楼栋名称
	 * @param bReverse			是否复原到初始位置
	 * @param bLerp				是否启用过渡
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void LiftBuilding(const FString& BuildingName, bool bReverse, bool bLerp);

	/**
	 * 楼层抬升
	 *
	 * @param BuildingName		楼栋名称
	 * @param FloorIndex		楼层号
	 * @param bReverse			是否复原到初始位置
	 * @param bLerp				是否启用过渡
	 */
	UFUNCTION(BlueprintCallable, Category = "FloorShow|FloorManager")
	void LiftFloor(const FString& BuildingName, int32 FloorIndex, bool bReverse, bool bLerp);
};