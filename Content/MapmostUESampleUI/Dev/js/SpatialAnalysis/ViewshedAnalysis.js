// 进入视域分析模式
$("#startViewshedAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "ViewshedAnalysis",
        "method": "startViewshedAnalysis",
        "data": {

        }
    })
    console.log(app.ViewAnalysisPanelShow)
    app.ViewAnalysisPanelShow = true
    
})

// 退出视域分析模式
$("#stopViewshedAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "ViewshedAnalysis",
        "method": "stopViewshedAnalysis",
        "data": {

        }
    })
})

// 添加视域分析
$("#addViewshedAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "ViewshedAnalysis",
        "method": "addViewshedAnalysis",
        "data": {
            "position": [120.67153930664062, 31.314273834228516, 101.58743286132812],
            "rotation": [0,180,40],
            "horizontalDegree": 60,
            "verticalDegree": 30,
            "viewDistance": 1500 // 单位米
        }
    });
})

// 删除视域分析
$("#removeViewshedAnalysis").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "ViewshedAnalysis",
        "method": "removeViewshedAnalysis",
        "data": {

        }
    })
})