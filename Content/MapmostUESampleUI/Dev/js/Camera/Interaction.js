// 控制地图晃动
$("#allowIdle").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "allowIdle",
        "data": {
            "isAllow": true
        }
    })
});

// 控制地图晃动
$("#notAllowIdle").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "allowIdle",
        "data": {
            "isAllow": false
        }
    })
});

// 控制是否允许地图操作
$("#frozenMap").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": true
        }
    })
});

// 控制是否允许地图操作
$("#notFrozenMap").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": false
        }
    })
});

// 限制平移
$("#frozenPan").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": true,
            "panFrozen":true
        }
    })
});

// 限制水平旋转
$("#frozenRotate").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": true,
            "rotationFrozen":true
        }
    })
});

// 限制俯仰旋转
$("#frozenPitch").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": true,
            "pitchFrozen":true
        }
    })
});

// 限制缩放旋转
$("#frozenZoom").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "isFrozen",
        "data": {
            "isFrozen": true,
            "zoomFrozen":true
        }
    })
});

// 获取相机参数
$("#getCameraParameters").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "getCameraParameters",
        "data": {}
    }, function (response) {
        console.log(response)
    })
});

// 设置地图交互模式
$("#setInteractionModeDrone").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "setInteractionMode",
        "data": {
            "mode": "Drone"
        }
    })
});

// 设置地图交互模式
$("#setInteractionMode").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "setInteractionMode",
        "data": {
            "mode": "Explorer"
        }
    })
});

// 设置是否允许地图缓动
$("#allowDecelerationStop").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "allowDecelerationStop",
        "data": {
            "isAllow": true
        }
    })
});

// 设置是否允许地图缓动
$("#notAllowDecelerationStop").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Interaction",
        "method": "allowDecelerationStop",
        "data": {
            "isAllow": false
        }
    })
});