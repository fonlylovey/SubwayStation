// 添加视频融合
$("#addVideoFusion").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "addVideoFusion",
        "data": {
            "id":"123",
            "cameraPosition": [120.739105, 31.305603, 61.201748],
            "cameraRotation": [0.673769,-12.545454,-13.387241], // roll, pitch, yaw
            // "url": "rtsp://192.168.34.87:554",
            "url": "http://192.168.34.213:8888/SIPSD/video/aoti_video_fusion.mp4",
            "videoSize": [1280, 720],
            "far": 58606.800781,
            "fov": 45.643803,
            "opacity": 1,
            "blend":0.1
        }
    })
})

// 删除视频融合
$("#removeVideoFusion").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "removeVideoFusion",
        "data": {
            "id":"123"
        }
    })
})

// 添加视频融合
$("#addVideoFusion2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "addVideoFusion",
        "data": {
            "id":"456",
            "cameraPosition": [120.739105, 31.305603, 61.201748],
            "cameraRotation": [0.673769,-12.545454,-13.387241], // roll, pitch, yaw
            // "url": "rtsp://192.168.34.87:554",
            "url": "http://192.168.34.213:8888/SIPSD/video/aoti_video_fusion.mp4",
            "videoSize": [1280, 720],
            "far": 58606.800781,
            "fov": 45.643803,
            "opacity": 1,
            "blend":0.1
        }
    })
})

// 删除视频融合
$("#removeVideoFusion2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "removeVideoFusion",
        "data": {
            "id":"456"
        }
    })
})

// 视频融合自定义参数
$("#startChangeVideoFusionLocationRotation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "startChangeVideoFusionLocationRotation",
        "data": {
            "id":"123"
        }
    })
    console.log(app.VideoFusionShow)
    app.VideoFusionShow = true
})

$("#stopChangeVideoFusionLocationRotation").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "stopChangeVideoFusionLocationRotation",
        "data": {
            "id":"123"
        }
    })
    console.log(app.VideoFusionShow)
    app.VideoFusionShow = false
})

$("#updateVideoFusion").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "updateVideoFusion",
        "data": {
            "id":"123",
            "fov":30,
            "distance":200
        }
    })
})

$("#openVidoeoFusionFrustumVisibility").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setVideoFusionFrustumVisibility",
        "data": {
            "id":"123",
            "isVisible":true
        }
    })
})

$("#closeVidoeoFusionFrustumVisibility").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setVideoFusionFrustumVisibility",
        "data": {
            "id":"123",
            "isVisible":false
        }
    })
})

$("#setOnVideoFusionParamChangeListener").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setOnVideoFusionParamChangeListener",
        "data": {
            "id":"123"
        }
    })

    // 地图坐标拾取，返回点击的对象和坐标值的监听
    ue.interface.onVideoFusionParamChangeListener = function (val) {
        console.log(val)
    };
})

$("#removeOnVideoFusionParamChangeListener").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "removeOnVideoFusionParamChangeListener",
        "data": {
            "id":"123"
        }
    })
})

// 视频融合自定义参数
$("#startChangeVideoFusionLocationRotation2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "startChangeVideoFusionLocationRotation",
        "data": {
            "id":"456"
        }
    })
    console.log(app.VideoFusionShow)
    app.VideoFusionShow = true
})

$("#stopChangeVideoFusionLocationRotation2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "stopChangeVideoFusionLocationRotation",
        "data": {
            "id":"456"
        }
    })
    console.log(app.VideoFusionShow)
    app.VideoFusionShow = false
})

$("#updateVideoFusion2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "updateVideoFusion",
        "data": {
            "id":"456",
            "fov":30,
            "distance":1000
        }
    })
})

$("#openVidoeoFusionFrustumVisibility2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setVidoeoFusionFrustumVisibility",
        "data": {
            "id":"456",
            "isVisible":true
        }
    })
})

$("#closeVidoeoFusionFrustumVisibility2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setVidoeoFusionFrustumVisibility",
        "data": {
            "id":"456",
            "isVisible":false
        }
    })
})

$("#setOnVideoFusionParamChangeListener2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "setOnVideoFusionParamChangeListener",
        "data": {
            "id":"456"
        }
    })

    // 地图坐标拾取，返回点击的对象和坐标值的监听
    ue.interface.onVideoFusionParamChangeListener = function (val) {
        console.log(val)
    };
})

$("#removeOnVideoFusionParamChangeListener2").click(function () {
    ue5("SpatialAnalysis", {
        "module": "SpatialAnalysis",
        "subModule": "VideoFusion",
        "method": "removeOnVideoFusionParamChangeListener",
        "data": {
            "id":"456"
        }
    })
})