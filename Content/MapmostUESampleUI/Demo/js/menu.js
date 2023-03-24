const menu = [
    "Camera",
    "Layer",
    "SpatialAnalysis",
    "Tools",
    "PipeLine",
    // "IQuery",
    "CustomFunction"
];


const dictionary = {
    "Camera": "相机操作",
    "Layer": "图层",
    "SpatialAnalysis": "空间分析",
    "Tools": "工具",
    "PipeLine": "管线",
    "Interaction": "交互",
    "Control": "控制",
    "Event": "事件",
    "MapSetting":"地图设置",
    "3DTiles": "3DTiles图层",
    "TMS": "TMS图层",
    "WMS": "WMS图层",
    "WMTS": "WMTS图层",
    "POI": "POI图层",
    "Heatmap": "热力图",
    "Point": "点图层",
    "Line": "线图层",
    "Text": "标注图层",
    "Model": "三维模型",
    "VideoFusion": "视频融合",
    "Measure": "量测工具",
    "Clip": "剖切工具",
    "ViewshedAnalysis": "视域分析",
    "SightLineAnalysis":"通视分析",
    "SkyLineAnalysis":"天际线分析",
    "LimitHeightAnalysis":"限高分析",
    "MapRoam": "漫游巡检",
    "TimeSlider": "24小时光照",
    "Compass": "指北针",
    "VisualEffect": "可视化效果",
    "Fill": "多边形",
    "FillExtrusion": "地理围栏",
    "ScreenSplit": "方案比选",
    "Others": "其他",
    // "IQuery":"接口组合调用示例",
    "BuildingGrowth":"建筑生长动画",
    "Minimap":"小地图",
    "Model-Properties":"对象查属性",
    "Properties-Model":"属性查对象",
    "PipelineAnalysis":"管线分析",
    "CustomFunction":"自定义模块方法示例",
    "jsCallUE":"直接调用",
    "jsCallUEWithCB":"调用附回调",
    "demo":"示例"

    // "POI": "POI图层",
    // "Heatmap": "热力图",
    // "Point": "点图层",
    // "PolyLine": "线图层",
    // "Text": "标注图层",
    // "Model": "三维模型",
    // "Video": "视频融合",
    // "Measure": "量测工具",
    // "Clip": "剖切工具",
    // "MapRoam": "漫游巡检",
    // "TimeSlider": "24小时光照",
    // "Compass": "指北针",
    // "PipelineAnalysis": "管线分析",
    //

}

const config = {
    "Camera": {
        "Interaction": {
            "stopIdle": "停止地图晃动",
            "enableIdle": "开启地图晃动",
            "frozenMap": "限制地图操作",
            "frozenMapPan": "限制地图平移操作",
            "frozenMapRotate": "限制地图旋转操作",
            "frozenMapPitch": "限制地图俯仰操作",
            "frozenMapZoom": "限制地图缩放操作",
            "enableMap": "开放地图操作",
            "getCameraParameters": "获取相机参数",
            "setDroneMode": "无人机模式",
            "setDefaultMode": "默认模式",
            "notDecelerationStop": "关闭地图缓动",
            "allowDecelerationStop": "开启地图缓动"
        },
        "Control": {
            "flyTo": "飞行定位",
            "flyToTarget":"飞行至指定目标",
            "interruptFlyTo": "中断飞行",
            "moveForward": "前进",
            "moveBack": "后退",
            "moveRight": "右移",
            "moveLeft": "左移",
            "moveNear": "放大",
            "moveFar": "缩小",
            "turnRight": "右转",
            "turnLeft": "左转",
            "turnUp": "抬头",
            "turnDown": "低头"
        },
        "Event": {
            "setOnMousePickListener": "开启地图拾取",
            "removeOnMousePickListener": "关闭地图拾取",
            "setOnMapStatusChangeListener": "开启相机参数监听",
            "removeOnMapStateChangeListener": "关闭相机参数监听",
        }
    },
    "Layer": {
        "MapSetting":{
            "setTMSHidden": "隐藏所有地图",
            "setTMSVisible": "显示所有地图",
            "setTMSAnd3DTilesOpacity": "设置所有地图和所有3dTiles透明",
            "restoreTMSAnd3DTilesOpacity": "复原所有地图和所有3dTiles不透明"
        },
        "3DTiles": {
            "flyTo3dTiles": "飞行到3dtiles",
            "add3DTilesLayer":"添加3DTiles图层",
            "remove3DTilesLayer":"删除3DTiles图层",
            "set3DTilesHidden": "设置3dTiles不可见",
            "set3DTilesVisible": "设置3dTiles可见"
        },
        "TMS": {
            "addTMSLayerYS": "添加雨水管线图层",
            "removeTMSLayerYS": "删除雨水管线图层",
            "addTMSLayerLD": "添加路灯管线图层",
            "removeTMSLayerLD": "删除路灯管线图层",
            "addTMSLayerGS": "添加给水管线图层",
            "removeTMSLayerGS": "删除给水管线图层",
        },
        "WMS": {
            "addWMS": "添加WMS图层（GeoServer）",
            "removeWMS": "删除WMS图层（GeoServer）",
            "addWMS2": "添加WMS图层（Arcgis）",
            "removeWMS2": "删除WMS图层（Arcgis）",
        },
        "WMTS": {
            // "addWMTSLayer_Tianditu_hide": "加载天地图图层",
            // "removeWMTSLayer_Tianditu_hide": "删除天地图",
            "addWMTSLayer_ArcgisService": "加载arcgis发出的WMTS图层服务",
            "removeWMTSLayer_ArcgisService": "删除arcgis发出的WMTS图层",
            "addWMTSLayer_GeoService": "加载GeoServer发出的WMTS图层服务",
            "removeWMTSLayer_GeoService": "删除GeoServer发出的WMTS图层",
            "addWMTSLayer_GeoServicePipeline": "加载GeoServer发出的WMTS图层服务(管线)",
            "removeWMTSLayer_GeoServicePipeline": "删除GeoServer发出的WMTS图层(管线)"
        },
        "POI": {
            "addPOI": "添加POI",
            "hidePOI": "隐藏POI",
            "showPOI": "显示POI",
            "updatePOIPosition": "更新POI",
            "hasLayer": "POI图层存在性判断",
            "showPOIPopup": "显示POI详情并定位",
            "hidePOIPopup": "隐藏POI的详情弹窗",
            "highlightPOI": "高亮POI",
            "unhighlightPOI": "清除POI高亮",
            "setOnPOIClickListener": "添加POI点击事件监听",
            "removeOnPOIClickListener": "移除POI点击事件监听",
            "setOnPOIExpandCollapseListener": "设置POI展开收缩监听",
            "removeOnPOIExpandCollapseListener": "移除POI展开收缩监听",
            "setDistanceOfPOIStatusChange": "改变POI信息展示的临界距离",
            "removePOI": "移除POI",
            "openPOIFadeOut":"打开POI渐隐效果",
            "closePOIFadeOut":"关闭POI渐隐效果",
            "setDistanceOfPOIFadeOutEffect":"设置POI渐隐透明度距离",
            "openPOIAvoidance":"开启POI避让",
            "closePOIAvoidance":"关闭POI避让"
        },
        "Heatmap": {
            "addHeatmap": "添加热力图",
            "removeHeatmap": "移除热力图",
            // "addRoadHeatmap_hide": "添加道路热力图",
            // "removeRoadHeatmap_hide": "移除道路热力图",
            // "updateRoadHeatmap_hide": "更新道路热力图",
        },
        "Point": {
            "addMarker1": "添加Marker1",  // addMarker
            "addMarker2": "添加Marker2",  // addMarker
            "addMarker3": "添加Marker3",  // addMarker
            "setMarkerHidden":"Marker1隐藏",
            "setMarkerVisible":"Marker1显示",
            "add": "br",
            "setOnMarkerClickListener": "设置Marker1点击事件监听",
            "removeOnMarkerClickListener": "移除Marker1点击事件监听",
            "remove": "br",
            "removeMarker1": "清除Marker1", // removeMarker
            "removeMarker2": "清除Marker2", // removeMarker
            "removeMarker3": "清除Marker3", // removeMarker
            "effect": "br",
            "addEffect": "添加点位扩散", // removeMarker
            "removeEffect": "移除点位扩散", // removeMarker
        },
        "Line": {
            "addPolyline": "添加多段线",
            "addDynamicPolyline": "添加动态多段线",
            "removePolyline": "移除多段线",
            "addFlyLine": "添加飞线",
            "removeFlyLine": "移除飞线"
        },
        "Fill": {
            "addPolygon": "添加面(MultiPolygon)",
            "updatePolygon": "更新面(MultiPolygon)",
            "removePolygon": "移除面(MultiPolygon)",
            "addPolygon2": "添加面(Polygon)",
            "updatePolygon2": "更新面(Polygon)",
            "removePolygon2": "移除面(Polygon)",
            "addPolygon3": "添加面(Polygon带洞)",
            "updatePolygon3": "更新面(Polygon带洞)",
            "removePolygon3": "移除面(Polygon带洞)"
        },
        "FillExtrusion": {
            "addFencing": "添加地理围栏(MultiPolygon)",
            "updateFencing": "更新地理围栏(MultiPolygon)",
            "removeFencing": "移除地理围栏(MultiPolygon)",
            "addFencing2": "添加地理围栏(Polygon)",
            "updateFencing2": "更新地理围栏(Polygon)",
            "removeFencing2": "移除地理围栏(Polygon)",
            "addFencing3": "添加地理围栏(Polygon带洞)",
            "updateFencing3": "更新地理围栏(Polygon带洞)",
            "removeFencing3": "移除地理围栏(Polygon带洞)"
            
        },
        "Text": {
            "addTexts": "增加标注",
            "removeTexts": "移除标注",
            "enableTextAvoidance": "开启注记避让",
            "disableTextAvoidance": "关闭注记避让",
        },
        "Model": {
            "addModel": "添加三维模型",
            "updateModel": "移动模型",
            "removeModel": "移除"
        }
    },
    "SpatialAnalysis": {
        "VideoFusion": {
            "addSingleVideoFusion": "视频融合",
            "removeSingleVideoFusion": "关闭视频融合",
            // "addMultipleVideoFusion": "多路视频融合",
            // "removeMultipleVideoFusion": "关闭多路视频融合",
        },
        "Measure": {
            "startMeasureDistanceTriangulation": "进入三角量测模式", //startMeasureV2
            "stopMeasureDistanceTriangulation": "退出三角量测模式",  //startMeasureV2
            "startMeasureAreaContinuation": "进入连续面积量测模式",
            "stopMeasureAreaContinuation": "退出连续面积量测模式",
            "startMeasureDistanceContinuation": "进入连续距离量测模式",
            "stopMeasureDistanceContinuation": "退出连续距离量测模式",
            "startMeasureAreaProjection": "进入投影面积量测模式",
            "stopMeasureAreaProjection": "退出投影面积量测模式",
        },
        "Clip": {
            "startClip": "进入剖切模式",
            "stopClip": "退出剖切模式",
            "addClipBox":"添加剖分体块",
            "removeClipBox":"删除剖分体块",
            "addClipAreaChangedListener": "添加体剖分包围区域点的回调",
            "removeClipAreaChangedListener": "移除体剖分包围区域点的回调"
        },
        "ViewshedAnalysis": {
            "startViewshedAnalysis": "进入视域分析模式",
            "stopViewshedAnalysis": "退出视域分析模式",
            "addViewshedAnalysis": "添加视域分析",
            "removeViewshedAnalysis": "删除视域分析"
        },
        "SightLineAnalysis": {
            "startSightLineAnalysis": "进入通视分析模式",
            "stopSightLineAnalysis": "退出通视分析模式"
        },
        "LimitHeightAnalysis": {
            "addLimitHeightAnalysis": "添加限高分析",
            "removeLimitHeightAnalysis": "删除限高分析",
            "startLimitHeightAnalysis": "进入限高分析模式",
            "stopLimitHeightAnalysis": "退出限高分析模式"
        }
    },
    "Tools": {
        "MapRoam": {
            "startMapRoam": "开始漫游",
            "pauseMapRoam": "暂停漫游",
            "continueMapRoam": "继续漫游",
            "stopMapRoam": "停止漫游",
        },
        // "TimeSlider": {
        //     "showTimeSlider": "显示24小时光照时间条",
        //     "hideTimeSlider": "关闭24小时光照时间条",
        //     "setTimeSliderLayout": "改变布局位置",
        // },
        "Compass": {
            "showCompass": "显示指北针",
            "setCompass": "设置指北针布局",
            "closeCompass": "隐藏指南针",
        },
        "VisualEffect": {
            // "changeTime":"设置场景环境时间",
            "highlightPartly": "局部高亮",
            "unhighlightPartly": "取消局部高亮"
            // "highlightModel": "高亮东方之门",
            // "unhighlightModel": "取消高亮东方之门",
            // "effectED1": "东方之门围栏1特效",
            // "removeEffectED1": "关闭东方之门围栏1特效",
            // "showVE": "东方之门区域2特效",
            // "hideVE": "关闭东方之门区域2特效",
            // "effect5G": "5G点位特效",
            // "removeEffect5G": "关闭5G点位特效",
            // "effectIFC1": "九龙仓围栏+描边",
            // "removeEffectIFC1": "关闭九龙仓围栏+描边",
            // "effectIFC2": "九龙仓区域扩散",
            // "removeEffectIFC2": "关闭九龙仓区域扩散",
            // "effectGF": "区域围栏组",
            // "removeEffectGF": "关闭区域围栏组",
            // "effectOlympic1": "奥体中心标记点",
            // "removeEffectOlympic1": "关闭奥体中心标记点",
            // "effectOlympic2": "奥体中心围栏",
            // "removeEffectOlympic2": "关闭奥体中心围栏",
            // "effectBuilding": "建筑扫光",
            // "removeEffectBuilding": "关闭建筑扫光",
            // "effectSV": "独墅湖区域+围栏",
            // "removeEffectSV": "关闭独墅湖区域+围栏",
            // "effectGL": "金鸡湖区域+围栏",
            // "removeEffectGL": "关闭金鸡湖区域+围栏",
            // "effectParticle": "空间粒子",
            // "removeEffectParticle": "关闭空间粒子",
            // "effectRoad1": "道路点扩散",
            // "removeEffectRoad1": "关闭道路点扩散",
            // "effectRoad2": "道路轨迹",
            // "removeEffectRoad2": "关闭道路轨迹",
        },
        "Others": {
            "quit":"退出应用",
            "screenshot":"截屏"
        }
    },
    "PipeLine": {
        "Event": {
            "setOnPipelineClickListener": "开启管线点选",
            "removeOnPipelineClickListener": "移除管线点选",
            // "removeSelectPipelineListener": "关闭管线点选",
        },
        "VisualEffect": {
            "unhighlightPipeline": "取消高亮管线",
            "showPipelineLayer": "显示三维管线图层",
            "hidePipelineLayer": "隐藏三维管线图层",
            "addJSPipeline":"加载js管线3dTiles",
            "removeJSPipeline":"删除js管线3dTiles"
        },
        "PipelineAnalysis": {
            "startDirectionAnalysis": "开启流向分析",
            "stopDirectionAnalysis": "关闭流向分析",
            "startConnectivityAnalysis": "开启连通性分析",
            "stopConnectivityAnalysis": "关闭连通性分析",
            "startCSectionAnalysis": "开启横截面分析",
            "stopCSectionAnalysis": "关闭横截面分析",
            "startLSectionAnalysis": "开启纵截面分析",
            "stopLSectionAnalysis": "关闭纵截面分析"
        }
    },
    // "IQuery":{
    //     "Model-Properties":{
    //         "enterModelQuery":"进入三维对象查属性",
    //         "quitModelQuery":"退出三维对象查属性"
    //     },
    //     "Properties-Model":{
    //         "queryModel_input":"金融"
    //     }
    // },
    "CustomFunction":{
        "jsCallUE":{
            "jsCallUE":"JS调用UE打印消息",
        },
        "jsCallUEWithCB":{
            "jsCallUEWithCB":"JS调用UE打印消息并回调给JS"
        },
        // "demo":{
        //     "goodMorning":"切换场景至白天",
        //     "goodNight":"切换场景至黑夜"
        // }
    }
}
