// 进入三角量测
$("#startMeasureDistanceTriangulation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "startMeasureDistanceTriangulation",
        "data": {

        }
    })
})

// 退出三角量测
$("#stopMeasureDistanceTriangulation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "stopMeasureDistanceTriangulation",
        "data": {

        }
    })
})

// 进入连续面积量测
$("#startMeasureDistanceContinuation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "startMeasureDistanceContinuation",
        "data": {

        }
    })
})

// 退出连续面积量测
$("#stopMeasureDistanceContinuation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "stopMeasureDistanceContinuation",
        "data": {

        }
    })
})

// 进入连续面积量测
$("#startMeasureAreaContinuation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "startMeasureAreaContinuation",
        "data": {

        }
    })
})

// 退出连续面积量测
$("#stopMeasureAreaContinuation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "stopMeasureAreaContinuation",
        "data": {

        }
    })
})

// 进入投影面积量测
$("#startMeasureAreaProjection").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "startMeasureAreaProjection",
        "data": {

        }
    })
})

// 退出投影面积量测
$("#stopMeasureAreaProjection").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "Measure",
        "method": "stopMeasureAreaProjection",
        "data": {

        }
    })
})