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

    $('body').append("<script language=javascript src='js/Camera/Control.js'><script>");
    $('body').append("<script language=javascript src='js/Camera/Event.js'></script>");
    $('body').append("<script language=javascript src='js/Camera/Interaction.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/3DTiles.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Fill.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/FillExtrusion.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Heatmap.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Line.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Model.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/POI.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Point.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/Text.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/TMS.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/WMS.js'></script>");
    $('body').append("<script language=javascript src='js/Layer/WMTS.js'></script>");
    $('body').append("<script language=javascript src='js/Pipeline/Analysis.js'></script>");
    $('body').append("<script language=javascript src='js/Pipeline/Event.js'></script>");
    $('body').append("<script language=javascript src='js/Pipeline/VisualEffect.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/Clip.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/LimitHeightAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/Measure.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/SightLineAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/SkyLineAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/VideoFusion.js'></script>");
    $('body').append("<script language=javascript src='js/SpatialAnalysis/ViewshedAnalysis.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/BuildingGrowth.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/Compass.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/MapRoam.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/Others.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/PlanCompare.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/TimeSlider.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/SceneController.js'></script>");
    $('body').append("<script language=javascript src='js/Tools/VisualEffect.js'></script>");
    

})
