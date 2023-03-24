// 添加WMS
$("#addWMS").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMS",
        "method": "addWMS",
        "data": {
            "layerId":"Overlay8",
            "BaseUrl": "http://192.168.127.17:8080/geoserver/test003/wms",
            "Layers": "sipsd_src_3857_byte",
            "MinimumLevel": 0,
            "MaximumLevel": 14
        }
    })
});

// 删除WMS
$("#removeWMS").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMS",
        "method": "removeWMS",
        "data": {
            "layerId":"Overlay8"
        }
    })
});

// 添加WMS
$("#addWMS2").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMS",
        "method": "addWMS",
        "data": {
            "layerId":"Overlay7",
            "BaseUrl": "http://192.168.34.213:9000/arcgis/services/SIPIMG/sip2021img3857/MapServer/WMSServer",
            "Layers": "0",
            "MinimumLevel": 0,
            "MaximumLevel": 14
        }
    })
});

// 删除WMS
$("#removeWMS2").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMS",
        "method": "removeWMS",
        "data": {
            "layerId":"Overlay7"
        }
    })
});