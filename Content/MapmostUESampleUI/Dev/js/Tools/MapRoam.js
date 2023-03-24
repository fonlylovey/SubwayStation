// 开始漫游
$("#startMapRoam").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "MapRoam",
        "method": "startMapRoam",
        "data": {
            "mapRoamData": [{
                "location": [120.691847535655484, 31.314123311271246, 260.934668],
                "rotation":[0, -19.620751, -151.970169], // roll pitch yaw
                "time": 0
            }, {

                "location": [120.689458649493886, 31.318705595414261, 180.934668],
                "rotation":[0, -15.620751, -151.970169],
                "time": 3
            }, {
                "location": [120.683779410694655, 31.320630858362506, 130.934668],
                "rotation":[0, -13.0, -178.970169],
                "time": 5
            }]
        }
    })
})

// 暂停漫游
$("#pauseMapRoam").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "MapRoam",
        "method": "pauseMapRoam",
        "data": {

        }
    })
})

// 继续漫游
$("#continueMapRoam").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "MapRoam",
        "method": "continueMapRoam",
        "data": {

        }
    })
})

// 结束漫游
$("#stopMapRoam").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "MapRoam",
        "method": "stopMapRoam",
        "data": {

        }
    })
})