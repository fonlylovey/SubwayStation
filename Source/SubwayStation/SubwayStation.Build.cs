// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class SubwayStation : ModuleRules
{
	public SubwayStation(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
	
		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore",
			"MapmostUE",
			"Json",
			"JsonUtilities",
			"CesiumRuntime"
		});
		
		PrivateDependencyModuleNames.AddRange(new string[] { "FloorShow" });
		
		// Uncomment if you are using Slate U
		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });
		
		// Uncomment if you are using online features
		// PrivateDependencyModuleNames.Add("OnlineSubsystem");

		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true
	}
}
