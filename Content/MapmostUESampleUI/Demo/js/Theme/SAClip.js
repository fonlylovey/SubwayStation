// 进入剖切模式
$("#startClip").click(function () {
    console.log('进入剖切模式')
    // 进入剖切模式前需先关闭管线横截面分析，原因是不能共用剖切材质
    mapmostUE.removeMarker("CSectionMarker");
    mapmostUE.stopCSectionAnalysis();
    // 剖切体在场景中被创建后的回调
    let fn = function (val) {
        console.log('clip box added!')
        console.log(val)
        mapmostUE.setOnClipAreaChangedListener(function (val) {
            console.log(val)
        });
    }
    mapmostUE.startClip(fn);
    
})

// 退出剖切模式
$("#stopClip").click(function () {
    console.log('退出剖切模式')
    mapmostUE.stopClip();
})

// 添加剖分体块
$("#addClipBox").click(function () {
    let options = {
        "location": [120.675362,31.318861,20],
        "rotation": [0, 180, 40],
        "length": 200, // 单位米
        "width": 100, // 单位米
        "height": 80 // 单位米
    }
    mapmostUE.addClipBox(options);
})

// 删除剖分体块
$("#removeClipBox").click(function () {
    mapmostUE.removeClipBox();
})

// 添加剖切体位置变化监听
$("#addClipAreaChangedListener").click(function () {
    mapmostUE.setOnClipAreaChangedListener(function (val) {
        console.log(val)
    });
})

// 退出剖切体位置变化监听
$("#removeClipAreaChangedListener").click(function () {
    mapmostUE.removeOnClipAreaChangedListener();
})