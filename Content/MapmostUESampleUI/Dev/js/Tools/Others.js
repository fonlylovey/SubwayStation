// 获取版本号
$("#getVersionName").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Other",
        "method": "getVersionName",
        "data": {

        }
    }, function (val) {
        console.log(val)
    })
})

// 退出
$("#quit").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Other",
        "method": "quit",
        "data": {

        }
    })
})

// 截屏
$("#screenshot").click(function () {
    ue5("Tools", {
        "module": "Tools",
        "subModule": "Other",
        "method": "screenshot",
        "data": {

        }
    }, function (val) {
        console.log(val)
    })
})