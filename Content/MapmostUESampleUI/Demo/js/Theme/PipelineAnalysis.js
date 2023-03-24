// 管线分析

// 开启流向分析
$("#startDirectionAnalysis").click(function () {
    console.log('开启流向分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('开启流向分析')

    mapmostUE.setOnPipelineClickListener(function (val) {
        let {location, type} = val;

        let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + type;

        fetch(url).then(res => res.json()).then(response => {
            console.log(response)

            for (let i = 0; i < response.data.length; i++) {
                // 绘制流向性箭头效果
                mapmostUE.drawPipelineDirection(response.data[i]);
            }

        });

    });
    
})

// 关闭流向分析
$("#stopDirectionAnalysis").click(function () {
    console.log('关闭流向分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('关闭流向分析')
    mapmostUE.clearPipelineDirection();
    mapmostUE.removeOnPipelineClickListener();
})

// 开启连通性分析
$("#startConnectivityAnalysis").click(function () {
    console.log('开启连通性分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('开启连通性分析')

    let startGuid = null;
    let endGuid = null;
    
    mapmostUE.setOnPipelineClickListener(function (val) {
        let {location, type} = val;

        if (type.indexOf('_point') > -1){
            var notyf = new Notyf({
                position:{
                    x:'center',
                    y:'top'
                }
            });
            notyf.error('连通性不支持点选管点，请重新选择管段')
            return;
        }

        if (type.indexOf('_line') > -1){
            type = type.substring(0,type.indexOf('_line'));
        } else if (type.indexOf('_point') > -1){
            type = type.substring(0,type.indexOf('_point'));
        } else {
            return;
        }
        if (startGuid === null){
            mapmostUE.unhighlightPipeline();
            mapmostUE.removeMarker("startMarker");
            mapmostUE.removeMarker("endMarker");
            mapmostUE.addMarker("startMarker",{
                "name": "检测点1",
                "type": "classic",
                "location": [location[0],location[1],location[2]],
                "iconImage": "http://192.168.34.213:8888/XiXi/icon/monitor.png",
                "bgColor": "#669966",
                "enableAutoFlyTo": false,
                "imageUrl":""
            })
            // 管线信息查询接口，返回包括guid，起始点，形状，管径
            let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + val.type;
            fetch(url).then(res => res.json()).then(response => {
                console.log(url)
                startGuid = response.data[0].guid;
            });
        } else if (endGuid === null){
            mapmostUE.removeMarker("endMarker");
            mapmostUE.addMarker("endMarker",{
                "name": "检测点2",
                "type": "classic",
                "location": [location[0],location[1],location[2]],
                "iconImage": "http://192.168.34.213:8888/XiXi/icon/monitor.png",
                "bgColor": "#669966",
                "enableAutoFlyTo": false,
                "imageUrl":""
            })
            // 管线信息查询接口，返回包括guid，起始点，形状，管径
            let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + val.type;
            fetch(url).then(res => res.json()).then(response => {
                console.log(response.data)
                endGuid = response.data[0].guid;
                
                // 判断是否为同一管段，如果是，不查询，给出提示
                if (startGuid === endGuid) {
                    var notyf = new Notyf({
                        position:{
                            x:'center',
                            y:'top'
                        }
                    });
                    notyf.error('2个检测点为同一管段，请重新选择')
                    startGuid = null
                    endGuid = null
                    return;
                }

                // 查询连通性
                let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/pipelineAnls/getConnectivity?startGuid=" + startGuid + "&endGuid=" + endGuid + "&pipeType=" + type;
                console.log(url)
                fetch(url).then(res => res.json()).then(response => {
                    console.log(response.data)
                    if (response.data.length === 0){
                        var notyf = new Notyf({
                            position:{
                                x:'center',
                                y:'top'
                            }
                        });
                        notyf.error('该两点不连通')
                        return
                    }
                    for (let i = 0; i < response.data.length; i++) {
                        console.log(response.data[i])
                        // 高亮所有返回的管段
                        mapmostUE.highlightPipeline(response.data[i])
                    }
                });

                startGuid = null;
                endGuid = null;
            });
        }

    });
    
})

// 关闭连通性分析
$("#stopConnectivityAnalysis").click(function () {
    console.log('关闭连通性分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('关闭连通性分析')
    mapmostUE.unhighlightPipeline();
    mapmostUE.removeMarker("startMarker");
    mapmostUE.removeMarker("endMarker");
    mapmostUE.removeOnPipelineClickListener();
})

// 开启横截面分析
$("#startCSectionAnalysis").click(function () {
    // 进入横截面分析前需先关闭剖切，原因是不能共用剖切材质
    mapmostUE.stopClip( );
    console.log('开启横截面分析')
    
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('开启横截面分析')
    mapmostUE.startCSectionAnalysis(function (val) {

        mapmostUE.removeMarker("CSectionMarker");
        mapmostUE.addMarker("CSectionMarker",{
            "name": "CSection",
            "type": "cleanWindow",
            "location": [(val.startPoint[0] + val.endPoint[0])/2,(val.startPoint[1] + val.endPoint[1])/2,(val.startPoint[2] + val.endPoint[2])/2],
            "enableAutoFlyTo": true,
            "url": "http://192.168.34.213:8888/SIPSD/pipelineAnalysis/CSection.html?data=" + JSON.stringify(val),
            "windowWidth": 800, // 默认350
            "windowHeight": 500, // 默认150
        })
    })
})

// 关闭横截面分析
$("#stopCSectionAnalysis").click(function () {
    console.log('关闭横截面分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('关闭横截面分析')
    mapmostUE.removeMarker("CSectionMarker");
    mapmostUE.stopCSectionAnalysis();
})

// 开启纵截面分析
$("#startLSectionAnalysis").click(function () {
    console.log('开启纵截面分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('开启纵截面分析')

    mapmostUE.setOnPipelineClickListener(function (val) {

        let {location, type} = val;
        
        mapmostUE.removeMarker("LSectionMarker");
        mapmostUE.unhighlightPipeline();

        let url1 = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + type;
        console.log(url1)
        fetch(url1).then(res => res.json()).then(response => {
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i])
                // 高亮查询到的管段
                mapmostUE.highlightPipeline(response.data[i])
            }
        });

        // 纵截面不支持查询管点
        if (type.indexOf('_point') > -1){
            var notyf = new Notyf({
                position:{
                    x:'center',
                    y:'top'
                }
            });
            notyf.error('纵截面分析不支持查看管点，请重新点选管段')
            return;
        }

        if (type.indexOf('_line') > -1){
            type = type.substring(0,type.indexOf('_line'));
        } else if (type.indexOf('_point') > -1){
            type = type.substring(0,type.indexOf('_point'));
        } else {
            return;
        }
        // 管线信息查询接口，返回包括guid，起始点，形状，管径
        let url2 = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + val.type;
        console.log(url2)
        fetch(url2).then(res => res.json()).then(result => {
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
                    // console.log("http://192.168.76.23:8080/LSection.html?data=" + JSON.stringify(response.data))
                    // 弹出信息
                    // alert("起点高程:" + response.data.startElev
                    //     + "起点埋深:" + response.data.startDepth
                    //     + "起点地面高程:" + response.data.startSurfaceElev
                    //     + "终点地面高程:" + response.data.endSurfaceElev
                    //     + "终点埋深:" + response.data.endDepth
                    //     + "终点高程:" + response.data.endElev
                    //     + "管线长度:" + response.data.pipeLength)

                    mapmostUE.addMarker("LSectionMarker",{
                        "name": "LSection",
                        "type": "cleanWindow",
                        "location": [location[0],location[1],location[2]],
                        "enableAutoFlyTo": false,
                        "url": "http://192.168.34.213:8888/SIPSD/pipelineAnalysis/LSection.html?data=" + JSON.stringify(response.data),
                        // "url": "http://192.168.76.23:8080/LSection.html?data=" + JSON.stringify(response.data),
                        "windowWidth": 800, // 默认350
                        "windowHeight": 500, // 默认150
                    })
                    
                });
            }
        });

    });
})

// 关闭纵截面分析
$("#stopLSectionAnalysis").click(function () {
    console.log('关闭纵截面分析')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('关闭纵截面分析')
    mapmostUE.removeMarker("LSectionMarker");
    mapmostUE.unhighlightPipeline();
    mapmostUE.removeOnPipelineClickListener();
})