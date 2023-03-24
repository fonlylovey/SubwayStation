// 进入视域分析模式
$("#startViewshedAnalysis").click(function () {
    mapmostUE.startViewshedAnalysis( );
})

// 退出视域分析模式
$("#stopViewshedAnalysis").click(function () {
    mapmostUE.stopViewshedAnalysis( );
})


// 添加视域分析
$("#addViewshedAnalysis").click(function () {

    mapmostUE.flyTo({
        "location":[120.67356872558594, 31.30621337890625, 300],
        "rotation": [0, -23, -110],
        "time": 2
    });

    mapmostUE.addViewshedAnalysis( {
        "position": [120.67355346679688, 31.310224533081055, 66],
        "rotation": [0, -13.70693, -137.395538],
        "horizontalDegree": 60,
        "verticalDegree": 45,
        "viewDistance": 500 // 单位米
    });
})

// 删除视域分析
$("#removeViewshedAnalysis").click(function () {
    mapmostUE.removeViewshedAnalysis( );
})
