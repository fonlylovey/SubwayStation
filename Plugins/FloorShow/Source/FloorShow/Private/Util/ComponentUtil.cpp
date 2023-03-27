// Fill out your copyright notice in the Description page of Project Settings.


#include "Util/ComponentUtil.h"

void UComponentUtil::AddComponents(TArray<AActor*> Actors, TSubclassOf<UActorComponent> Components, bool RemoveComponent)
{
	if (Actors.Num() > 0)
	{
		for (AActor* ActorItr : Actors)
		{
			if (IsValid(Components))
			{
#if WITH_EDITOR
				if (RemoveComponent)
				{
					UActorComponent* RemoveComponent = ActorItr->GetComponentByClass(Components);
					if (RemoveComponent)
					{
						RemoveComponent->UnregisterComponent();
						RemoveComponent->DestroyComponent();
					}
				}
				else
				{
					UActorComponent* AddComponent = NewObject<UActorComponent>(ActorItr, Components);
					ActorItr->AddInstanceComponent(AddComponent);
					//重要，必须要注册组件
					AddComponent->RegisterComponent();
				}
#endif
			}
		}
	}
}
