// flyTo
$("#flyTo").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "flyTo",
        "data": {
            "location":[120.738807,31.311803,411.78],
            "rotation":[0, -49, 1.2], // Roll,pitch,yaw
            time:2
        }
    })
});

//flyToTarget
$("#flyToTarget").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "flyToTarget",
        "data": {
            "targetName": "targetModel",
            "rotation": [0,180,40],
            "distance": 20,
            "time": 5
        }
    })
});

// interruptFlyTo
$("#interruptFlyTo").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "interruptFlyTo",
        "data": {
        }
    })
});

// // lookAt
// $("#lookAt").click(function () {
//     ue5("Map", {
//         "module": "Map",
//         "subModule": "Camera",
//         "method": "lookAt",
//         "data": {
//             "location":[120.738807,31.311803,411.78]
//         }
//     })
// });

// 前进
$("#moveForward").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "moveForward",
        "data": {
            "distance": 100 // 单位米，正为前进，负为后退
        }
    })
});

// 后退
$("#moveBack").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "moveForward",
        "data": {
            "distance": -100 // 单位米，正为前进，负为后退
        }
    })
});

// 左移
$("#moveLeft").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "moveRight",
        "data": {
            "distance": -100 // 单位米，正为向右，负为向左
        }
    })
});

// 右移
$("#moveRight").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "moveRight",
        "data": {
            "distance": 100 // 单位米，正为向右，负为向左
        }
    })
});

// 拉近缩放
$("#moveNear").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "zoom",
        "data": {
            "distance": 100 // 单位米，正为拉近，负为拉远
        }
    })
});

// 拉远缩放
$("#moveFar").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "zoom",
        "data": {
            "distance": -100 // 单位米，正为拉近，负为拉远
        }
    })
});

// 左转
$("#turnLeft").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "turnRight",
        "data": {
            "degree": -45 // 单位角度，正为右转，负为左转
        }
    })
});

// 右转
$("#turnRight").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "turnRight",
        "data": {
            "degree": 45 // 单位角度，正为右转，负为左转
        }
    })
});

// 抬头
$("#turnUp").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "turnUp",
        "data": {
            "degree": -45 // 单位角度，正为抬头，负为低头
        }
    })
});

// 低头
$("#turnDown").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "turnUp",
        "data": {
            "degree": 45 // 单位角度，正为抬头，负为低头
        }
    })
});

//全图
$("#fullMap").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "fullMap",
        "data": {
            "duration":3
        }
    })
});

$("#focusMap").click(function () {
    ue5("Camera", {
        "module": "Camera",
        "subModule": "Control",
        "method": "focusMap",
        "data": {
            "duration":3
        }
    })
});