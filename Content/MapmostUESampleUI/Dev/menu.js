const menu = [
    "Camera",
    "Layer",
    "SpatialAnalysis",
    "Tools",
    "PipeLine"
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
    "SightLineAnalysis": "通视分析",
    "SkyLineAnalysis": "天际线分析",
    "LimitHeightAnalysis": "限高分析",
    "MapRoam": "漫游巡检",
    "TimeSlider": "24小时光照",
    "SceneController":"场景控制",
    "Compass": "指北针",
    "BuildingGrowth": "播放建筑动画",
    "VisualEffect": "可视化效果",
    "Fill": "多边形",
    "FillExtrusion": "地理围栏",
    "ScreenSplit": "方案比选",
    "Others": "其他",
    "IQuery":"接口组合调用示例",
    "Model-Properties":"对象查属性",
    "Properties-Model":"属性查对象",
    "PipelineAnalysis":"管线分析"

}

const config = {
    "Camera": {
        "Interaction": {
            "notAllowIdle": "停止地图晃动",
            "allowIdle": "开启地图晃动",
            "frozenMap": "限制地图操作",
            "notFrozenMap": "开放地图操作",
            "frozenPan": "禁止平移",
            "frozenRotate": "禁止旋转",
            "frozenPitch": "禁止俯仰",
            "frozenZoom": "禁止缩放",
            "getCameraParameters": "获取相机参数",
            "setInteractionModeDrone": "无人机模式",
            "setInteractionMode": "默认模式",
            "notAllowDecelerationStop": "关闭地图缓动",
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
            "turnDown": "低头",
            "fullMap": "全图",
            "focusMap": "地图聚焦到初始位置"
        },
        "Event": {
            "openMousePick": "开启地图拾取",
            "closeMousePick": "关闭地图拾取",
            "openMapStatusListen": "开启相机参数监听",
            "closeMapStatusListen": "关闭相机参数监听",
            "startQueryProperty": "开启三维对象查属性",
            "closeQueryProperty": "关闭三维对象查属性"
        }
    },
    "Layer": {
        "MapSetting":{
            "hideTMS": "隐藏所有地图",
            "showTMS": "显示所有地图",
            "set3DTilesOpacity": "设置所有地图和所有3dTiles透明",
            "recover3DTilesOpacity": "复原所有地图和所有3dTiles不透明"
        },
        "3DTiles": {
            // "moveUp3dTiles":"设置3dTiles高度偏移(上浮)",
            // "moveDown3dTiles":"设置3dTiles高度偏移(下沉)",
            "add3DTiles":"添加中央公园工地3DTiles",
            "remove3DTiles":"删除中央公园工地3DTiles",
            "set3DTilesOpacity": "透明",
            "recover3DTilesOpacity": "复原",
            "hide3DTiles": "设置3dTiles不可见",
            "show3DTiles": "设置3dTiles可见"
        },
        "TMS": {
            "addTMSLayer_ys": "添加雨水管线图层",
            "removeTMSLayer_ys": "删除雨水管线图层",
            "addTMSLayer_ld": "添加路灯管线图层",
            "removeTMSLayer_ld": "删除路灯管线图层",
            "addTMSLayer_js": "添加给水管线图层",
            "removeTMSLayer_js": "删除给水管线图层"
        },
        "WMS": {
            "addWMS": "添加WMS图层（GeoServer）",
            "removeWMS": "删除WMS图层（GeoServer）",
            "addWMS2": "添加WMS图层（Arcgis）",
            "removeWMS2": "删除WMS图层（Arcgis）",
        },
        "WMTS": {
            "addWMTSLayer_Tianditu": "加载天地图图层",
            "removeWMTSLayer_Tianditu": "删除天地图",
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
            "updatePOI": "更新POI",
            "hasLayer": "POI图层存在性判断",
            "showPOIContent": "显示POI详情并定位",
            "hidePOIContent": "隐藏POI的详情弹窗",
            "highlightPOI": "高亮POI",
            "unhighlight": "清除POI高亮",
            "setOnPOIClickListener": "添加POI点击事件监听",
            "removeOnPOIClickListener": "移除POI点击事件监听",
            "setOnPOIExpandCollapseListener": "设置POI展开收缩监听",
            "removeOnPOIExpandCollapseListener": "移除POI展开收缩监听",
            "ChangePOIInfoCriticalDistance": "改变POI信息展示的临界距离",
            "removePOI": "移除POI",
            "setDistanceOfPOIFadeOutEffect":"设置POI渐隐透明度距离",
            "openPOIAvoidance":"开启POI避让",
            "closePOIAvoidance":"关闭POI避让"
        },
        "Heatmap": {
            "addHeatmap": "添加热力图",
            "removeHeatmap": "移除热力图",
            "addRoadHeatmap": "添加道路热力图",
            "removeRoadHeatmap": "移除道路热力图",
            "updateRoadHeatmap":"更新道路热力图"
        },
        "Point": {
            "addMarker": "添加Marker1",  // addMarker
            "removeMarker": "删除Marker",  // addMarker
            "setMarkerHidden":"Marker1隐藏",
            "setMarkerVisible":"Marker1显示",
            "addMarkerClick": "设置Marker1点击事件监听",
            "removeMarkerClick": "移除Marker1点击事件监听",
            "addEffect": "添加点位扩散", // removeMarker
            "removeEffect": "移除点位扩散"// removeMarker
        },
        "Line": {
            "addPolyline": "添加多段线",
            "removePolyline": "移除多段线",
            "addFlyLine": "添加飞线",
            "removeFlyLine": "移除飞线"
        },
        "Fill": {
            "addPolyGon": "添加面",
            "updatePolygon": "更新面",
            "removePolygon": "移除面"
        },
        "FillExtrusion": {
            "addFencing": "添加1",
            "updateFencing": "更新1",
            "removeFencing": "删除1",
            "addFencing2": "添加2",
            "removeFencing2": "删除2",
            "updateFencing2": "更新2",
            "addFencingGradientEffect": "添加透明渐变地理围栏",
            "removeFencingGradientEffect": "删除透明渐变地理围栏",
            "addFencingMovingLEffect": "添加横向移动地理围栏",
            "removeFencingMovingLEffect": "删除横向移动地理围栏",
            "addFencingMovingVEffect": "添加纵向移动地理围栏",
            "removeFencingMovingVEffect": "删除纵向移动地理围栏"
        },
        "Text": {
            "addTexts": "增加标注",
            "removeTexts": "移除标注",
            "startAvoidance": "开启注记避让",
            "stopAvoidance": "关闭注记避让"
        },
        "Model": {
            "addModel": "添加三维模型",
            "updateModel": "移动模型",
            "removeModel": "移除"
        }
    },
    "SpatialAnalysis": {
        "VideoFusion": {
            "addVideoFusion": "单路视频融合",
            "removeVideoFusion": "关闭单路视频融合",
            "startChangeVideoFusionLocationRotation":"开启视频融合自定义参数",
            "stopChangeVideoFusionLocationRotation":"关闭视频融合自定义参数",
            "updateVideoFusion":"更新参数",
            "openVidoeoFusionFrustumVisibility":"打开椎体辅助线",
            "closeVidoeoFusionFrustumVisibility":"关闭椎体辅助线",
            "setOnVideoFusionParamChangeListener":"添加监听",
            "removeOnVideoFusionParamChangeListener":"移除监听",
            "addVideoFusion2": "单路视频融合2",
            "removeVideoFusion2": "关闭单路视频融合2",
            "startChangeVideoFusionLocationRotation2":"开启视频融合自定义参数2",
            "stopChangeVideoFusionLocationRotation2":"关闭视频融合自定义参数2",
            "updateVideoFusion2":"更新参数2",
            "openVidoeoFusionFrustumVisibility2":"打开椎体辅助线2",
            "closeVidoeoFusionFrustumVisibility2":"关闭椎体辅助线2",
            "setOnVideoFusionParamChangeListener2":"添加监听2",
            "removeOnVideoFusionParamChangeListener2":"移除监听2"
        },
        "Measure": {
            "startMeasureDistanceTriangulation": "进入三角量测模式", //startMeasureV2
            "stopMeasureDistanceTriangulation": "退出三角量测模式",  //startMeasureV2
            "startMeasureAreaContinuation": "进入连续面积量测模式",
            "stopMeasureAreaContinuation": "退出连续面积量测模式",
            "startMeasureDistanceContinuation": "进入连续距离量测模式",
            "stopMeasureDistanceContinuation": "退出连续距离量测模式",
            "startMeasureAreaProjection": "进入投影面积量测模式",
            "stopMeasureAreaProjection": "退出投影面积量测模式"
        },
        "Clip": {
            "startClip": "进入剖切模式",
            "stopClip": "退出剖切模式",
            "addClipBox": "添加体剖分",
            "removeClipBox": "删除体剖分",
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
            "startSightLineAnalysis": "进入通视分析分析模式",
            "stopSightLineAnalysis": "退出通视分析分析模式"
        },
        "SkyLineAnalysis": {
            "startSkyLineAnalysis": "进入天际线分析模式",
            "stopSkyLineAnalysis": "退出天际线分析模式"
        },
        "LimitHeightAnalysis": {
            "addLimitHeightAnalysis": "添加",
            "removeLimitHeightAnalysis": "删除",
            "startLimitHeightAnalysis": "开始限高分析",
            "stopLimitHeightAnalysis": "结束限高分析"
        }
    },
    "Tools": {
        "MapRoam": {
            "startMapRoam": "开始漫游",
            "pauseMapRoam": "暂停漫游",
            "continueMapRoam": "继续漫游",
            "stopMapRoam": "停止漫游",
        },
        "ScreenSplit": {
            "enterMultiScreen": "进入方案比选状态",
            "quitMultiScreen": "退出方案比选状态",
        },
        "BuildingGrowth": {
            "startBuildingGrowth": "自动播放",
            "pauseBuildingGrowth": "暂停",
            "continueBuildingGrowth": "继续",
            "stopBuildingGrowth": "停止",
            "setBuildingGrowthProgress": "设置进度",
            "setBuildingToCertainFloor": "设置层数"
        },
        // "TimeSlider": {
        //     "setTimeSliderVisibility": "显示24小时光照时间条",
        //     "setTimeSliderVisibility2": "关闭24小时光照时间条",
        //     "setTimeSliderLayout": "改变布局位置"
        // },
        "SceneController": {
            "goodMorning": "白天",
            "goodNight": "黑夜"
        },
        "Compass": {
            "setCompassVisibility": "显示指北针",
            "setCompassLayout": "设置指北针布局",
            "setCompassVisibility2": "隐藏指南针",
        },
        "VisualEffect": {
            // "DFZM": "显示东方之门围栏特效",
            // "DFZMhide": "隐藏东方之门围栏特效",
            "highlightModel": "高亮东方之门",
            "unhighlightModel": "取消高亮东方之门",
            "changeTime": "设置场景环境时间至7点",
            "addCrystalEffect": "添加水晶体特效",
            "removeCrystalEffect": "删除水晶体特效",
            "openMinimap": "打开小地图",
            "closeMinimap": "关闭小地图",
            "addSweepingEffect": "添加扫光特效",
            "removeSweepingEffect": "删除扫光特效",
            "enterFrameMode": "进入线框体模式",
            "exitFrameMode": "退出线框体模式",
            "highlightPartly": "局部高亮",
            "unhighlightPartly": "取消局部高亮"
        },
        "Others": {
            "quit":"退出应用",
            "getVersionName":"获取版本号",
            "screenshot":"截屏"
        }
    },
    "PipeLine": {
        "Event": {
            "setOnPipeClickListener": "开启管线点选",
            "removePipeClickListener": "移除管线点选",
            "setNewHighlight": "新版高亮",
            "setOldHighlight": "老版高亮"
        },
        "VisualEffect": {
            // "loadPipeline": "加载管线",
            "removeHighlightPipelines": "取消高亮管线",
            "showJSPipeline": "显示三维管线图层",
            "hideJSPipeline": "隐藏三维管线图层",
            "addJSPipeline":"加载JS管段管点",
            "removeJSPipeline":"删除JS管段管点"
        },
        "PipelineAnalysis": {
            "startFlowDirection": "开启流向分析",
            "closeFlowDirection": "关闭流向分析",
            "startConnectivity": "开启连通性分析",
            "closeConnectivity": "关闭连通性分析",
            "startCSection": "开启横截面分析",
            "closeCSection": "关闭横截面分析",
            "startLSection": "开启纵截面分析",
            "closeLSection": "关闭纵截面分析"
        }
    }
}
