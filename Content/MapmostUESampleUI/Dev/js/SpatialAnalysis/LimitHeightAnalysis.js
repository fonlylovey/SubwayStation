// 添加限高分析
$("#addLimitHeightAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "LimitHeight",
        "method": "addLimitHeightAnalysis",
        "data": {
            "location": [120.67495727539062,31.318998336791992,100], // 正方形中心点
            "degree": -10, // 沿竖直轴向旋转角度，从正东开始，往南为正，往北为负
            "sideLength":500 // 正方形边长，单位是米
        }
    });
})

// 删除限高分析
$("#removeLimitHeightAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "LimitHeight",
        "method": "removeLimitHeightAnalysis",
        "data": {

        }
    })
})

// 开始限高分析
$("#startLimitHeightAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "LimitHeight",
        "method": "startLimitHeightAnalysis",
        "data": {

        }
    });
})

// 结束限高分析
$("#stopLimitHeightAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "LimitHeight",
        "method": "stopLimitHeightAnalysis",
        "data": {

        }
    })
})