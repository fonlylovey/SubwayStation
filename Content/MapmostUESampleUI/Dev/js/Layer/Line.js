// 添加多段线
$("#addPolyline").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Line",
        "method": "addPolyline",
        "data": {
            "type":"dynamic",
            "color":"#66cc66",
            "arrowNumber": 15,
            "points": [
                {
                    "location":[120.675812,31.314388,5]
                },
                {
                    "location":[120.675896,31.319254,5]
                },
                {
                    "location":[120.674774,31.321682,5]
                }
            ]
        }
    })
})

// 删除多段线
$("#removePolyline").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Line",
        "method": "removePolyline",
        "data": {

        }
    })
})

// 添加飞线
$("#addFlyLine").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Line",
        "method": "addFlyLine",
        "data": {
            "fromPoint": [120.711937, 31.323805,  0.5],
            "toPoint":[120.705399, 31.325958, 80]
        }
    })
})

// 删除飞线
$("#removeFlyLine").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Line",
        "method": "removeFlyLine",
        "data": {

        }
    })
})