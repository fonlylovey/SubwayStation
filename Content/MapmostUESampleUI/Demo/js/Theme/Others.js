// // 其他
//
//
//
//
//
// // 开启地图坐标拾取
// $("#addMousePickListener").click(function () {
//     mapmostUE.addMousePickListener(function (response) {
//         // 经度、纬度、高度
//         let {lng, lat, height} = response;
//         alert(`lng:${lng}\n lat:${lat}\n height:${height}
//         `)
//     });
// })
//
// // 关闭地图坐标拾取
// $("#removeMousePickListener").click(function () {
//     mapmostUE.removeMousePickListener();
// })
//
// // 关闭系统载入界面
// $("#removeLoading").click(function () {
//     mapmostUE.removeLoading();
// })
//
//
//
// // 打开背景音乐
// $("#openBGMusic").click(function () {
//     mapmostUE.openBGMusic();
// })
//
// // 关闭背景音乐
// $("#closeBGMusic").click(function () {
//     mapmostUE.closeBGMusic();
// })
//
//
// // 添加音源
// $("#addAudio").click(function () {
//     mapmostUE.addAudio({
//         "id": "test",
//         // "audio": "http://localhost:8080/test.mp3",
//         "audio": "E:\\UE\\GIT\\SIPSD\\Content\\UI\\test.mp3",
//         "position": [120.675462, 31.318861,0],
//         "radius":  200,
//         "distance": 100
//     });
// })
//
// // 移除音源
// $("#removeAudio").click(function () {
//     mapmostUE.removeAudio("test");
// })
//
//
//
// // 开启三维对象拾取
// $("#on3DObjectClickListener").click(function () {
//     mapmostUE.on3DObjectClickListener(function (val){
//         alert('拾取的三维对象是：'+val);
//     });
// })
//
//
// // 关闭三维对象拾取
// $("#off3DObjectClickListener").click(function () {
//     mapmostUE.off3DObjectClickListener();
// })
//
//
