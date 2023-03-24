// 开启管线横截面分析
$("#startCSection").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Analysis",
        "method": "startCSectionAnalysis",
        "data": {}
    });
    ue.interface.onCSectionParamsCallback = function (val){
        console.log(val)
        console.log(JSON.stringify({
            "start":{
                "x":val.startPoint[0],
                "y":val.startPoint[1]
            },
            "end":{
                "x":val.endPoint[0],
                "y":val.endPoint[1]
            }
        }))
        let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/pipelineAnls/getCrossSection";
        fetch(url,{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "start":{
                    "x":val.startPoint[0],
                    "y":val.startPoint[1]
                },
                "end":{
                    "x":val.endPoint[0],
                    "y":val.endPoint[1]
                },
                // type不传的话返回全部
                "typeList":[

                ]
            })
        }).then(res => res.json()).then(response => {
            // console.log(response.data)
            console.log("http://192.168.34.213:8888/SIPSD/pipelineAnalysis/CSection.html?data=" + JSON.stringify(response.data))
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "removeMarker",
                "data": {
                    "id": "CSectionMarker"
                }
            })
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "addMarker",
                "data": {
                    "id": "CSectionMarker",
                    "name": "CSection",
                    "type": "cleanWindow", // classic、window两种，默认classic
                    "location": [(val.startPoint[0] + val.endPoint[0])/2,(val.startPoint[1] + val.endPoint[1])/2,(val.startPoint[2] + val.endPoint[2])/2],
                    "url": "http://192.168.34.213:8888/SIPSD/pipelineAnalysis/CSection.html?data=" + JSON.stringify(val),
                    "windowWidth": 800, // 默认350
                    "windowHeight": 500, // 默认150
                    "enableAutoFlyTo": true
                }
            })

        });

    }
})

// 关闭管线横截面分析
$("#closeCSection").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Analysis",
        "method": "stopCSectionAnalysis",
        "data": {}
    });
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "CSectionMarker"
        }
    })
})

// 开启管线纵截面分析
$("#startLSection").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Event",
        "method": "setOnPipeClickListener",
        "data": {

        }
    })

    ue.interface.onPipelineClickListener = function (val) {

        ue5("Layer", {
            "module": "Layer",
            "subModule": "Point",
            "method": "removeMarker",
            "data": {
                "id": "LSectionMarker"
            }
        })

        ue5("PipeLine", {
            "module": "PipeLine",
            "subModule": "VisualEffect",
            "method": "unhighlightPipeline",
            "data": {

            }
        })

        getPipeLineInfo(val.location[0], val.location[1], val.location[2], val.type)

        let type;
        if (val.type.indexOf('_line') > -1){
            type = val.type.substring(0,val.type.indexOf('_line'));
        } else if (val.type.indexOf('_point') > -1){
            type = val.type.substring(0,val.type.indexOf('_point'));
        } else {
            return;
        }
        // 管线信息查询接口，返回包括guid，起始点，形状，管径
        let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + val.location[0] + "&lat=" + val.location[1] + "&height=" + val.location[2] + "&type=" + val.type;
        console.log(url)
        fetch(url).then(res => res.json()).then(result => {
            console.log(result.data)
            for (let i = 0; i < result.data.length; i++) {
                // 获取纵截面数据
                let getLongiSectionUrl = "http://192.168.34.213:9000/SIPPipe/SIPPipe/pipelineAnls/getLongiSection?pipeType=" + type + "&guid=" + result.data[i].guid;
                console.log(getLongiSectionUrl)
                fetch(getLongiSectionUrl).then(res => res.json()).then(response => {
                    // 添加管段形状和管段类型
                    response.data.pipeShape = result.data[i].pipeShape
                    response.data.pipeType = type
                    console.log(JSON.stringify(response.data))
                    console.log("http://192.168.34.213:8888/SIPSD/pipelineAnalysis/LSection.html?data=" + JSON.stringify(response.data))
                    // 弹出信息
                    // alert("起点高程:" + response.data.startElev
                    //     + "起点埋深:" + response.data.startDepth
                    //     + "起点地面高程:" + response.data.startSurfaceElev
                    //     + "终点地面高程:" + response.data.endSurfaceElev
                    //     + "终点埋深:" + response.data.endDepth
                    //     + "终点高程:" + response.data.endElev
                    //     + "管线长度:" + response.data.pipeLength)

                    ue5("Layer", {
                        "module": "Layer",
                        "subModule": "Point",
                        "method": "addMarker",
                        "data": {
                            "id": "LSectionMarker",
                            "name": "LSection",
                            "type": "cleanWindow", // classic、window两种，默认classic
                            "location": [val.location[0],val.location[1],val.location[2]],
                            "url": "http://192.168.34.213:8888/SIPSD/pipelineAnalysis/LSection.html?data=" + JSON.stringify(response.data),
                            "windowWidth": 800, // 默认350
                            "windowHeight": 500, // 默认150
                            "enableAutoFlyTo": true
                        }
                    })
                });
            }
        });


    };
})

// 关闭管线纵截面分析
$("#closeLSection").click(function () {
    ue.interface.onPipelineClickListener = function (val) {

    };
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "LSectionMarker"
        }
    })
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "unhighlightPipeline",
        "data": {

        }
    })
})



// 查询管线信息
function getPipeLineInfo(lng, lat, height, type) {
    // 管线信息查询接口，返回包括guid，起始点，形状，管径
    let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + lng + "&lat=" + lat + "&height=" + height + "&type=" + type;
    console.log(url)
    fetch(url).then(res => res.json()).then(response => {
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])

            // 高亮查询到的管段
            highlightSinglePipeline(response.data[i])

        }

    });
}

// 查询管线信息V2
function getPipeLineInfoV2(lng, lat, height, type) {
    // 管线信息查询接口，返回包括guid，起始点，形状，管径
    let url = "http://192.168.34.213:9000/TXPipeDev/TaixingPipeII/getPipeLineInfo?lng=" + lng + "&lat=" + lat + "&height=" + height + "&type=" + type;
    console.log(url)
    fetch(url).then(res => res.json()).then(response => {
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
            // TODO 利用返回的包围盒的8个点（UE坐标），应用贴画高亮
            console.log(response.data[i])
            highlightSinglePipelineByDecal(response.data[i])
        }

    });
}

// 高亮单根管段
function highlightSinglePipeline(data) {
    // UE高亮管段方法
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "highlightPipeline",
        "data": data
    })
}

// 高亮单根管段
function highlightSinglePipelineByDecal(data) {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "highlightPipelineByDecal",
        "data": data
    })
}