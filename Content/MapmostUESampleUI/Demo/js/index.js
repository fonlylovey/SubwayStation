$(function () {

    // 根据config的内容，构建button

    menu.forEach(key => {
        let btns = '';
        let btnGroupConfigs = config[key];


        // if(key === "Pipeline"){
        //     const dict = {
        //         "DQ":"氮气",
        //         "WS":"污水",
        //         "YS":"雨水",
        //         "ZQ":"蒸汽",
        //         "RQ":"燃气",
        //         "GD":"供电",
        //         "LD":"路灯",
        //         "JS":"给水",
        //         "DS":"有线电视",
        //         "DX":"电信"
        //     }
        //
        //     for(let i in dict){
        //         const type = dict[i];
        //         btns += `<button id='show${i}'>开${type}管线</button>`
        //         btns += `<button id='hide${i}'>关${type}管线</button>`
        //         btns += `<button id='show${i}Point'>开${type}管点</button>`
        //         btns += `<button id='hide${i}Point'>关${type}管点</button>`
        //         btns += `<br/>`
        //     }
        // }else{
        for (let theme in btnGroupConfigs) {
            let btnConfigs = btnGroupConfigs[theme];

            btns += `<div class='subClass'>${dictionary[theme]}</div>`
            for (let btn in btnConfigs) {
                // 是否是空行
                if (btnConfigs[btn] === "br") {
                    btns += `<br/>`
                } else {
                    const btnName = btnConfigs[btn];
                    if(btn.indexOf('_hide') >-1){
                        btns += `<button id='${btn}' class="btnHide">${btnName}</button>`
                    } else if (btn.indexOf('_input') > -1){
                        btns += `<input id='${btn}' type="text" value="金融"></input>`
                        btns += `<button id='queryModel'>查询</button><button id='cleanResults'>重置</button><br>`
                        btns +=`<div id='queryResults'></div>`
                    }
                    else{
                        btns += `<button id='${btn}'>${btnName}</button>`
                    }

                }
            }
        }
        // }

        // 构建每个专题的内容
        $(".wrapper").append(`<div class="menu">
        <div class="title">
            <h4>${dictionary[key]}</h4>
            <span>+</span>
        </div>
        <div class="child_ul">
            ${btns}
        </div>
    </div>`)
    })


    // 点击事件
    $(".title").on("click", function () {
        var next = $(this).parent().children(".child_ul");
        var icon = $(this).children("span");
        next.slideToggle(200);
        if (icon.html() === "+") {
            icon.html("-");
        } else {
            icon.html("+");
        }
        // $('.child_ul').not(next).slideUp('fast');//不是当前点击的内容全部向上收起
        // $('.menu>.title').children("span").not(icon).html("+");

        //阻止第二层的事件向第一层冒泡:
        // $("ul.menu>li > ul li").click(function(event){event.stopPropagation()});
        return false;
    })

    // 添加button的交互
    $('body').append("<script language=javascript src='js/data/road.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/Camera.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/Layer.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerPOI.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerLine.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerModel.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerHeatmap.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerMarker.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerFill.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LayerFillExtrusion.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SAVideoFusion.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SAMeasure.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SAClip.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SAViewshed.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SightLineAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/SkyLineAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/LimitHeightAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/Tools.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/ToolsMapRoam.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/PipelineEvent.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/IQuery.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/PipelineAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/Theme/CustomFuntion.js'></script>");

    //开始增加
    mapmostUE.init();
    // mapmostUE.removeLoading();

    // 显示版本号
    mapmostUE.getVersionName(function (version) {

        $("body").append(`<div class="footer">
       
            ${version}
   
    </div>`)
    })

})
