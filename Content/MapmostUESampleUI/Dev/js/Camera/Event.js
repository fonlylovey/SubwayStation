// 开启地图拾取
$("#openMousePick").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "setOnMousePickListener",
        "data": {

        }
    })
});

// 关闭地图拾取
$("#closeMousePick").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "removeOnMousePickListener",
        "data": {

        }
    })
});

// 开启地图变化状态监听
$("#openMapStatusListen").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "setOnMapStatusChangeListener",
        "data": {

        }
    })
});

// 关闭地图变化状态监听
$("#closeMapStatusListen").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "removeOnMapStateChangeListener",
        "data": {

        }
    })
});

// 开启对象查属性
$("#startQueryProperty").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "setOnMousePickListener",
        "data": {

        }
    })
    // 地图坐标拾取，返回点击的对象和坐标值的监听
    ue.interface.onMousePickListener = function (val) {
        console.log(val)
        if (val.modelName === 'DFZM-01_Baked_toUE_DFZM-01_Baked'){
            ue5("Tools", {
                "module": "Tools",
                "subModule": "VisualEffect",
                "method": "highlightModel",
                "data": {
                    "modelName": val.modelName
                }
            })

            ue5("Layer", {
                "module": "Layer",
                "subModule": "Point",
                "method": "addMarker",
                "data": {
                    "id": "marker_EastDoor",
                    "name": "Window Marker",
                    "type": "propertylist", // classic、window两种，默认classic
                    "location": [120.675362,31.318861,268.177277],
                    "enableAutoFlyTo": true,
                    "propertyData":[
                        {
                            "displayName": "名称",
                            "value": "东方之门"
                        },
                        {
                            "displayName": "高度",
                            "value": "301.8米"
                        },
                        {
                            "displayName": "位置",
                            "value": "星港街199号"
                        },
                        {
                            "displayName": "占地面积",
                            "value": "24319m²"
                        },
                        {
                            "displayName": "建筑面积",
                            "value": "460000m²"
                        }
                    ]
                }
            })

            // // 根据点击的对象名称查询属性mock数据
            // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelName=eastdoor";
            // fetch(url).then(res => res.json()).then(response => {
            //     console.log(response.data.url)
            //     ue5("Layer", {
            //         "module": "Layer",
            //         "subModule": "Point",
            //         "method": "addMarker",
            //         "data": {
            //             "id": "marker_EastDoor",
            //             "name": "Window Marker",
            //             "type": "propertylist", // classic、window两种，默认classic
            //             "location": [120.675362,31.318861,268.177277],
            //             "enableAutoFlyTo": true,
            //             "propertyData":response.data.propertyData
            //         }
            //     })
            // });
        }

    };
});

// 关闭对象查属性
$("#closeQueryProperty").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Event",
        "method": "removeOnMousePickListener",
        "data": {

        }
    })
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "unhighlightModel",
        "data": {
            "modelName": "DFZM-01_Baked_toUE_DFZM-01_Baked"
        }
    })
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "marker_EastDoor"
        }
    })
    ue.interface.onMousePickListener = function (val) {

    };
});