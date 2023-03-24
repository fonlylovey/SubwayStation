// 添加模型
$("#addModel").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Model",
        "method": "addModel",
        "data": {
            "id": "abc",
            "type": "Drone",
            "location": [120.681435, 31.315557, 185.18779],
            "rotation": [0,45,0] // roll pitch yaw
        }
    })
})

// 删除模型
$("#removeModel").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Model",
        "method": "removeModel",
        "data": {
            "id":"abc"
        }
    })
})

// 更新模型
$("#updateModel").click(function () {
    ue5("Layer", {
        "module": "Layer",
        "subModule": "Model",
        "method": "updateModel",
        "data": {
            "id": "abc",
            "location": [120.681455, 31.315577, 185.18799],
            "rotation": [0,90,45]
        }
    })
})