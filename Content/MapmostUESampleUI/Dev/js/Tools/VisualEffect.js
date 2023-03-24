// 显示东方之门特效
$("#DFZM").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "setStaticEffectVisibility",
        "data": {
            "effectName": "DFZMSpread2",
            "isVisible": true
        }
    })
})

// 隐藏东方之门特效
$("#DFZMhide").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "setStaticEffectVisibility",
        "data": {
            "effectName": "DFZMSpread2",
            "isVisible": false
        }
    })
})

// 高亮模型
$("#highlightModel").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "highlightModel",
        "data": {
            "modelName": "DFZM-01_Baked_toUE_DFZM-01_Baked"
        }
    })
})

// 取消高亮模型
$("#unhighlightModel").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "unhighlightModel",
        "data": {
            "modelName": "DFZM-01_Baked_toUE_DFZM-01_Baked"
        }
    })
})

// 设置场景环境时间
$("#changeTime").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "changeTime",
        "data": {
            "time": 8 // 时间范围：0-24小数
        }
    })
})

// 添加水晶体特效
$("#addCrystalEffect").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "addCrystalEffect",
        "data": {
            "centerLocation":[120.675362,31.318861,20],
            "radius":1000,
            "color":"#A2E9FB"
        }
    })
})

// 删除水晶体特效
$("#removeCrystalEffect").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "removeCrystalEffect",
        "data": {

        }
    })
})

// 添加扫光特效
$("#addSweepingEffect").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "addSweepingEffect",
        "data": {
            "id":"sweeping1",
            "centerLocation":[120.675362,31.318861,20],
            "radius":1000,
            "width": 25, // 扫光圆环宽度，单位米
            "color":"#A2E9FB"
        }
    })
})

// 删除扫光特效
$("#removeSweepingEffect").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "removeSweepingEffect",
        "data": {
            "id":"sweeping1"
        }
    })
})

$("#openMinimap").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Minimap",
        "method": "setMinimapVisibility",
        "data": {
            "isVisible": true
        }
    })
});

$("#closeMinimap").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Minimap",
        "method": "setMinimapVisibility",
        "data": {
            "isVisible": false
        }
    })
});

// 进入线框体模式
$("#enterFrameMode").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "enterFrameMode",
        "data": {
        }
    })
})

// 离开线框体模式
$("#exitFrameMode").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "exitFrameMode",
        "data": {
        }
    })
})

// 局部高亮
$("#highlightPartly").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "highlightPartly",
        "data": {
            "id": "part1",
            "location": [120.74549102783203, 31.30670166015625, 60.2554292678833],
            "rotation": [0, 180, 40], // pitch, roll, yaw
            "length": 300, // 单位米
            "width":  280, // 单位米
            "height": 70 // 单位米
        }
    })
})

// 取消局部高亮
$("#unhighlightPartly").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "VisualEffect",
        "method": "unhighlightPartly",
        "data": {
            "id": "part1"
        }
    })
})