// 漫游巡检

// 开始漫游
$("#startMapRoam").click(function () {
    // 漫游相机点位
    let locations = [{
        "location": [120.691847535655484, 31.314123311271246, 260.934668],
        "rotation":[0,-19.620751,-151.970169],
        "time": 0
    }, {
        "location": [120.689458649493886, 31.318705595414261, 180.934668],
        "rotation":[0,-15.620751,-151.970169],
        "time": 3
    }, {
        "location": [120.683779410694655, 31.320630858362506, 130.934668],
        "rotation":[0,-13.0,-178.970169],
        "time": 5
    }, {
        "location": [120.67422386604828, 31.326329405973173, 180.934668],
        "rotation":[0,-18.0,90],
        "direction":"left",
        "time": 5
    }, {
        "location": [120.664397881459081, 31.317781455217023, 220.934668],
        "rotation":[0, -19.0,0],
        "time": 5
    }, {
        "location": [120.6733223995722, 31.31146625448212, 220.934668],
        "rotation":[0, -19.0,-90],
        "time": 5
    }, {
        "location": [120.690900995855586, 31.315625092821119 , 220.934668],
        "rotation":[0, -13.0,-170.970169],
        "time": 5
    }, {
        "location": [120.697481701130897, 31.318782606687979,220.934668],
        "rotation":[0, -14.0,-45],
        "time": 6
    }, {
        "location": [120.702259473454092, 31.321246934192104,220.934668],
        "rotation":[0, -14.0,-30],
        "time": 3
    }];


    // let locations = [{
    //     "location": [120.73265136700627, 31.29661923130938, 13540.2548],
    //     "rotation":[0, -90, -90],
    //     "time": 0
    // }, {
    //     "location": [120.7270745628166, 31.30468757881873, 1721.6418],
    //     "rotation":[0, 66.7-90, -44.8-90],
    //     "time": 4
    // }, {
    //     "location": [120.71361073431018, 31.321577579360152, 613.1984],
    //     "rotation":[0, 66.7-90, -63.2-90],
    //     "time": 3
    // }, {
    //     "location": [120.70367191564264, 31.328057921960777, 238.4671],
    //     "rotation":[0, 69-90, -96-90+360],
    //     "direction":"left",
    //     "time": 3
    // }, {
    //     "location": [120.6864684177242, 31.32547622123822, 238.4736],
    //     "rotation":[0, 69-90, -96-90+360],
    //     "time": 5
    // }];


    // 到达点位时触发的函数
    let intervalFunc = function (index) {
        // mapmostUE.pauseMapRoam()
        // setTimeout(function (){mapmostUE.continueMapRoam()},300)
        // console.log(index)
    }

    // 开始漫游
    mapmostUE.startMapRoam(locations, intervalFunc);
})

// 暂停漫游
$("#pauseMapRoam").click(function () {
    mapmostUE.pauseMapRoam()
})

// 继续漫游
$("#continueMapRoam").click(function () {
    mapmostUE.continueMapRoam()
})

// 停止漫游
$("#stopMapRoam").click(function () {
    mapmostUE.stopMapRoam()
})
