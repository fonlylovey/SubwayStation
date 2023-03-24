// 进入剖切模式
$("#startClip").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "startClip",
        "data": {

        }
    })
})

// 退出剖切模式
$("#stopClip").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "stopClip",
        "data": {

        }
    })
})

// 添加体剖分
$("#addClipBox").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "addClipBox",
        "data": {
            "location": [120.675362,31.318861,20],
            "rotation": [0, 180, 40],
            "length": 200, // 单位米
            "width": 100, // 单位米
            "height": 80 // 单位米
        }
    })
})

// 删除体剖分
$("#removeClipBox").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "removeClipBox",
        "data": {

        }
    })
})

// 添加体剖分包围区域点的回调
$("#addClipAreaChangedListener").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "setOnClipAreaChanged",
        "data": {

        }
    })

    // 地图坐标拾取，返回点击的对象和坐标值的监听
    ue.interface.onClipAreaChanged = function (val) {
        console.log(val)
    };
})

// 移除体剖分包围区域点的回调
$("#removeClipAreaChangedListener").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Clip",
        "method": "removeOnClipAreaChanged",
        "data": {

        }
    })
})