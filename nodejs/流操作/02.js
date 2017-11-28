// [进度条]

// 详细使用方法查看文档

var ProgressBar = require('progress')

var bar = new ProgressBar('[:bar]', {total: 20, width: 20})

var timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n')
        clearInterval(timer)
    }
}, 100)