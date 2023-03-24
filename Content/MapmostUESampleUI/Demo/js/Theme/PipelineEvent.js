// 管线专题
// 添加JS管段管点
$("#addJSPipeline").click(function () {
    mapmostUE.addPipeline("11111","JS_LINE","http://192.168.34.213:8888/SIP3D/pipeline_3dtiles/JS_LINE/tileset.json");
})

// 删除JS管段管点
$("#removeJSPipeline").click(function () {
    mapmostUE.removePipeline("11111");
})

// 添加管线点选事件监听
$("#setOnPipelineClickListener").click(function () {
        mapmostUE.setOnPipelineClickListener(function (val) {
            let {location, type} = val;

            let url = "http://192.168.34.213:9000/SIPPipe/SIPPipe/getPipeLineInfo?lng=" + location[0] + "&lat=" + location[1] + "&height=" + location[2] + "&type=" + type;

            fetch(url).then(res => res.json()).then(response => {
                console.log(response)

                for (let i = 0; i < response.data.length; i++) {

                    // UE仅做高亮生成，不做信息展示
                    mapmostUE.highlightPipeline(response.data[i]);
                }

            });

        });
})

// 移除管线点选事件监听
$("#removeOnPipelineClickListener").click(function () {
    mapmostUE.removeOnPipelineClickListener();
})

// // 高亮管线
// $("#highlightPipeline").click(function () {
//     mapmostUE.highlightPipeline(data);
// })
//
// // 清除所有管线高亮
// $("#removeHighlightedPipeline").click(function () {
//     mapmostUE.removeHighlightedPipeline();
// })


// 取消高亮管线
$("#unhighlightPipeline").click(function () {
    mapmostUE.unhighlightPipeline();
})

// 显示三维管线图层
$("#showPipelineLayer").click(function () {
    mapmostUE.setPipelineLayerVisibility('js',true);
})

// 隐藏三维管线图层
$("#hidePipelineLayer").click(function () {
    mapmostUE.setPipelineLayerVisibility('js',false);
})
