// 进入方案比对
$("#enterMultiScreen").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "PlanCompare",
        "method": "startPlanCompare",
        "data": {

        }
    })
})

// 退出方案比对
$("#quitMultiScreen").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "PlanCompare",
        "method": "stopPlanCompare",
        "data": {

        }
    })
})