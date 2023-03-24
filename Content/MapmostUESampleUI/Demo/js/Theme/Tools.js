/********* TimeSlider ********/
// // 显示24小时光照时间条
// $("#showTimeSlider").click(function () {
//     mapmostUE.setTimeSliderVisibility(true);
// })
//
// // 关闭24小时光照时间条
// $("#hideTimeSlider").click(function () {
//     mapmostUE.setTimeSliderVisibility(false);
// })
//
// // 改变布局位置
// $("#setTimeSliderLayout").click(function () {
//     mapmostUE.setTimeSliderLayout({
//         marginBottom:20,
//         marginLeft:20,
//         marginRight:20
//     });
// })


/********* Compass ********/

// 显示指北针
$("#showCompass").click(function () {
    mapmostUE.setCompassVisibility(true);
})

// 设置指北针布局
$("#setCompass").click(function () {
    mapmostUE.setCompassLayout({
        offsetX:50,
        offsetY:50
    });
})

// 隐藏指北针
$("#closeCompass").click(function () {
    mapmostUE.setCompassVisibility(false);
})

// // 显示24小时光照时间条
// $("#showTimeSlider").click(function () {
//     mapmostUE.setTimeSliderVisibility(true)
// })
//
// // 关闭24小时光照时间条
// $("#hideTimeSlider").click(function () {
//     mapmostUE.setTimeSliderVisibility(false)
// })
//
// // 改变布局位置
// $("#setTimeSliderLayout").click(function () {
//     let options = {
//         "marginBottom": 300,
//         "marginLeft": 40,
//         "marginRight": 40
//     }
//     mapmostUE.setTimeSliderLayout(options)
// })
//
// // 设置场景时间
// $("#changeTime").click(function () {
//     let options = {
//         "time":6
//     }
//     mapmostUE.changeTime(options)
// })

// 局部高亮
$("#highlightPartly").click(function () {

    mapmostUE.flyTo({
        "location": [120.746002, 31.30319, 243.605423],
        "rotation": [0, -35.426605, -116.616402],
        "time": 2
    });
    
    let options = {
        "id": "part1",
        "location": [120.74549102783203, 31.30670166015625, 60.2554292678833],
        "rotation": [0, 180, 40], // pitch, roll, yaw
        "length": 300, // 单位米
        "width": 280, // 单位米
        "height": 70 // 单位米
    }
    
    mapmostUE.highlightPartly("part1", options);
    
})

// 取消局部高亮
$("#unhighlightPartly").click(function () {

    mapmostUE.unhighlightPartly("part1");
    
})



// 其他
$("#quit").click(function () {
    mapmostUE.quit();
})

// 截屏
$("#screenshot").click(function () {
    mapmostUE.screenshot(function (path) {
        console.log(path)
    });
})



/********* VisualEffect ********/
$("#highlightModel").click(function () {

    mapmostUE.flyTo({
        "location": [120.67846679, 31.3263626, 449.19500732],
        "rotation":[0, -22.4630012512, 120.0608673],
        "time": 2
    });


    mapmostUE.highlightModel("DFZM-01_Baked_toUE_DFZM-01_Baked");
})

$("#unhighlightModel").click(function () {
    mapmostUE.unhighlightModel("DFZM-01_Baked_toUE_DFZM-01_Baked");
})


// $("#showVE").click(function () {
//
//     mapmostUE.flyTo({
//         "location": [120.67846679, 31.3263626, 449.19500732],
//         "rotation":[0, -22.4630012512, 120.0608673],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("DFZMSpread2",true);
// })
//
// $("#hideVE").click(function () {
//
//     mapmostUE.setStaticEffectVisibility("DFZMSpread2",false);
// })
//
// // 5G点位特效
// $("#effect5G").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.703087, 31.320087, 275.68573],
//         "rotation":[0, -21.307676, -60.687103],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("5G",true);
// })
//
// // 关闭5G点位特效
// $("#removeEffect5G").click(function () {
//     mapmostUE.setStaticEffectVisibility("5G",false);
// })
//
// // 东方之门围栏1
// $("#effectED1").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.68248, 31.321154, 533.393982],
//         "rotation":[0, -25.127254, 153.734634],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("DFZMSpread1",true);
// })
//
// // 关闭东方之门围栏1
// $("#removeEffectED1").click(function () {
//     mapmostUE.setStaticEffectVisibility("DFZMSpread1",false);
// })
//
//
//
// // 九龙仓围栏+描边
// $("#effectIFC1").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.713699, 31.320156, 414.614685],
//         "rotation":[0, -24.281069, -112.171654],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("JLC",true);
// })
//
// // 关闭九龙仓围栏+描边
// $("#removeEffectIFC1").click(function () {
//     mapmostUE.setStaticEffectVisibility("JLC",false);
// })
//
//
// // 九龙仓区域扩散
// $("#effectIFC2").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.717606, 31.315809, 574.675415],
//         "rotation":[0, -25.089811, -124.4188],
//         "time": 2
//     });
//     mapmostUE.setStaticEffectVisibility("JLCAreaCircle",true);
// })
//
// // 关闭九龙仓区域扩散
// $("#removeEffectIFC2").click(function () {
//     mapmostUE.setStaticEffectVisibility("JLCAreaCircle",false);
// })
//
//
// // 区域围栏组
// $("#effectGF").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.666389, 31.308725, 821.460266],
//         "rotation":[0, -44.354305, 128.376703],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("AreaFencingGroup",true);
// })
//
// // 关闭区域围栏组
// $("#removeEffectGF").click(function () {
//     mapmostUE.setStaticEffectVisibility("AreaFencingGroup",false);
// })
//
//
// // 奥体中心标记点
// $("#effectOlympic1").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.748795, 31.302843, 293.448975],
//         "rotation":[0, -30.069279, -143.002884],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("OlympicMarkPoint",true);
// })
//
// // 关闭奥体中心标记点
// $("#removeEffectOlympic1").click(function () {
//     mapmostUE.setStaticEffectVisibility("OlympicMarkPoint",false);
// })
//
//
// // 奥体中心围栏
// $("#effectOlympic2").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.748795, 31.302843, 293.448975],
//         "rotation":[0, -30.069279, -143.002884],
//         "time": 2
//     });
//     mapmostUE.setStaticEffectVisibility("OlympicFencing",true);
// })
//
// // 关闭奥体中心围栏
// $("#removeEffectOlympic2").click(function () {
//     mapmostUE.setStaticEffectVisibility("OlympicFencing",false);
// })
//
//
// // 建筑扫光
// $("#effectBuilding").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.679008, 31.284693, 1458.017578],
//         "rotation":[0, -47.442856, 135.934341],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("BuildingBox",true);
// })
//
// // 关闭建筑扫光
// $("#removeEffectBuilding").click(function () {
//     mapmostUE.setStaticEffectVisibility("BuildingBox",false);
// })
//
//
// // 独墅湖区域+围栏
// $("#effectSV").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.702583, 31.296019, 2431.560547],
//         "rotation":[0, -49.539421, 109.517372],
//         "time": 2
//     });
//     mapmostUE.setStaticEffectVisibility("DSH",true);
// })
//
// // 关闭独墅湖区域+围栏
// $("#removeEffectSV").click(function () {
//     mapmostUE.setStaticEffectVisibility("DSH",false);
// })
//
//
// // 金鸡湖区域+围栏
// $("#effectGL").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.696045, 31.296753, 2215.724609],
//         "rotation":[0, -56.476566, -98.233429],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("JJH",true);
// })
//
// // 关闭金鸡湖区域+围栏
// $("#removeEffectGL").click(function () {
//     mapmostUE.setStaticEffectVisibility("JJH",false);
// })
//
//
// // 空间粒子
// $("#effectParticle").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.697777, 31.302013, 679.496704],
//         "rotation":[0, -20.899168, -118.365044],
//         "time": 2
//     });
//     mapmostUE.setStaticEffectVisibility("upflow",true);
// })
//
// // 关闭空间粒子
// $("#removeEffectParticle").click(function () {
//     mapmostUE.setStaticEffectVisibility("upflow",false);
// })
//
// // 道路点扩散
// $("#effectRoad1").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.731026, 31.292744, 249.385239],
//         "rotation":[0, -47.662712, -129.874939],
//         "time": 2
//     });
//     mapmostUE.setStaticEffectVisibility("Spread1",true);
// })
//
// // 关闭道路点扩散
// $("#removeEffectRoad1").click(function () {
//     mapmostUE.setStaticEffectVisibility("Spread1",false);
// })
//
// // 道路轨迹
// $("#effectRoad2").click(function () {
//     mapmostUE.flyTo({
//         "location": [120.668549, 31.30736, 131.661667],
//         "rotation":[0, -44.968159, -139.89006],
//         "time": 2
//     });
//
//     mapmostUE.setStaticEffectVisibility("Road_Trajectory",true);
// })
//
// // 关闭道路轨迹
// $("#removeEffectRoad2").click(function () {
//     mapmostUE.setStaticEffectVisibility("Road_Trajectory",false);
// })


