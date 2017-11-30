// readline (逐行读取)
var readline  = require('readline');

// Interface 类
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


// 'close' 事件

// 'line' 事件
rl.on('line', (input) => {
    console.log(`接收到${input}`);

})
// 'pause' 事件
rl.on('pause', () => {
    console.log('暂停了');
})
// 'resume' 事件
rl.on('resume', () => {
    console.log('恢复了')
})
// 'SIGCONT' 事件

// 'SIGINT' 事件
// 'SIGTSTP' 事件
// rl.close()
// rl.pause()
// rl.prompt([preserveCursor])
// rl.question(query, callback)
// rl.resume()
// rl.setPrompt(prompt)
// rl.write(data[, key])
// readline.clearLine(stream, dir)
// readline.clearScreenDown(stream)
// readline.createInterface(options)
// completer 函数的使用
// readline.cursorTo(stream, x, y)
// readline.emitKeypressEvents(stream[, interface])
// readline.moveCursor(stream, dx, dy)
// 例子：简单的命令行界面
// 例子：逐行地读取文件流