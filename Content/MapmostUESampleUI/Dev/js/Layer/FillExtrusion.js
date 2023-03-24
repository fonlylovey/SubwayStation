// 添加挤出面面
$("#addFencing").click(function () {

    function addFencing(geoJson) {

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
            "subModule": "FillExtrusion",
            "method": "addFencing",
            "data": {
                "id": "abcdef",
                "height": 200,
                "extrudeHeight": 200,
                "extrudeColor":"#291fba",
                "groundColor": "#66b4cc",
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    //let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addFencing(response);

    });
})

// 删除挤出面
$("#removeFencing").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "removeFencing",
        "data": {
            "id": "abcdef"
        }
    })
})

// 更新挤出面
$("#updateFencing").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "updateFencing",
        "data": {
            "id":"abcdef",
            "extrudeColor": "#46ff09",
            "extrudeHeight": 100,
            "groundColor": "#ff0909"
        }
    })
})

// 添加挤出面面2
$("#addFencing2").click(function () {

    function addFencing(geoJson) {

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
            "subModule": "FillExtrusion",
            "method": "addFencing",
            "data": {
                "id": "qwer",
                "height": 200,
                "extrudeHeight": 300,
                "extrudeColor":"#8c66ff",
                "groundColor": "#66ffff",
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addFencing(response);

    });
})

// 删除挤出面2
$("#removeFencing2").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "removeFencing",
        "data": {
            "id": "qwer"
        }
    })
})

// 更新挤出面2
$("#updateFencing2").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "updateFencing",
        "data": {
            "id":"qwer",
            "extrudeColor": "#ffff66",
            "extrudeHeight": 200,
            "groundColor": "#ff66b3"
        }
    })
})

// 添加透明渐变地理围栏
$("#addFencingGradientEffect").click(function () {

    function addFencing(geoJson) {

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
            "subModule": "FillExtrusion",
            "method": "addFencingGradientEffect",
            "data": {
                "id": "abcdef",
                "height": 0,
                "extrudeHeight": 200,
                "extrudeColor":"#291fba",
                "groundColor": "#66b4cc",
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    //let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addFencing(response);

    });
})

// 删除透明渐变地理围栏
$("#removeFencingGradientEffect").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "removeFencingGradientEffect",
        "data": {
            "id": "abcdef"
        }
    })
})

// 添加横向移动地理围栏
$("#addFencingMovingLEffect").click(function () {

    function addFencing(geoJson) {

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
            "subModule": "FillExtrusion",
            "method": "addFencingMovingLEffect",
            "data": {
                "id": "abcdef",
                "height": 0,
                "extrudeHeight": 200,
                "extrudeColor":"#291fba",
                "groundColor": "#66b4cc",
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    //let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addFencing(response);

    });
})

// 删除横向移动地理围栏
$("#removeFencingMovingLEffect").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "removeFencingMovingLEffect",
        "data": {
            "id": "abcdef"
        }
    })
})

// 添加纵向移动渐变地理围栏
$("#addFencingMovingVEffect").click(function () {

    function addFencing(geoJson) {

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
            "subModule": "FillExtrusion",
            "method": "addFencingMovingVEffect",
            "data": {
                "id": "abcdef",
                "height": 0,
                "extrudeHeight": 200,
                "extrudeColor":"#291fba",
                "groundColor": "#66b4cc",
                "coordinates": coordinates,
                "holeIndices": holeIndices
            }
        })
    }

    //let url = "http://192.168.34.213:8888/SIPSD/geojson/hole.geojson"; // 三个洞
    let url = "http://192.168.34.213:8888/SIPSD/geojson/jinjihu.geojson"; // 金鸡湖 6100个点
    //let url = "http://192.168.34.213:8888/SIPSD/geojson/suzhou.geojson"; // 苏州 2450个点
    // let url = "http://192.168.34.213:8888/SIPSD/geojson/jiangsu.geojson"; // 江苏 20915个点
    fetch(url).then(res => res.json()).then(response => {

        addFencing(response);

    });
})

// 删除纵向移动地理围栏
$("#removeFencingMovingVEffect").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "FillExtrusion",
        "method": "removeFencingMovingVEffect",
        "data": {
            "id": "abcdef"
        }
    })
})