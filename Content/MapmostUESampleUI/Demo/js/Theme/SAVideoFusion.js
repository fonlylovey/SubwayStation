// 添加单路视频融合
$("#addSingleVideoFusion").click(function (){
    
    mapmostUE.flyTo({
        "location":[120.74337479643435, 31.33742451006347, 17.047867964956584],
        "rotation": [0,-24.003034591674805,-121.14765167236328],
        "time":2
    });
    
    mapmostUE.addVideoFusion({
        cameraPosition : [120.7433289574518, 31.337482505416883, 17.930048164076627],
        // cameraPosition: [120.739105, 31.305603,  61.201748],
        fov: 45,
        // cameraRotation:[ 0.673769,-12.545454,-13.387241],
        // cameraRotation:[ -12,-80,-90],
        cameraRotation:[0, -24.003034591674805, -121.14765167236328],
        // url: "rtsp://192.168.34.87:554",
        // url: "http://localhost:4321/Demo/asset/aoti_video_fusion.mp4",
        // url: "http://192.168.34.213:8888/SIPSD/video/aoti_video_fusion.mp4",
        // url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
        url: "rtsp://101.35.239.206/Video_1",
        videoSize: [720,404],
        far: 1000,
        opacity: 1
    });
    
})

// 删除单路视频融合
$("#removeSingleVideoFusion").click(function (){
    mapmostUE.removeVideoFusion()
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
