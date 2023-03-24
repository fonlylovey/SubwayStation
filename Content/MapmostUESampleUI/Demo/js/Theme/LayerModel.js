// 三维模型

// 添加三维模型
$("#addModel").click(function () {
    mapmostUE.flyTo({
        "location": [120.681435, 31.315557, 185.18779],
        "rotation":[0,-41.666557,-130.778],
        "time": 2
    });

    mapmostUE.addModel("model1",{
        "type": "Drone",
        "location": [120.680374, 31.316693, 50],
        "rotation":[0,0, -30]
    });
})

var i =0;
// 更新模型
$("#updateModel").click(function () {
    i++;
    mapmostUE.updateModel("model1",{
        "location": [120.680384 + 0.00003 * i, 31.316695+0.00003 * i, 50],
        "rotation": [0,0,-30] // 下面这3个参数需要改什么就传什么
    })
    // for (let i = 0; i < 100; i++) {
    //     setTimeout(function () {
    //         mapmostUE.updateModel("model1",{
    //             "location": [120.680384 + 0.00001 * i, 31.316695+0.00001 * i, 50],
    //             "rotation": [0,0,-30] // 下面这3个参数需要改什么就传什么
    //         })
    //     }, 50*i)
    // }
})


// 移除
$("#removeModel").click(function () {
    mapmostUE.removeModel("model1");
    i=0;
})
