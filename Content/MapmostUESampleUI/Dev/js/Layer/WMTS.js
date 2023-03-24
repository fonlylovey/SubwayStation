// 加载天地图图层
$("#addWMTSLayer_Tianditu").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "addWMTSLayer",
        "data": {
            "LayerId":"Overlay5",
            "BaseUrl": "https://t0.tianditu.gov.cn/img_w/wmts?tk=60d2872fa809269d855cb005912e543b",
            "Layer": "img",
            "TileMatrixSet": "w",
            "Style": "default",
            "Format": "tiles",
            "MinimumLevel": 0,
            "MaximumLevel": 25
        }
    })
});

// 删除天地图
$("#removeWMTSLayer_Tianditu").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "removeWMTSLayer",
        "data": {
            "layerId": "Overlay5"
        }
    })
});

// 加载arcgis发出的WMTS图层服务
$("#addWMTSLayer_ArcgisService").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "addWMTSLayer",
        "data": {
            "LayerId":"Overlay6",
            "BaseUrl": "http://192.168.34.213:9000/arcgis/rest/services/SIPIMG/sip2021img3857/MapServer/WMTS",
            "Layer": "SIPIMG_sip2021img3857",
            "TileMatrixSet": "default028mm",
            "Style": "default",
            "Format": "image/png",
            "MinimumLevel": 0,
            "MaximumLevel": 25
        }
    })
});

// 删除arcgis发出的WMTS图层
$("#removeWMTSLayer_ArcgisService").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "removeWMTSLayer",
        "data": {
            "layerId": "Overlay6"
        }
    })
});

// 加载GeoServer发出的WMTS图层服务
$("#addWMTSLayer_GeoService").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "addWMTSLayer",
        "data": {
            "LayerId":"Overlay7",
            "BaseUrl": "http://192.168.127.17:8080/geoserver/gwc/service/wmts",
            "Layer": "test003:sipsd_src_3857_byte",
            "TileMatrixSet": "grid_3857",
            "Style": "",
            "Format": "image/png",
            "MinimumLevel": 0,
            "MaximumLevel": 25
        }
    })
});

// 删除GeoServer发出的WMTS图层
$("#removeWMTSLayer_GeoService").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "removeWMTSLayer",
        "data": {
            "layerId": "Overlay7"
        }
    })
});

// 加载GeoServer发出的WMTS图层服务(管线)
$("#addWMTSLayer_GeoServicePipeline").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "addWMTSLayer",
        "data": {
            "LayerId":"Overlay8",
            "BaseUrl": "http://192.168.127.17:8080/geoserver/gwc/service/wmts",
            "Layer": "sip_pipe:f_ld_line",
            "TileMatrixSet": "EPSG:900913",
            "Style": "pink_line",
            "Format": "image/png",
            "MinimumLevel": 0,
            "MaximumLevel": 25
        }
    })
});

// 删除GeoServer发出的WMTS图层(管线)
$("#removeWMTSLayer_GeoServicePipeline").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "WMTS",
        "method": "removeWMTSLayer",
        "data": {
            "layerId": "Overlay8"
        }
    })
});


