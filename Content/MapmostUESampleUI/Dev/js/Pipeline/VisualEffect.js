// 加载管线
$("#loadPipeline").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "loadPipeline",
        "data": {

        }
    })
})



// 删除高亮管线
$("#removeHighlightPipelines").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "unhighlightPipeline",
        "data": {

        }
    })
})

// 开启管线连通性查询
$("#startConnectivity").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Event",
        "method": "setOnPipeClickListener",
        "data": {

        }
    })
    let startGuid = null;
    let endGuid = null;
    ue.interface.onPipelineClickListener = function (val) {
        console.log(val);
        let type;
        if (val.type.indexOf('_line') > -1){
            type = val.type.substring(0,val.type.indexOf('_line'));
        } else if (val.type.indexOf('_point') > -1){
            type = val.type.substring(0,val.type.indexOf('_point'));
        } else {
            return;
        }
        if (startGuid === null){
            ue5("PipeLine", {
                "module": "PipeLine",
                "subModule": "VisualEffect",
                "method": "unhighlightPipeline",
                "data": {

                }
            });
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "removeMarker",
                "data": {
                    "id": "startMarker"
                }
            })
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "removeMarker",
                "data": {
                    "id": "endMarker"
                }
            })
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "addMarker",
                "data": {
                    "id":"startMarker",
                    "name":"检测点1",
                    "type":"classic",
                    "location":[val.location[0],val.location[1],val.location[2]],
                    "icon":"http://192.168.34.213:8888/XiXi/icon/monitor.png",
                    "isShowIcon":false, // 该字段可选。不加该字段的话默认是显示icon的
                    "enableAutoFlyTo": true,
                    "labelBgColor":"#669966",
                    "imageUrl":""
                }
            })
            // 管线信息查询接口，返回包括guid，起始点，形状，管径
            let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + val.location[0] + "&lat=" + val.location[1] + "&height=" + val.location[2] + "&type=" + val.type;
            fetch(url).then(res => res.json()).then(response => {
                console.log(response.data)
                startGuid = response.data[0].guid;
            });
        } else if (endGuid === null){
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "removeMarker",
                "data": {
                    "id": "endMarker"
                }
            })
            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "addMarker",
                "data": {
                    "id":"endMarker",
                    "name":"检测点2",
                    "type":"classic",
                    "location":[val.location[0],val.location[1],val.location[2]],
                    "icon":"http://192.168.34.213:8888/XiXi/icon/monitor.png",
                    "isShowIcon":false, // 该字段可选。不加该字段的话默认是显示icon的
                    "enableAutoFlyTo": true,
                    "labelBgColor":"#669966",
                    "imageUrl":""
                }
            })
            // 管线信息查询接口，返回包括guid，起始点，形状，管径
            let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + val.location[0] + "&lat=" + val.location[1] + "&height=" + val.location[2] + "&type=" + val.type;
            fetch(url).then(res => res.json()).then(response => {
                console.log(response.data)
                endGuid = response.data[0].guid;

                // 查询连通性
                let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/pipelineAnls/getConnectivity?startGuid=" + startGuid + "&endGuid=" + endGuid + "&pipeType=" + type;
                console.log(url)
                fetch(url).then(res => res.json()).then(response => {
                    console.log(response.data)
                    if (response.data.length === 0){
                        alert('该两段管段不连通')
                        return
                    }
                    for (let i = 0; i < response.data.length; i++) {
                        console.log(response.data[i])
                        // 高亮所有返回的管段
                        highlightSinglePipeline(response.data[i])
                    }
                });

                startGuid = null;
                endGuid = null;
            });
        }
    };
})

// 关闭管线连通性查询
$("#closeConnectivity").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "unhighlightPipeline",
        "data": {

        }
    });
    ue.interface.onPipelineClickListener = function (val) {

    };
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "startMarker"
        }
    })
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "endMarker"
        }
    })
})

// 开启管线流向性查询
$("#startFlowDirection").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Event",
        "method": "setOnPipeClickListener",
        "data": {

        }
    });

    ue.interface.onPipelineClickListener = function (val) {
        // 查询流向性并绘制绿色箭头
        let type;
        if (val.type.indexOf('_line') > -1){
            type = val.type.substring(0,val.type.indexOf('_line'));
        } else if (val.type.indexOf('_point') > -1){
            type = val.type.substring(0,val.type.indexOf('_point'));
        } else {
            return;
        }
        let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/pipelineAnls/getFlowDirection?lng=" + val.location[0] + "&lat=" + val.location[1] + "&pipeType=" + type + "&height=" + val.location[2];
        fetch(url).then(res => res.json()).then(response => {
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i])
                //绘制流向性箭头
                ue5("PipeLine", {
                    "module": "PipeLine",
                    "subModule": "VisualEffect",
                    "method": "drawPipelineDirection",
                    "data": response.data[i]
                });
            }
        });


    };
})

// 关闭管线流向性查询
$("#closeFlowDirection").click(function () {
    ue.interface.onPipelineClickListener = function (val) {

    };
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "clearPipelineDirection",
        "data": {}
    });
})

// 添加JS管段管点
$("#addJSPipeline").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "addPipeline3DTiles",
        "data": {
            "id":"11111",
            "pipeType": "JS_LINE",
            "url": "http://192.168.34.213:8888/SIP3D/pipeline_3dtiles/JS_LINE/tileset.json"
        }
    })
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "addPipeline3DTiles",
        "data": {
            "id":"11111",
            "pipeType": "JS_POINT",
            "url": "http://192.168.34.213:8888/SIP3D/pipeline_3dtiles/JS_POINT/tileset.json"
        }
    })
})

// 删除JS管段管点
$("#removeJSPipeline").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "removePipeline3DTiles",
        "data": {
            "id":"11111"
        }
    })
})

// 显示JS管线
$("#showJSPipeline").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "setPipelineLayerVisibility",
        "data": {
            "pipelineType": "js",
            "isVisible": true
        }
    })
})

// 隐藏JS管线
$("#hideJSPipeline").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "setPipelineLayerVisibility",
        "data": {
            "pipelineType": "js",
            "isVisible": false
        }
    })
})

