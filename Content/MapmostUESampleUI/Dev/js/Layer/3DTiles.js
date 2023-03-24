// 显示3DTiles
$("#show3DTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "set3DTilesVisibility",
        "data": {
            "id":"Base3DTiles",
            "isVisible": true
        }
    })
});

// 隐藏3DTiles
$("#hide3DTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "set3DTilesVisibility",
        "data": {
            "id":"Base3DTiles",
            "isVisible": false
        }
    })
});

// 上移3DTiles
$("#moveUp3dTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "set3DTilesHeightOffset",
        "data": {
            "deltaHeight":100
        }
    })
});

// 下移3DTiles
$("#moveDown3dTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "set3DTilesHeightOffset",
        "data": {
            "deltaHeight":-100
        }
    })
});

// 添加3DTiles
$("#add3DTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "add3DTilesLayer",
        "data": {
            "id":"aoti",
            "url":"http://192.168.34.213:8888/Olympic/aoti2/tileset.json"
        }
    })
});

// 删除3DTiles
$("#remove3DTiles").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "3DTiles",
        "method": "remove3DTilesLayer",
        "data": {
            "id":"aoti"
        }
    })
});

// 3DTiles和影像透明
$("#set3DTilesOpacity").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "MapSetting",
        "method": "setMapsAnd3DTilesOpacity",
        "data": {
            "opacity": 0.6
        }
    })
});

// 3DTiles和影像不透明
$("#recover3DTilesOpacity").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "MapSetting",
        "method": "restoreMapsAnd3DTilesOpacity",
        "data": {

        }
    })
});