// 添加注记
$("#addTexts").click(function () {
    //let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_simple.geojson";
    //let url = "http://127.0.0.1:8080/road_simple.geojson";
    // 测试数据，3000个注记点与5000个注记点
    // let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_3000.geojson";
    let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_5000.geojson";
    console.log(url)
    fetch(url).then(res => res.json()).then(response => {
        console.log(response.features.length)
        console.log(response)
        ue5("Layer", {
            "module": "Layer",
            "subModule": "Text",
            "method": "addTexts",
            "data": {
                "textData": response.features,
                "height": 8
            }
        })
    });
})

// 删除注记
$("#removeTexts").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "removeTexts",
        "data": {

        }
    })
})

// 添加注记
$("#addTextsNew").click(function () {
    //let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_simple.geojson";
    //let url = "http://127.0.0.1:8080/road_simple.geojson";
    // 测试数据，3000个注记点与5000个注记点
    // let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_3000.geojson";
    let url = "http://192.168.34.213:8888/SIPSD/road/yuanqu_road_5000.geojson";
    console.log(url)
    fetch(url).then(res => res.json()).then(response => {
        console.log(response.features.length)
        console.log(response)
        ue5("Layer", {
            "module": "Layer",
            "subModule": "Text",
            "method": "addTextsNew",
            "data": {
                "textData": response.features,
                "height": 8
            }
        })
    });
})

// 删除注记
$("#removeTextsNew").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "removeTextsNew",
        "data": {

        }
    })
})

// 开启避让效果
$("#startAvoidance").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "setTextAvoidance",
        "data": {
            "canAvoid": true
        }
    })
})

// 关闭避让效果
$("#stopAvoidance").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "setTextAvoidance",
        "data": {
            "canAvoid": false
        }
    })
})

// 开启避让效果
$("#startAvoidanceNew").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "setTextAvoidanceNew",
        "data": {
            "canAvoid": true
        }
    })
})

// 关闭避让效果
$("#stopAvoidanceNew").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Text",
        "method": "setTextAvoidanceNew",
        "data": {
            "canAvoid": false
        }
    })
})