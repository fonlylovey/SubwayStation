// 热力图

// 添加热力图 TODO  改面板参数 ，细化不够
$("#addHeatmap").click(function () {
    mapmostUE.flyTo({
        "location": [120.71168518066406, 31.316417694091797, 1004.26513671875],
        "rotation":[0, -41.84598922729492, -72.15091705322266],
        "time": 2
    });


    let url = "http://192.168.34.213:8888/SIPSD/heatmap/sip_random_pts500.geojson";
    fetch(url).then(res => res.json()).then(response => {


        mapmostUE.addHeatmap(response, {
            range: [0, 600],
            radius: 120,
            height: 3600.0,
            opacity:0.85,
            positionHeight:16,
            resolution:{
                width:512,
                height:512
            }
        });

    });
})

// 移除热力图
$("#removeHeatmap").click(function () {
    mapmostUE.removeHeatmap();
})

// 添加道路热力图
$("#addRoadHeatmap").click(function () {
    
    let url = "http://192.168.34.213:8888/SIP3D/road_link_20221121.geojson";

    fetch(url).then(res => res.json()).then(response => {
        
        mapmostUE.addRoadHeatmap('roadHeatmap1', response)

    });
})

// 移除道路热力图
$("#removeRoadHeatmap").click(function () {
    mapmostUE.removeRoadHeatmap('roadHeatmap1')
})

// 更新道路热力图
$("#updateRoadHeatmap").click(function () {

    let url = "http://192.168.34.213:8888/SIP3D/road_heatmap_update.json";

    fetch(url).then(res => res.json()).then(response => {

        mapmostUE.updateRoadHeatmap('roadHeatmap1', response)

    });
})
