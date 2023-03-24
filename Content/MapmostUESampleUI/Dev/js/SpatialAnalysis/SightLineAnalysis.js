// 进入通视分析模式
$("#startSightLineAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "SightLine",
        "method": "startSightLineAnalysis",
        "data": {

        }
    });
})

// 退出通视分析模式
$("#stopSightLineAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "SightLine",
        "method": "stopSightLineAnalysis",
        "data": {

        }
    })
})