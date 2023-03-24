//  地图图层控制

/*******3DTiles******/
// 飞行到3dtiles
$("#flyTo3dTiles").click(function () {
    mapmostUE.flyTo({
        "location": [120.746002, 31.30319, 243.605423],
        "rotation": [0, -35.426605, -116.616402],
        "time": 2
    });
})
// 设置3dTiles不可见
$("#set3DTilesHidden").click(function () {
    mapmostUE.set3DTilesVisibility("Base3DTiles",false)
})

// 设置3dTiles可见
$("#set3DTilesVisible").click(function () {
    mapmostUE.set3DTilesVisibility("Base3DTiles",true)
})

// 添加3DTiles图层
$("#add3DTilesLayer").click(function () {
    mapmostUE.add3DTiles("aoti","http://192.168.34.213:8888/Olympic/aoti2/tileset.json")
})

// 删除3DTiles图层
$("#remove3DTilesLayer").click(function () {
    mapmostUE.remove3DTiles("aoti")
})

// 设置透明度为0.5
$("#setTMSAnd3DTilesOpacity").click(function () {
    mapmostUE.setMapsAnd3DTilesOpacity(0.5)
})

// 设置透明度为1
$("#restoreTMSAnd3DTilesOpacity").click(function () {
    mapmostUE.restoreMapsAnd3DTilesOpacity()
})

// // 设置3dTiles高度偏移(上浮)
// $("#set3DTilesHeightOffsetUp").click(function () {
//     mapmostUE.set3DTilesHeightOffset(2)
// })
//
// // 设置3dTiles高度偏移(下沉)
// $("#set3DTilesHeightOffsetDown").click(function () {
//     mapmostUE.set3DTilesHeightOffset(-2)
// })


/******* TMS ******/
// 设置TMS不可见
$("#setTMSHidden").click(function () {
    mapmostUE.setAllMapsVisibility(false)
})

//设置TMS可见
$("#setTMSVisible").click(function () {
    mapmostUE.setAllMapsVisibility(true)
})

// 添加雨水管线图层
$("#addTMSLayerYS").click(function () {
    console.log('添加雨水管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('添加雨水管线图层')
    mapmostUE.addTMSLayer('Overlay1', {
        "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_ys_pipeline@EPSG:900913@png/tilemapresource.xml",
        "minimumLevel": 0,
        "maximumLevel": 22
    })
})

// 删除雨水管线图层
$("#removeTMSLayerYS").click(function () {
    console.log('删除雨水管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('删除雨水管线图层')
    mapmostUE.removeTMSLayer('Overlay1');
})

// 添加路灯管线图层
$("#addTMSLayerLD").click(function () {
    console.log('添加路灯管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('添加路灯管线图层')
    mapmostUE.addTMSLayer('Overlay2', {
        "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_ld_pipeline@EPSG:900913@png/tilemapresource.xml",
        "minimumLevel": 0,
        "maximumLevel": 22
    })
})

// 删除路灯管线图层
$("#removeTMSLayerLD").click(function () {
    console.log('删除路灯管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('删除路灯管线图层')
    mapmostUE.removeTMSLayer('Overlay2');
})

// 添加给水管线图层
$("#addTMSLayerGS").click(function () {
    console.log('添加给水管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('添加给水管线图层')
    mapmostUE.addTMSLayer('Overlay3', {
        "url": "http://192.168.34.213:9000/sipsd/tms/geoserver/sip_pipe:sip_js_pipeline@EPSG:900913@png/tilemapresource.xml",
        "minimumLevel": 0,
        "maximumLevel": 22
    })
})

// 删除给水管线图层
$("#removeTMSLayerGS").click(function () {
    console.log('删除给水管线图层')
    var notyf = new Notyf({
        position:{
            x:'center',
            y:'top'
        }
    });
    notyf.success('删除给水管线图层')
    mapmostUE.removeTMSLayer('Overlay3');
})

// 加载天地图图层
$("#addWMTSLayer_Tianditu").click(function () {
    let options = {
        "baseUrl": "https://t0.tianditu.gov.cn/img_w/wmts?tk=60d2872fa809269d855cb005912e543b",
        "layer": "img",
        "tileMatrixSet": "w",
        "style": "default",
        "format": "tiles",
        "minimumLevel": 0,
        "maximumLevel": 25
    };
    mapmostUE.addWMTSLayer("Overlay4", options);
});

// 删除天地图
$("#removeWMTSLayer_Tianditu").click(function () {
    mapmostUE.removeWMTSLayer("Overlay4");
});

// 加载arcgis发出的WMTS图层服务
$("#addWMTSLayer_ArcgisService").click(function () {
    let options = {
        "baseUrl": "http://192.168.34.213:9000/arcgis/rest/services/SIPIMG/sip2021img3857/MapServer/WMTS",
        "layer": "SIPIMG_sip2021img3857",
        "tileMatrixSet": "default028mm",
        "style": "default",
        "format": "image/png",
        "minimumLevel": 0,
        "maximumLevel": 25
    }
    mapmostUE.addWMTSLayer("Overlay5", options);
});

// 删除arcgis发出的WMTS图层
$("#removeWMTSLayer_ArcgisService").click(function () {
    mapmostUE.removeWMTSLayer("Overlay5");
});

// 加载GeoServer发出的WMTS图层服务
$("#addWMTSLayer_GeoService").click(function () {
    let options = {
        "layerId":"Overlay7",
        "baseUrl": "http://192.168.127.17:8080/geoserver/gwc/service/wmts",
        "layer": "test003:sipsd_src_3857_byte",
        "tileMatrixSet": "grid_3857",
        "style": "",
        "format": "image/png",
        "minimumLevel": 0,
        "maximumLevel": 25
    }
    mapmostUE.addWMTSLayer("Overlay6", options);
});

// 删除GeoServer发出的WMTS图层
$("#removeWMTSLayer_GeoService").click(function () {
    mapmostUE.removeWMTSLayer("Overlay6");
});

// 加载GeoServer发出的WMTS图层服务(管线)
$("#addWMTSLayer_GeoServicePipeline").click(function () {
    let options = {
        "baseUrl": "http://192.168.127.17:8080/geoserver/gwc/service/wmts",
        "layer": "sip_pipe:f_ld_line",
        "tileMatrixSet": "EPSG:900913",
        "style": "pink_line",
        "format": "image/png",
        "minimumLevel": 0,
        "maximumLevel": 25
    }
    mapmostUE.addWMTSLayer("Overlay7", options);
});

// 删除GeoServer发出的WMTS图层(管线)
$("#removeWMTSLayer_GeoServicePipeline").click(function () {
    mapmostUE.removeWMTSLayer("Overlay7");
});

// 添加WMS
$("#addWMS").click(function () {
    let options = {
        "baseUrl": "http://192.168.127.17:8080/geoserver/test003/wms",
        "layers": "sipsd_src_3857_byte",
        "minimumLevel": 0,
        "maximumLevel": 14
    }
    mapmostUE.addWMSLayer("Overlay8", options)
});

// 删除WMS
$("#removeWMS").click(function () {
    mapmostUE.removeWMSLayer("Overlay8")
});

// 添加WMS
$("#addWMS2").click(function () {
    let options = {
        "baseUrl": "http://192.168.34.213:9000/arcgis/services/SIPIMG/sip2021img3857/MapServer/WMSServer",
        "layers": "0",
        "minimumLevel": 0,
        "maximumLevel": 14
    }
    mapmostUE.addWMSLayer("Overlay1", options)
});

// 删除WMS
$("#removeWMS2").click(function () {
    mapmostUE.removeWMSLayer("Overlay1")
});


/******* Text ******/
// 增加标注
$("#addTexts").click(function () {
    mapmostUE.addTexts(RoadData5000, {height: 8})
})

// 移除标注
$("#removeTexts").click(function () {
    mapmostUE.removeTexts()
})

// 开启注记避让
$("#enableTextAvoidance").click(function () {
    mapmostUE.setTextAvoidance(true)
})


// 关闭注记避让
$("#disableTextAvoidance").click(function () {
    mapmostUE.setTextAvoidance(false)
})
