// 进入天际线分析模式
$("#startSkyLineAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "SkyLine",
        "method": "startSkyLineAnalysis",
        "data": {

        }
    });
})

// 退出天际线分析模式
$("#stopSkyLineAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "SkyLine",
        "method": "stopSkyLineAnalysis",
        "data": {

        }
    })
})