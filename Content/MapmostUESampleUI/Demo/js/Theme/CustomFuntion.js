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
        "location":[120.74233686652927, 31.33757428333051, 63.980797853177236],
        "rotation": [0,-79.9030532836914,-99.9476547241211],
        "time":2
    });
    setTimeout(() => {
        mapmostUE.flyTo({
            "location":[120.74406814180338, 31.33783291715464, 64.06461356435805],
            "rotation": [0,-80.4030532836914,-100.2476577758789],
            "time":20
        });
    }, 2000)
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
        "location":[120.74219943309625, 31.337499850110124, 38.41980298314499],
        "rotation": [0,-80.80305480957031,-100.3476387939453],
        "time":2
    });
    setTimeout(() => {
        mapmostUE.flyTo({
            "location":[120.74425223264947, 31.337815835618986, 38.404284058081004],
            "rotation": [0,-80.80305480957031,-100.34766387939453],
            "time":20
        });
    }, 2000)
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
        "time":2
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
            "MeshRefPath": "SkeletalMesh'/Game/Models/Person/walk.walk'",
            "AnimRefPath": "AnimSequence'/Game/Models/Person/walk_Anim.walk_Anim'",
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
            "MeshRefPath": "SkeletalMesh'/Game/Models/Person/walk.walk'",
            "AnimRefPath": "AnimSequence'/Game/Models/Person/walk_Anim.walk_Anim'",
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

$("#addPOIFeature").click(function () 
{
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
                    "name": "方州公园站",           // POI 名称
                    "desc": "",
                    "iconWidth":128,
                    "iconHeight":100,
                    "height": 5.177277,                // POI 点高程，单位米
                    "detailUrl": "",  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 0,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -45,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 120,               // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.7398435239,31.3192908454]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location2",            // POI ID
                    "name": "星塘街",           // POI 名称
                    "desc": "",
                    "iconWidth":128,
                    "iconHeight":100,
                    "height": 5,                // POI 点高程，单位米
                    "detailUrl": "",  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 90,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -21,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 123.5,          // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.7397093029,31.3276638620]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location4",            // POI ID
                    "name": "龙墩站",           // POI 名称
                    "desc": "",
                    "height": 10,                // POI 点高程，单位米
                    "detailUrl": null,  // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 270,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -20,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,            // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.7434026850,31.3373957839]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": "location3",            // POI ID
                    "name": "东沙湖站",           // POI 名称
                    "desc": "",
                    "height": 10,                // POI 点高程，单位米
                    "detailUrl": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F31609650%2F44ea39c234d544da9d65d4dad1fefe70.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzE2MDk2NTAvNDRlYTM5YzIzNGQ1NDRkYTlkNjVkNGRhZDFmZWZlNzAuanBn%2Fsign%2F939bcef6f50825e1a085b7f6443bfe40.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682575393&t=16af5847f67b2fb757205adff018bdfb",   // 展示详细信息的web页面 （可选属性，值可为NULL）
                    "heading": 180,                  // 定位时偏航角（可选属性，值可为NULL），单位度
                    "pitch": -29,                    // 定位时俯仰角（可选属性，值可为NULL），单位度
                    "distance": 623.5,          // 定位时相机距离地图中心点距离（可选属性，值可为NULL），单位米
                    "time": 3,                    // 定位飞行时间（可选属性）
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.7588425350,31.3397538874]
                }
            }
        ]
    }

    let options = {
        "mainStyle": {                   // 不同类型POI 的样式
            "property": "name",             // 用于区分类型的属性名
            "style": [
                {
                    "value": "方州公园站",     // 类型枚举值
                    "color": "#F03B71",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "https://bkimg.cdn.bcebos.com/pic/0df3d7ca7bcb0a46f21f82d48531e1246b600d330199?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5",  // 该类型POI 图标
                    "iconWidth":128,
                    "iconHeight":100,
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
                    }
                }, 
                {
                    "value": "星塘街",     // 类型枚举值
                    "color": "#048A00",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "https://bkimg.cdn.bcebos.com/pic/42166d224f4a20a44623ccd6cc008f22720e0cf37add?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5",  // 该类型POI 图标
                    "iconWidth":120,
                    "iconHeight":120,
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
                    }
                }, 
                {
                    "value": "龙墩站",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "https://bkimg.cdn.bcebos.com/pic/6a63f6246b600c338744a925f41e460fd9f9d62a0b99?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5",  // 该类型POI 图标
                    "iconWidth":128,
                    "iconHeight":100,
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
                    }
                }, 
                {
                    "value": "东沙湖站",     // 类型枚举值
                    "color": "#ff9900",      // 该类型POI主题色，表现为引线颜色
                    "iconImage": "https://bkimg.cdn.bcebos.com/pic/3801213fb80e7bec54e74e0cc17cae389b504ec23d99?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5",  // 该类型POI 图标
                    "iconWidth":128,
                    "iconHeight":100,
                    "layout": {              // poi详情页面的宽高
                        "width": 440,
                        "height": 150
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