// js调用UE自定义模块方法
$("#jsCallUE").click(function () {
    console.log('jsCallUE')
    let options = {
        "functionName": "print",
        "params": {
            "message": "Hello UE"
        }
    }
    mapmostUE.customFunction(options);
})

// js调用UE自定义模块方法且附回调
$("#jsCallUEWithCB").click(function () {
    console.log('jsCallUEWithCB')
    let options = {
        "functionName": "printWithCallback",
        "params": {
            "js2UE": "Hello UE"
        }
    }
    mapmostUE.customFunctionWithCallback(options, function (res) {
        alert(res)
    });
})

// 切换白天
$("#goodMorning").click(function () {
    let options = {
        "functionName": "goodMorning",
        "params": {}
    }
    mapmostUE.customFunction(options);
})

// 切换黑夜
$("#goodNight").click(function () {
    let options = {
        "functionName": "goodNight",
        "params": {}
    }
    mapmostUE.customFunction(options);
})


//抬升负一层
$("#LiftB1").click(function () {
    let options = {
        "functionName": "FloorLift",
        "params": {
            "buildingName": "Station",
            "floorIndex": -1
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74404843296949, 31.336627710197384, 112.20214479630758],
        "rotation": [0,-34.30305480957031,-128.84765625],
        "time":1
    });
})

//抬升负二层
$("#LiftB2").click(function () {
    let options = {
        "functionName": "FloorLift",
        "params": {
            "buildingName": "Station",
            "floorIndex": -2
        }
    }
    mapmostUE.customFunction(options);
    mapmostUE.flyTo({
        "location":[120.74367087719709, 31.336558215785985, 130.62407016963746],
        "rotation": [0,-41.003055572509766,-116.54766082763672],
        "time":1
    });
})

//还原楼层抬升
$("ReverseLift").click(function (){
    let options = {
        "functionName": "ReverseLiftBuilding",
        "params": {
            "buildingName": "Station"
        }
    }
})

$("#addAnimationPath").click(function () {
    let data = {
        "ID": "",
        "Name": "",
        "MeshRefPath": "",
        "KeyPoints": [
            [120.675462, 31.318861],
            [120.673454, 31.31842]
        ]
    }
    mapmostUE.customFunction(data);
})

$("#removeAnimationPath").click(function () {
    mapmostUE.customFunction("id");
})