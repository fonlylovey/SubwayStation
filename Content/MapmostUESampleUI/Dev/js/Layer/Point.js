// 添加Marker
$("#addMarker").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "addMarker",
        "data": {
            "id":"marker1",
            "name":"Classic Marker",
            "type":"classic",
            "location":[120.67392,31.319742,20],
            "icon":"http://192.168.34.213:8888/XiXi/icon/monitor.png",
            "isShowIcon":false, // 该字段可选。不加该字段的话默认是显示icon的
            "enableAutoFlyTo": true,
            "labelBgColor":"#669966",
            "imageUrl":"http://192.168.34.213:8888/XiXi/icon/monitor.png"
        }
    })

    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "addMarker",
        "data": {
            "id": "marker2",
            "name": "Window Marker",
            "type": "window", // classic、window两种，默认classic
            "location": [120.67592,31.319942,20],
            "url": "https://www.baidu.com",
            "windowWidth": 200, // 默认350
            "windowHeight": 100, // 默认150
            "enableAutoFlyTo": true
        }
    })
});

// 删除Marker
$("#removeMarker").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "marker1"
        }
    })
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeMarker",
        "data": {
            "id": "marker2"
        }
    })
});

// 添加marker点击事件
$("#addMarkerClick").click(function () {
    ue.interface.onMarkerClickListener = function (val) {
        console.log(val)
    };
})

// 移除marker点击事件
$("#removeMarkerClick").click(function () {
    ue.interface.onMarkerClickListener = function () {

    };
})

// marker1隐藏
$("#setMarkerHidden").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "setMarkerVisibility",
        "data": {
            "id": "marker1",
            "visible": false
        }
    })
})

// marker1显示
$("#setMarkerVisible").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "setMarkerVisibility",
        "data": {
            "id": "marker1",
            "visible": true
        }
    })
})

// 添加特效
$("#addEffect").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "addEffect",
        "data": {
            "id": "effect1",
            "location": [120.67392,31.319742,20],
            "type": "warning",
            "style": {
                "radiusOutside":8000,
                "radiusInside":4000
            }
        }
    })
})

// 删除特效
$("#removeEffect").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Point",
        "method": "removeEffect",
        "data": {
            "id": "effect1"
        }
    })
})