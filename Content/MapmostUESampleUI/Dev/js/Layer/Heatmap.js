// 添加热力图
$("#addHeatmap").click(function () {

    let url = "http://192.168.34.213:8888/SIPSD/heatmap/sip_random_pts500.geojson";
    fetch(url).then(res => res.json()).then(response => {

        let maxValue = 0;
        let heatmapData = response.features.map(item => {
            let {geometry, properties} = item;

            let data = {
                lng: geometry.coordinates[0],
                lat: geometry.coordinates[1],
                value: properties.value,
            };

            if (data.value > maxValue) {
                maxValue = data.value;

            }

            return data;
        });

        console.log(heatmapData);

        ue5("Layer", {
            "module": "Layer",
            "subModule": "Heatmap",
            "method": "addHeatmap",
            "data": {
                "heatmapData": heatmapData,
                "maxValue":maxValue,
                "radius": 120,
                "height": 1600,
                "opacity": 0.85,
                "positionHeight": 500,
                "resolution":{
                    "width":512,
                    "height":512
                }
            }
        })

    });


});

// 删除热力图
$("#removeHeatmap").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Heatmap",
        "method": "removeHeatmap",
        "data": {

        }
    })
});


// 添加道路热力图
$("#addRoadHeatmap").click(function () {

    let url = "http://192.168.34.213:8888/SIP3D/road_link_20221121.geojson";

    fetch(url).then(res => res.json()).then(response => {

        let datas=[]

        for (var i=0; i < response.features.length; i++){

            let roadData = response.features[i]
            console.log(roadData)

            let coordinates=[]

            for(var j=0;j<roadData.geometry.coordinates.length;j++)
            {
                let coordinate = {
                    "x":roadData.geometry.coordinates[j][0],
                    "y":roadData.geometry.coordinates[j][1],
                    "z":0
                }
                coordinates.push(coordinate)
            }

            let data = {
                "Name":roadData.properties.road_name,
                "ID":roadData.properties.fid,
                "Condition":roadData.properties.condition_detail,
                "Width":roadData.properties.width,
                "Coordinates":coordinates
            }

            datas.push(data)
        }

        ue5("Layer", {
            "module": "Layer",
            "subModule": "Heatmap",
            "method": "addRoadHeatmap",
            "data": {
                "id":"123",
                "roadDatas":datas
            }
        })

    });
});

// 删除道路热力图
$("#removeRoadHeatmap").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Heatmap",
        "method": "removeRoadHeatmap",
        "data": {
            "id":"123"
        }
    })
});

// 更新道路热力图
$("#updateRoadHeatmap").click(function () {
    // let url = "http://yapi.smart-xwork.cn/mock/188393/";
    let url = "http://192.168.34.213:8888/SIP3D/road_heatmap_update.json";

    // //将时间戳格式转换成年月日时分秒
    // let time3 = new Date().valueOf();
    // var date = new Date(time3);
    // var Y = date.getFullYear() + '-';
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    // var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    //
    // var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
    // var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    // var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    // var strDate = Y + M + D + h + m + s;
    // console.log('请求前:', strDate)

    fetch(url).then(res => res.json()).then(response => {

        // //将时间戳格式转换成年月日时分秒
        // let time3 = new Date().valueOf();
        // var date = new Date(time3);
        // var Y = date.getFullYear() + '-';
        // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        // var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        //
        // var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
        // var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
        // var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
        // var strDate = Y + M + D + h + m + s;
        // console.log('请求后:', strDate)

        //console.log(response)

        let datas = []

        for (var i=0; i < response.length; i++){

            let data = {
                "fid":response[i].fid,
                "condition":response[i].condition,
                "condition_random":response[i].condition_detail,
                "width":response[i].width
            }

            datas.push(data)
        }

        ue5("Layer", {
            "module": "Layer",
            "subModule": "Heatmap",
            "method": "updateRoadHeatmap",
            "data": {
                "id":"123",
                "roadDatas" : datas
            }
        })
    });
});