// // 地理围栏
//
// // 地理围栏1  ---底部在下
// $("#addGeoFencing1").click(function () {
//
//     mapmostUE.flyTo({
//         "center": [120.679451, 31.322432, 318.08432],
//         "heading":121.117661,
//         "pitch": -26.239946,
//         "distance": 250.19412109,
//         "time": 2
//     });
//
//     let options = {
//         id: "test1",
//         coordinates: [[120.678207, 31.318758,-2.649155],
//             [120.676933, 31.320789,-2.589237],
//             [120.675377, 31.319714,6.659529],
//             [120.675896,31.317652,4.270971]
//         ],
//         extrudeLength: 600,
//         extrudeColor:"#66cc66",
//         groundColor: "#66cc66"
//     };
//
//     mapmostUE.addFencing(options)
// })
//
// // 清除围栏1
// $("#removeGeoFencing1").click(function () {
//     mapmostUE.removeFencing("test1")
// })
//
// // 更新围栏1
// $("#updateGeoFencing").click(function () {
//     mapmostUE.updateFencing({
//         id: "test1",
//         extrudeColor: "#fa1c1c",
//         extrudeLength: 200,
//         groundColor: "#ff0909",
//     })
// })
//
// // 添加地理围栏2
// $("#addGeoFencing2").click(function () {
//     // let options = {
//     //     id: "test2",
//     //     coordinates: [[118.779067130110406, 32.03962175072175,0], [118.798641187572912, 32.038404954522306,0], [118.798597689667446, 32.026826145353361,0], [118.778414661528302, 32.028485618701936,0], [118.779067130110406, 32.03962175072175,0]],
//     //     extrudeLength: 2000,
//     //     extrudeColor:"#291fba",
//     //     groundColor: "#66b4cc"
//     // };
//
//     // mapmostUE.addFencing(options)
// })
//
// // 清除围栏2
// $("#removeGeoFencing2").click(function () {
//     // mapmostUE.removeFencing("test2")
// })
