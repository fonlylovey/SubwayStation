// 量测工具


// 进入三角量测模式
$("#startMeasureDistanceTriangulation").click(function () {
    mapmostUE.startMeasureDistanceTriangulation( );
})

// 退出三角量测模式
$("#stopMeasureDistanceTriangulation").click(function () {
    mapmostUE.stopMeasureDistanceTriangulation( );
})

// 进入连续面积量测模式
$("#startMeasureAreaContinuation").click(function () {
    mapmostUE.startMeasureAreaContinuation();
})

// 退出连续面积量测模式
$("#stopMeasureAreaContinuation").click(function () {
    mapmostUE.stopMeasureAreaContinuation( );
})

// 进入连续距离量测模式
$("#startMeasureDistanceContinuation").click(function () {
    mapmostUE.startMeasureDistanceContinuation();
})

// 退出连续距离量测模式
$("#stopMeasureDistanceContinuation").click(function () {
    mapmostUE.stopMeasureDistanceContinuation();
})

// 进入投影面积量测模式
$("#startMeasureAreaProjection").click(function () {
    mapmostUE.startMeasureAreaProjection();
})

// 退出投影面积量测模式
$("#stopMeasureAreaProjection").click(function () {
    mapmostUE.stopMeasureAreaProjection();
})
