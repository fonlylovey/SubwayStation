// 相机操作
// 停止地图晃动
$("#stopIdle").click(function () {
    mapmostUE.allowIdle(false)
})

// 开启地图晃动
$("#enableIdle").click(function () {
    mapmostUE.allowIdle(true)
})


// 限制地图操作
$("#frozenMap").click(function () {
    let options = {
        "isFrozen":true
    }
    mapmostUE.frozenMap(options)
})

// 限制地图平移操作
$("#frozenMapPan").click(function () {
    let options = {
        "isFrozen": true, // 必填参数，当为true且其它参数不填时，冻结所有地图操作
        "panFrozen": true, // 选填参数，当为true时，限制平移操作
    }
    mapmostUE.frozenMap(options)
})

// 限制地图旋转操作
$("#frozenMapRotate").click(function () {
    let options = {
        "isFrozen": true, // 必填参数，当为true且其它参数不填时，冻结所有地图操作
        "rotationFrozen": true, // 选填参数，当为true时，限制（水平）旋转操作
    }
    mapmostUE.frozenMap(options)
})

// 限制地图俯仰操作
$("#frozenMapPitch").click(function () {
    let options = {
        "isFrozen": true, // 必填参数，当为true且其它参数不填时，冻结所有地图操作
        "pitchFrozen": true, // 选填参数，当为true时，限制俯仰操作
    }
    mapmostUE.frozenMap(options)
})

// 限制地图缩放操作
$("#frozenMapZoom").click(function () {
    let options = {
        "isFrozen": true, // 必填参数，当为true且其它参数不填时，冻结所有地图操作
        "zoomFrozen": true // 选填参数，当为true时，限制缩放操作
    }
    mapmostUE.frozenMap(options)
})



// 开放地图操作
$("#enableMap").click(function () {
    mapmostUE.frozenMap(false)
})



// 获取相机参数
$("#getCameraParameters").click(function () {
    mapmostUE.getCameraParameters(function(response){
        let {location, rotation,fov} = response;
        console.log(response)
        // alert(`cameraLocation: ${location}\n cameraRotation: ${rotation} `)
        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.success('cameraLocation:\n' 
            + response.location[0] + '\n'
            + response.location[1] + '\n'
            + response.location[2] + '\n'
            + "cameraRocation:\n"
            + response.rotation[0] + '\n'
            + response.rotation[1] + '\n'
            + response.rotation[2] + '\n'
            + "fov:\n"
            + response.fov)
    });
})


// 无人机模式
$("#setDroneMode").click(function () {
    mapmostUE.setInteractionMode("Drone");
})


// 默认模式
$("#setDefaultMode").click(function () {
    mapmostUE.setInteractionMode("Explorer");
})

// 不允许地图缓动
$("#notDecelerationStop").click(function () {
    mapmostUE.allowDecelerationStop(false)
})

// 开启地图缓动
$("#allowDecelerationStop").click(function () {
    mapmostUE.allowDecelerationStop(true)
})

// 飞行定位
$('#flyTo').click(function(){

    // callback
    let fn = function (){
        // alert('文化博览中心到了！')
        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.success('文化博览中心到了')
    }

    // using flyTo options
    mapmostUE.flyTo({
        "location":[120.701561,31.321199,173.29715],
        "rotation":[0,-15.000031,-70.780457],
        "time":2
    },fn);

})
//飞行到指定位置
$('#flyToTarget').click(function(){

    let fn = function (){
        // alert('已飞行至targetModel模型！')
        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.success('已飞行至targetModel模型')
    }
    
    // using flyTo options
    mapmostUE.flyToTarget({
        "targetName": "targetModel",
        "rotation": [0,180,40],
        "distance": 20,
        "time": 5
    }, fn);

})
// 飞行中断
$('#interruptFlyTo').click(function(){
    mapmostUE.interruptFlyTo();
})


// 前进
$('#moveForward').click(function(){
    mapmostUE.moveForward(200);
})

// 后退
$('#moveBack').click(function(){
    mapmostUE.moveForward(-200);
})


// 向右移动
$('#moveRight').click(function(){
    mapmostUE.moveRight(200);
})

// 向左移动
$('#moveLeft').click(function(){
    mapmostUE.moveRight(-200);
})

// 镜头拉近
$('#moveNear').click(function(){
    mapmostUE.zoom(200);
})

// 镜头拉远
$('#moveFar').click(function(){
    mapmostUE.zoom(-200);
})


// 镜头向右转
$('#turnRight').click(function(){
    mapmostUE.turnRight(30);
})

// 镜头向左转
$('#turnLeft').click(function(){
    mapmostUE.turnRight(-30);
})

// 抬头，镜头向下转
$('#turnUp').click(function(){
    mapmostUE.turnUp(-15);
})

// 低头，镜头向上转
$('#turnDown').click(function(){
    mapmostUE.turnUp(15);
})

// 开启地图拾取
$('#openMousePick').click(function(){
    mapmostUE.setOnMousePickListener(function (response){
        console.log(response);
        let {modelName, hitLocation} = response;
        // alert(`modelName: ${modelName}\n hitLocation: ${hitLocation} `);

        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.success('modelName:\n'
            + response.modelName + '\n'
            + "cameraRocation:\n"
            + response.hitLocation[0] + '\n'
            + response.hitLocation[1] + '\n'
            + response.hitLocation[2] + '\n')
        
        // 根据点击的对象名称查询属性mock数据
        // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelId=" + val.modelName;
        // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelId=123";
        // fetch(url).then(res => res.json()).then(response => {
        //     console.log(response.data)
        // });
        
    });
})

// 关闭地图拾取
$('#closeMousePick').click(function(){
    mapmostUE.removeOnMousePickListener();
})

// 开启地图变化状态监听
$('#setOnMapStatusChangeListener').click(function(){

    mapmostUE.setOnMapStatusChangeListener(function (response){
        console.log(response);
        // let {centerLocation, cameraLocation,cameraRotation,distance} = response;
        // alert(`centerLocation: ${centerLocation}\n cameraLocation: ${cameraLocation}\n  cameraRotation: ${cameraRotation}\n distance: ${distance}\n`)
    });
})

// 关闭地图变化状态监听
$('#removeOnMapStateChangeListener').click(function(){
    mapmostUE.removeOnMapStateChangeListener();
})

