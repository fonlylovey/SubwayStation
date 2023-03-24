// 进入通视分析模式
$("#startSightLineAnalysis").click(function () {
    console.log('进入通视分析模式')
    mapmostUE.startSightLineAnalysis();
})

// 退出通视分析模式
$("#stopSightLineAnalysis").click(function () {
    console.log('退出通视分析模式')
    mapmostUE.stopSightLineAnalysis();
})