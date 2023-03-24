
// 显示24小时光照时间条
$("#setTimeSliderVisibility").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "TimeSlider",
        "method": "setTimeSliderVisibility",
        "data": {
            "isVisible": true
        }
    })
})

// 关闭24小时光照时间条
$("#setTimeSliderVisibility2").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "TimeSlider",
        "method": "setTimeSliderVisibility",
        "data": {
            "isVisible": false
        }
    })
})

// 改变布局位置
$("#setTimeSliderLayout").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "TimeSlider",
        "method": "setTimeSliderLayout",
        "data": {
            "marginBottom": 300,
            "marginLeft": 40,
            "marginRight": 40
        }
    })
})