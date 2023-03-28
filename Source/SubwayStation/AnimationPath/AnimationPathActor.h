// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/SplineComponent.h"
#include "CesiumGlobeAnchorComponent.h"
#include "GameFramework/Actor.h"
#include "Math/TransformCalculus3D.h"
#include "AnimationPathActor.generated.h"

USTRUCT(BlueprintType)
struct FAnimationPathData
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere)
	FString ID;

	UPROPERTY(EditAnywhere)
	FString Name;

	UPROPERTY(EditAnywhere)
	float Duration;

	UPROPERTY(EditAnywhere)
	bool IsLoop;
	
	//动画主体的资产引用目录
	UPROPERTY(EditAnywhere)
	FString MeshRefPath;

	UPROPERTY(EditAnywhere)
	FVector3d DefaultTranslate;

	UPROPERTY(EditAnywhere)
	FRotator3d DefaultRotator;

	UPROPERTY(EditAnywhere)
	FVector3d DefaultScale;
	
	//路径动画的关键点
	UPROPERTY(EditAnywhere)
	TArray<FVector3d> KeyPoints;
};

UCLASS()
class SUBWAYSTATION_API AAnimationPathActor : public AActor
{
	GENERATED_BODY()

public:
	// Sets default values for this actor's properties
	AAnimationPathActor();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;
	virtual void BeginDestroy() override;
	
public:
	// Called every frame
	virtual void Tick(float DeltaTime) override;

	//通过json数据初始化业务
	void InitData(const FAnimationPathData& data);

	UFUNCTION(BlueprintCallable)
	FAnimationPathData GetAnimationData()
	{
		return AniData;
	}
	
public:
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	USplineComponent* MovePath = nullptr;

	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	UStaticMeshComponent* MoveMesh = nullptr;

	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	USkeletalMeshComponent* SkeMoveMesh = nullptr;
	
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
	UCesiumGlobeAnchorComponent* GlobeAnchor = nullptr;
	
	float currentTime = 0.0;

	bool isLoopPlay = true;

	bool isPlay = false;
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	float speedRate = 1.0;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FAnimationPathData AniData;
};
