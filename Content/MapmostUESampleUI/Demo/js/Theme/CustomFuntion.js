// js调用UE自定义模块方法
$("#jsCallUE").click(function () {
    console.log('jsCallUE')
    let options = {
        "functionName": "print",
        "params": {
            "message": "Hello UE"
        }
    }
    mapmostUE.customFunction(options);
})

// js调用UE自定义模块方法且附回调
$("#jsCallUEWithCB").click(function () {
    console.log('jsCallUEWithCB')
    let options = {
        "functionName": "printWithCallback",
        "params": {
            "js2UE": "Hello UE"
        }
    }
    mapmostUE.customFunctionWithCallback(options, function (res) {
        alert(res)
    });
})

// 切换白天
$("#goodMorning").click(function () {
    let options = {
        "functionName": "goodMorning",
        "params": {}
    }
    mapmostUE.customFunction(options);
})

// 切换黑夜
$("#goodNight").click(function () {
    let options = {
        "functionName": "goodNight",
        "params": {}
    }
    mapmostUE.customFunction(options);
})


//展示负一层
$("#LiftB1").click(function () {
    let options = {
        "functionName": "FloorLift",
        "params": {
            "buildingName": "Station",
            "floorIndex": -1
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74404843296949, 31.336627710197384, 112.20214479630758],
        "rotation": [0,-34.30305480957031,-128.84765625],
        "time":1
    });
})

//展示负二层
$("#LiftB2").click(function () {
    let options = {
        "functionName": "FloorLift",
        "params": {
            "buildingName": "Station",
            "floorIndex": -2
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74367087719709, 31.336558215785985, 130.62407016963746],
        "rotation": [0,-41.003055572509766,-116.54766082763672],
        "time":1
    });
})

//还原楼层抬升
$("#ReverseBuildingLift").click(function () {
    let options = {
        "functionName": "ReverseLiftBuilding",
        "params": {
            "buildingName": "Station"
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74367087719709, 31.336558215785985, 130.62407016963746],
        "rotation": [0,-41.003055572509766,-116.54766082763672],
        "time":1
    });
})

//突出展示负一层
$("#HighlightB1").click(function () {
    let options = {
        "functionName": "Highlight",
        "params": {
            "buildingName": "Station",
            "floorIndex": -1
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74404843296949, 31.336627710197384, 112.20214479630758],
        "rotation": [0,-34.30305480957031,-128.84765625],
        "time":1
    });
})

//突出展示负二层
$("#HighlightB2").click(function () {
    let options = {
        "functionName": "Highlight",
        "params": {
            "buildingName": "Station",
            "floorIndex": -2
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74367087719709, 31.336558215785985, 130.62407016963746],
        "rotation": [0,-41.003055572509766,-116.54766082763672],
        "time":1
    });
})

//还原楼层突出展示
$("#ReverseHighlight").click(function () {
    let options = {
        "functionName": "ReverseHighlight",
        "params": {
            "buildingName": "Station"
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74367087719709, 31.336558215785985, 130.62407016963746],
        "rotation": [0,-41.003055572509766,-116.54766082763672],
        "time":1
    });
})

$("#addAnimationPath").click(function () {
    let data = {
        "functionName": "addAnimationPath",
        "params": {
            "ID": "path_1",
            "Name": "路径动画1",
            "Duration": 20,
            "IsLoop": false,
            "MeshRefPath": "/Engine/EngineMeshes/SM_MatPreviewMesh_01.SM_MatPreviewMesh_01",
            "KeyPoints": [
                [120.7394622738,31.3419559124],
                [120.7395138570,31.3368457234],
                [120.7513099404,31.3385938131],
                [120.7510794799,31.3437421320],
                [120.7274516590,31.3406029987]
            ]
        }
        
    }
    mapmostUE.customFunction(data);

    let data1 = {
        "functionName": "addAnimationPath",
        "params": {
            "ID": "path_2",
            "Name": "路径动画2",
            "duration": 20,
            "IsLoop": true,
            "MeshRefPath": "/Engine/Tutorial/SubEditors/TutorialAssets/Character/TutorialTPP.TutorialTPP",
            "KeyPoints": [
                [120.7435100269,31.3372999038],
                [120.7435697569,31.3337764706],
                [120.7396393429,31.3333710793],
                [120.7396002445,31.3368052675],
            ]
        }
    }
    mapmostUE.customFunction(data1);

})

$("#removeAnimationPath").click(function () {
    let data = {
        "functionName": "removeAnimationPath",
        "params": {
            "ID": ""
        }
        
    }
    mapmostUE.customFunction(data);
})

$("#addPOIFeature").click(function () {
    let poiData = {
        "type": "FeatureCollection",
        "name": "geo_samp",
        "crs": {
            "type": "name",
            "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}
        },
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "id": "location1",            // POI ID
                    "name": "东方之门",           // POI 名称
                    "desc": "较拥挤",
                    "iconWidth":150,
                    "iconHeight":50,
                    "height": 5.177277,                // POI 点高程，单位米
                    "detailUrl": popupUrl + "location1.html",  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 0,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -45,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 120,               // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.675462, 31.318861]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location2",            // POI ID
                    "name": "苏州中心商场",           // POI 名称
                    "desc": "较拥挤",
                    "iconWidth":120,
                    "iconHeight":120,
                    "height": 53.930321,                // POI 点高程，单位米
                    "detailUrl": popupUrl + "location2.html",  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -21,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 123.5,          // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.673454, 31.31842]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location3",            // POI ID
                    "name": "中茵皇冠假日酒店",           // POI 名称
                    "desc": "舒适",
                    "height": 37.237129,                // POI 点高程，单位米
                    "detailUrl": popupUrl + "location3.html",   // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 180,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -29,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,          // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.678711, 31.324223]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location4",            // POI ID
                    "name": "桃花岛",           // POI 名称
                    "desc": "舒适",
                    "height": 37.237129,                // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 270,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -20,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,            // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.687958, 31.321032]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location5",            // POI ID
                    "name": "文化艺术中心",           // POI 名称
                    "desc": "舒适",
                    "height": 25.56336,           // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 360,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -17,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,             // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.697594, 31.323679]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location6",            // POI ID
                    "name": "月光码头",           // POI 名称
                    "desc": "舒适",
                    "height": 25.56336,           // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -28,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,            // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.700699, 31.321997]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location7",            // POI ID
                    "name": "国际博览中心",           // POI 名称
                    "desc": "舒适",
                    "height": 22.911165,           // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -18,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,          // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.702293, 31.325665]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location8",            // POI ID
                    "name": "国金中心",           // POI 名称
                    "desc": "舒适",
                    "height": 5.544312,           // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -30,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 223.5,               // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.71283, 31.323914]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location9",            // POI ID
                    "name": "奥林匹克体育中心",           // POI 名称
                    "desc": "较拥挤",
                    "height": 5.27029,           // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -22,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 416.802,               // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.746452, 31.306192]
                }
            },
        ]
    }

    let options = {
        "mainStyle": {                   // 不同类型POI 的样式
            "property": "name",             // 用于区分类型的属性名
            "style": [
                {
                    "value": "东方之门",     // 类型枚举值
                    "color": "#F03B71",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "iconWidth":150,
                    "iconHeight":50,
                    "layout": {              // poi详情页面的宽高
                        "width": 578,
                        "height": 214
                    }
                }, {
                    "value": "苏州中心商场",     // 类型枚举值
                    "color": "#048A00",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/gouwu.png",  // 该类型POI 图标
                    "labelWidth":300,
                    "iconRotation":45,
                    "iconWidth":120,
                    "iconHeight":120,
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
                    }
                }, {
                    "value": "中茵皇冠假日酒店",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/gouwu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
                    }
                }, {
                    "value": "桃花岛",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }, {
                    "value": "文化艺术中心",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }, {
                    "value": "月光码头",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }, {
                    "value": "国际博览中心",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }, {
                    "value": "国金中心",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/gouwu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }, {
                    "value": "奥林匹克体育中心",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "http://192.168.34.213:8888/SIPSD/icon/jingqu.png",  // 该类型POI 图标
                    "layout": {              // poi详情页面的宽高
                        "width": 40,
                        "height": 50
                    }
                }
            ]
        },
        "tagStyle": {               // 标签样式
            "property": "desc",   // 标签的属性名
            "style": [              // 不同标签的样式
                {
                    value: "舒适",  // 标签枚举值
                    color: "#66cc66" // 标签颜色
                }, {
                    value: "较拥挤",  // 标签枚举值
                    color: "#ff9966" // 标签颜色
                }, {
                    value: "拥挤",  // 标签枚举值
                    color: "#ff6666" // 标签颜色
                }
            ]
        }
    };

    mapmostUE.addPOIs("poi_1", poiData, options);
})

$("#removePOIFeature").click(function () {
    mapmostUE.removePOIs("poi_1")
})