// 添加单路视频融合
$("#addSingleVideoFusion").click(function (){
    
    mapmostUE.flyTo({
        "location":[120.74335462851799, 31.337454476046506, 16.465953156856273],
        "rotation": [0,-32.50303268432617,-122.24765014648438],
        "time":2
    });

    let options = {
        "functionName": "FloorLift",
        "params": {
            "buildingName": "Station",
            "floorIndex": -1
        }
    }
    mapmostUE.customFunction(options);
    
    mapmostUE.addVideoFusion({
        cameraPosition : [120.7433741116682, 31.33743987468373, 15.930048164076627],
        // cameraPosition: [120.739105, 31.305603,  61.201748],
        fov: 60,
        // cameraRotation:[ 0.673769,-12.545454,-13.387241],
        // cameraRotation:[ -12,-80,-90],
        cameraRotation:[-4.060542, -19.504357, -128.516378],
        // url: "rtsp://192.168.34.87:554",
        // url: "http://localhost:4321/Demo/asset/aoti_video_fusion.mp4",
        // url: "http://192.168.34.213:8888/SIPSD/video/aoti_video_fusion.mp4",
        // url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
        url: "rtsp://101.35.239.206/Video_1",
        videoSize: [720,404],
        far: 2000,
        opacity: 1
    });
    
})

// 删除单路视频融合
$("#removeSingleVideoFusion").click(function (){
    mapmostUE.flyTo({
        "location":[120.74299731904654, 31.336789226405084, 178.17264187069452],
        "rotation": [0,-60.79999923706055,-100.4000015258789],
        "time":2
    });

    mapmostUE.removeVideoFusion()

    let options = {
        "functionName": "ReverseLiftBuilding",
        "params": {
            "buildingName": "Station"
        }
    }
    mapmostUE.customFunction(options);
})



// 多路视频融合
// TODO
$("#addMultipleVideoFusion").click(function () {
    // 观察多路视频时的位置
    mapmostUE.flyTo({
        "location":[120.74586486816406, 31.306806564331055, 27.847082138061523],
        "rotation": [0,-22.70305633544922,-0.947662353515625],
        "time":1
    });

    mapmostUE.addVideoFusion({
        id:'video2',
        cameraPosition: [120.74483934749799,31.306914396230752,38.851714829166546],
        fov: 9.8,
        cameraRotation:[-2.88798988,-10.986752,5.74035150000001],
        url: "http://192.168.34.213:8888/SIPSD/video/aoti_120_cut.mp4",
        videoSize: [1920,1080],
        far: 58606.800781,
        opacity: 1
    });

    mapmostUE.addVideoFusion({
        id:'video1',
        cameraPosition: [120.74483934749799,31.306914396230752,38.851714829166546],
        fov: 9.8,
        cameraRotation:[-3.88798988,-10.686752,10.74035150000001],
        url: "http://192.168.34.213:8888/SIPSD/video/aoti_119.mp4",
        videoSize: [1920,1080],
        far: 58606.800781,
        opacity: 1
    });


    // 两路分开
    // mapmostUE.addVideoFusion({
    //     id:'video2',
    //     cameraPosition: [120.74483934749799,31.306914396230752,38.851714829166546],
    //     fov: 10,
    //     // cameraRotation:[-2.88798988,-11.286752,5.74035150000001],
    //     cameraRotation:[-2.88798988,-11.286752,-1.74035150000001],
    //     url: "http://192.168.76.23:8080/aoti_120_cut.mp4",
    //     videoSize: [1920,1080],
    //     far: 58606.800781,
    //     opacity: 1
    // });
    //
    // mapmostUE.addVideoFusion({
    //     id:'video1',
    //     cameraPosition: [120.74483934749799,31.306914396230752,38.851714829166546],
    //     fov: 10,
    //     cameraRotation:[-3.88798988,-10.986752,10.74035150000001],
    //     url: "http://192.168.76.23:8080/aoti_119.mp4",
    //     videoSize: [1920,1080],
    //     far: 58606.800781,
    //     opacity: 1
    // });

})

// 关闭多路视频融合
$("#removeMultipleVideoFusion").click(function () {
    mapmostUE.removeVideoFusion('video1')
    mapmostUE.removeVideoFusion('video2')
})
