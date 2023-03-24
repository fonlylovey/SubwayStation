// 设置管线点击监听
$("#setOnPipeClickListener").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Event",
        "method": "setOnPipeClickListener",
        "data": {

        }
    })

    ue.interface.onPipelineClickListener = function (val) {
        console.log(val)
        getPipeLineInfo(val.location[0], val.location[1], val.location[2], val.type)
        // getPipeLineInfoV2(val.location[0], val.location[1], val.location[2], val.type)
    };

})

// 移除管线点击监听
$("#removePipeClickListener").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "Event",
        "method": "removePipeClickListener",
        "data": {

        }
    })

    ue.interface.onPipelineClickListener = function (val) {

    };
})

$("#setNewHighlight").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "setNewHighlight",
        "data": {

        }
    })
})

$("#setOldHighlight").click(function () {
    ue5("PipeLine", {
        "module": "PipeLine",
        "subModule": "VisualEffect",
        "method": "setOldHighlight",
        "data": {

        }
    })
})