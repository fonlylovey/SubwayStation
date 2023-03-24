// 添加面
$("#addPolyGon").click(function () {

    function addPolyGon(geoJson) {

        let coordArr = geoJson.features[0].geometry.coordinates[0];

        let coords = [];
        let holeIds = [];
        let count = 0;

        for (let i = 0; i < coordArr.length; i++) {

            if (i !== 0) { // 洞
                holeIds.push(count)
            }

            let cs = coordArr[i];
            for (let j = 0; j < cs.length; j++) {
                coords.push(cs[j]);
                count++
            }
        }

        let coordinates = coords.map(item => {
            return {
                "lng": item[0],
                "lat": item[1]
            }
        })

        let holeIndices = holeIds.map(item => {
            return {
                "index": item
            }
        })

        // console.log(coordinates);
        // console.log(holeIndices);

        ue5("Layer", {
            "module": "Layer",
            "subModule": "Fill",
            "method": "addPolyGon",
            "data": {
                "id": "abcdef",
                "color": "#291fba",
                "height": 2,
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    // let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu_dong.geojson"; // 金鸡湖 6100个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addPolyGon(response);

    });
})

// 删除面
$("#removePolygon").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Fill",
        "method": "removePolyGon",
        "data": {
            "id": "abcdef"
        }
    })
})

// 更新面
$("#updatePolygon").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Fill",
        "method": "updatePolyGon",
        "data": {
            "id": "abcdef",
            "color":"#00ff00"
        }
    })
})