// 独立标签

// 添加Marker1
$("#addMarker1").click(function () {
    mapmostUE.flyTo({
        "location": [120.6840362, 31.3196697, 675.071166],
        "rotation":[0,-36.37688,169.0972],
        "time": 2
    });

    mapmostUE.addMarker("marker1",{
        "name": "预警点位",
        "type": "classic",
        "location": [120.677742, 31.319174, 20],
        "iconImage": "http://192.168.34.213:8888/XiXi/icon/monitor.png",
        "bgColor": "#668866",
        "enableAutoFlyTo": false,
        "imageUrl":"http://192.168.34.213:8888/XiXi/icon/monitor.png"
    })
})

// marker1隐藏
$("#setMarkerHidden").click(function () {
    mapmostUE.setMarkerVisibility('marker1',false);
})

// marker1显示
$("#setMarkerVisible").click(function () {
    mapmostUE.setMarkerVisibility('marker1',true);
})


// 清除Marker1
$("#removeMarker1").click(function () {
    mapmostUE.removeMarker("marker1");
})

// 添加Marker2
$("#addMarker2").click(function () {
    mapmostUE.flyTo({
        "location": [120.68380737, 31.322788, 376.40527],
        "rotation":[0, -22.01851,-179.206436],
        "time": 2
    });

    mapmostUE.addMarker("marker2",{
        "type": "window",
        "location": [120.678139, 31.32337, 10.635809],
        "windowWidth": 400,
        "windowHeight": 200,
        "url": "http://www.dpark.com.cn/home",
        "enableAutoFlyTo": false,
    })
})

// 清除Marker2
$("#removeMarker2").click(function () {
    mapmostUE.removeMarker("marker2");
})


// 添加Marker3
$("#addMarker3").click(function () {
    mapmostUE.flyTo({
        "location": [120.677567, 31.319983, 50.978328],
        "rotation":[0, -30.018681,161.448196],
        "time": 2
    });

    mapmostUE.addMarker("marker3",{
        "name": "预警点位",
        "type": "classic",
        "location": [120.677042, 31.319874, 20],
        "iconImage": "http://192.168.34.213:8888/XiXi/icon/monitor.png",
        "bgColor": "#668866",
        "enableAutoFlyTo": false,
        "showIcon":false,
    })
})

// 清除Marker3
$("#removeMarker3").click(function () {
    mapmostUE.removeMarker("marker3");
})


// 添加Marke1点击事件监听
$("#setOnMarkerClickListener").click(function () {
    mapmostUE.setOnMarkerClickListener(function (response) {

        let {id, name, location} = response;

        // response 为Marker ID
        // alert(id + " 【" + name + "】被点击，位置为" + location.toString())
        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.success(id + " 【" + name + "】被点击，位置为" + location.toString())
    });
})

// 移除Marker点击事件监听
$("#removeOnMarkerClickListener").click(function () {
    mapmostUE.removeOnMarkerClickListener();
})


// 添加特效
$("#addEffect").click(function () {
    mapmostUE.flyTo({
        "location": [120.6805801, 31.319282, 219.65800],
        "rotation":[0,-30.018762,161.448181],
        "time": 2
    });

    mapmostUE.addEffect("effect1",{
        "location":[120.677742,31.319174,20],
        "type":"warning",
        "style":{
            "radiusOutside":16000,
            "radiusInside":8000
        }
    })
})

// 移除特效
$("#removeEffect").click(function () {
    mapmostUE.removeEffect("effect1");
})

