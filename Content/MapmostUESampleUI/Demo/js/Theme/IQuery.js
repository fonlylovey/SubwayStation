// 模型属性互查

let DFZMHighlight = false;

// 进入三维对象查属性
$('#enterModelQuery').click(function(){
    mapmostUE.setOnMousePickListener(function (response){
        console.log('response.modelName == ' + response.modelName);
        if (response.modelName === 'DFZM-01_Baked_toUE_DFZM-01_Baked'){
            mapmostUE.highlightModel('DFZM-01_Baked_toUE_DFZM-01_Baked');
            // 根据点击的对象名称查询属性mock数据
            // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelId=" + val.modelName;
            // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelName=eastdoor";
            // fetch(url).then(res => res.json()).then(response => {
            //     console.log(response.data.url)
            //     mapmostUE.addMarker("markerEastdoor",{
            //         "type": "propertyList",
            //         "location": [120.675362,31.318861,268.177277],
            //         "enableAutoFlyTo": true,
            //         "propertyData":response.data.propertyData
            //     });
            //     DFZMHighlight = true;
            // });
            mapmostUE.addMarker("markerEastdoor",{
                "type": "propertyList",
                "location": [120.675362,31.318861,268.177277],
                "enableAutoFlyTo": true,
                "propertyData":[
                    {
                        "displayName": "名称",
                        "value": "东方之门"
                    },
                    {
                        "displayName": "高度",
                        "value": "301.8米"
                    },
                    {
                        "displayName": "位置",
                        "value": "星港街199号"
                    },
                    {
                        "displayName": "占地面积",
                        "value": "24319m²"
                    },
                    {
                        "displayName": "建筑面积",
                        "value": "460000m²"
                    }
                ]
            });
            DFZMHighlight = true;
        }
    });
})

// 退出三维对象查属性
$('#quitModelQuery').click(function(){
    if (DFZMHighlight){
        mapmostUE.unhighlightModel('DFZM-01_Baked_toUE_DFZM-01_Baked');
        mapmostUE.removeMarker("markerEastdoor");
        DFZMHighlight = false;
    }
    mapmostUE.removeOnMousePickListener();
})

// 根据属性查询到的结果
var results = [];

// 根据属性查询对象
$('#queryModel').click(function(event){

    cleanQueryResults();
    
    var key = $('#queryModel_input').val();
    // let url = "https://yapi.dpark.com.cn/mock/145/queryModelsByInfo?industry=" + key;
    // fetch(url).then(res => res.json()).then(response => {
    //    
    //     if (!response.data.results) {
    //         alert('没有查询到结果')
    //         return
    //     }
    //
    //     document.getElementById("queryResults").innerHTML = "<div class='subClass'>查询结果:</div>";
    //     for (var i=0; i<response.data.results.length;i++){
    //         let btnDom = document.createElement('button');
    //         btnDom.id = response.data.results[i].id;
    //        $(btnDom).click(function(event){
    //             if(event.target == this)
    //             {
    //                 showModelDetail(this.id)
    //             }
    //            event.stopPropagation();
    //         })
    //         btnDom.innerHTML = response.data.results[i].name;
    //        
    //         document.getElementById("queryResults").appendChild(btnDom);
    //         results[i] = response.data.results[i].id;
    //     }
    // });

    if ( key !== '金融') {
        // alert('没有查询到结果')
        var notyf = new Notyf({
            position:{
                x:'center',
                y:'center'
            }
        });
        notyf.error('没有查询到结果')
        return
    }
    
    let results = [
        {
            "id": "02_1_03_export_toUE2",
            "name": "太平洋保险"
        },
        {
            "id": "02_1_02_export_toUE_5",
            "name": "东吴证券"
        },
        {
            "id": "02_2_8_export_toUE_120",
            "name": "交通银行"
        }
    ]

    document.getElementById("queryResults").innerHTML = "<div class='subClass'>查询结果:</div>";
    for (var i=0; i<results.length;i++){
        let btnDom = document.createElement('button');
        btnDom.id = results[i].id;
        $(btnDom).click(function(event){
            if(event.target == this)
            {
                showModelDetail(this.id)
            }
            event.stopPropagation();
        })
        btnDom.innerHTML = results[i].name;

        document.getElementById("queryResults").appendChild(btnDom);
        results[i] = results[i].id;
    }
    
    
})

// 根据属性查询对象
$('#cleanResults').click(function(){
    cleanQueryResults();
    $('#queryModel_input').val('金融');
})

var highlightingModelID = "";

function showModelDetail(val) {
    
    if (highlightingModelID === ""){
        highlightingModelID = val;
    } else {
        // 取消高亮之前的对象
        mapmostUE.unhighlightModel(highlightingModelID);
        mapmostUE.removeMarker(highlightingModelID);
        highlightingModelID = val;
    }

    // 高亮该模型
    mapmostUE.highlightModel(highlightingModelID);
    // 根据点击的对象名称查询属性mock数据
    // let url = "https://yapi.dpark.com.cn/mock/145/getModelInfo?modelName=" + highlightingModelID;
    // fetch(url).then(res => res.json()).then(response => {
    //     // 添加信息面板
    //     mapmostUE.addMarker(highlightingModelID,{
    //         "type": "propertyList",
    //         "location": response.data.location,
    //         "enableAutoFlyTo": true,
    //         "propertyData":response.data.propertyData
    //     });
    //
    //     mapmostUE.flyTo({
    //         "location": [response.data.location[0] + 0.0008,response.data.location[1] - 0.0006,response.data.location[2] + 80],
    //         "rotation": [0, -44, -145],
    //         "time": 2
    //     });
    //
    // });
    

    if (highlightingModelID === '02_1_03_export_toUE2'){
        // 添加信息面板
        mapmostUE.addMarker(highlightingModelID,{
            "type": "propertyList",
            "location": [
                120.66921997070312,
                31.31937599182129,
                74.07554626464844
            ],
            "enableAutoFlyTo": true,
            "propertyData":[
                {
                    "displayName": "名称",
                    "value": "太平洋保险"
                },
                {
                    "displayName": "位置",
                    "value": "星海街198号"
                },
                {
                    "displayName": "所属行业",
                    "value": "金融"
                },
                {
                    "displayName": "建筑面积",
                    "value": "23676m²"
                }
            ]
        });

        mapmostUE.flyTo({
            "location": [120.66921997070312 + 0.0008,31.31937599182129 - 0.0006,74.07554626464844 + 80],
            "rotation": [0, -44, -145],
            "time": 2
        });
    }

    if (highlightingModelID === '02_1_02_export_toUE_5'){
        // 添加信息面板
        mapmostUE.addMarker(highlightingModelID,{
            "type": "propertyList",
            "location": [
                120.67066192626953,
                31.31962776184082,
                103.3421401977539
            ],
            "enableAutoFlyTo": true,
            "propertyData":[
                {
                    "displayName": "名称",
                    "value": "东吴证券"
                },
                {
                    "displayName": "位置",
                    "value": "星海街208号"
                },
                {
                    "displayName": "所属行业",
                    "value": "金融"
                },
                {
                    "displayName": "建筑面积",
                    "value": "43436m²"
                }
            ]
        });

        mapmostUE.flyTo({
            "location": [120.67066192626953 + 0.0008,31.31962776184082 - 0.0006,103.3421401977539 + 80],
            "rotation": [0, -44, -145],
            "time": 2
        });
    }

    if (highlightingModelID === '02_2_8_export_toUE_120'){
        // 添加信息面板
        mapmostUE.addMarker(highlightingModelID,{
            "type": "propertyList",
            "location": [
                120.67153930664062,
                31.316564559936523,
                105.3322448730468
            ],
            "enableAutoFlyTo": true,
            "propertyData":[
                {
                    "displayName": "名称",
                    "value": "交通银行"
                },
                {
                    "displayName": "位置",
                    "value": "星海街88号"
                },
                {
                    "displayName": "所属行业",
                    "value": "金融"
                },
                {
                    "displayName": "建筑面积",
                    "value": "36852m²"
                }
            ]
        });

        mapmostUE.flyTo({
            "location": [120.67153930664062 + 0.0008,31.316564559936523 - 0.0006,105.3322448730468 + 80],
            "rotation": [0, -44, -145],
            "time": 2
        });
    }
    
}

function cleanQueryResults() {
    // 清空页面元素
    $("#queryResults").empty();
    // 清除查询结果
    results = [];
    // 清除高亮和marker
    mapmostUE.unhighlightModel(highlightingModelID);
    mapmostUE.removeMarker(highlightingModelID);
}

