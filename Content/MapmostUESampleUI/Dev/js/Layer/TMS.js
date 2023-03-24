// 显示TMS
$("#showTMS").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "MapSetting",
        "method": "setMapsVisibility",
        "data": {
            "isVisible": true
        }
    })
});

// 隐藏TMS
$("#hideTMS").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "MapSetting",
        "method": "setMapsVisibility",
        "data": {
            "isVisible": false
        }
    })
});

// 添加TMS图层（雨水）
$("#addTMSLayer_ys").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "addTMSLayer",
        "data": {
            "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_ys_pipeline@EPSG:900913@png/tilemapresource.xml",
            "minimumLevel": 0,
            "maximumLevel": 22,
            "layerId": "Overlay2"
        }
    })
});

// 删除TMS图层（雨水）
$("#removeTMSLayer_ys").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "removeTMSLayer",
        "data": {
            "layerId": "Overlay2"
        }
    })
});

// 添加TMS图层（路灯）
$("#addTMSLayer_ld").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "addTMSLayer",
        "data": {
            "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_ld_pipeline@EPSG:900913@png/tilemapresource.xml",
            "minimumLevel": 0,
            "maximumLevel": 22,
            "layerId": "Overlay3"
        }
    })
});

// 删除TMS图层（路灯）
$("#removeTMSLayer_ld").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "removeTMSLayer",
        "data": {
            "layerId": "Overlay3"
        }
    })
});

// 添加TMS图层（给水）
$("#addTMSLayer_js").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "addTMSLayer",
        "data": {
            "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_js_pipeline@EPSG:900913@png/tilemapresource.xml",
            "minimumLevel": 0,
            "maximumLevel": 22,
            "layerId": "Overlay4"
        }
    })
});

// 删除TMS图层（给水）
$("#removeTMSLayer_js").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "removeTMSLayer",
        "data": {
            "layerId": "Overlay4"
        }
    })
});

// 影像透明
$("#setTMSOpacity").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "setTMSAnd3DTilesOpacity",
        "data": {
            "opacity": 0.6
        }
    })
});

// 影像不透明
$("#recoverTMSOpacity").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "TMS",
        "method": "restoreTMSAnd3DTilesOpacity",
        "data": {

        }
    })
});