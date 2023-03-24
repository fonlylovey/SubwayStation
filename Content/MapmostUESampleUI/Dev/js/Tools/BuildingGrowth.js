//自动播放动画
$("#startBuildingGrowth").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "startBuildingGrowth",
        "data": {
            "modelName": "cehui_Grow"
        }
    })
})
//暂停播放
$("#pauseBuildingGrowth").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "pauseBuildingGrowth",
        "data": {
            "modelName": "cehui_Grow"
        }
    })
})
//继续播放动画
$("#continueBuildingGrowth").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "continueBuildingGrowth",
        "data": {
            "modelName": "cehui_Grow"
        }
    })
})
//停止
$("#stopBuildingGrowth").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "stopBuildingGrowth",
        "data": {
            "modelName": "cehui_Grow"
        }
    })
})
//设置进度
$("#setBuildingGrowthProgress").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "setBuildingGrowthProgress",
        "data": {
            "modelName": "cehui_Grow",
            "progress":40
        }
    })
})
//设置楼层
$("#setBuildingToCertainFloor").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "BuildingGrowth",
        "method": "setBuildingToCertainFloor",
        "data": {
            "modelName": "cehui_Grow",
            "floorNumber":5
        }
    })
})