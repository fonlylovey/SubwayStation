// 显示指南针
$("#setCompassVisibility").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Compass",
        "method": "setCompassVisibility",
        "data": {
            "isVisible": true
        }
    })
})

// 关闭指南针
$("#setCompassVisibility2").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Compass",
        "method": "setCompassVisibility",
        "data": {
            "isVisible": false
        }
    })
})

// 改变指南针布局位置
$("#setCompassLayout").click(function () {
    // 指南针默认在右上角
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Compass",
        "method": "setCompassLayout",
        "data": {
            "offsetX": 40, // 距离右边界的距离
            "offsetY": 40 // 距离顶部距离
        }
    })
})