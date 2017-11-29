// [客户端测试二]

const net = require('net')

const client = net.connect({port: 8080}, () => {
    console.log('连接服务器成功')


})

// 获取用户控制台输入的内容
process.stdout.write('请输入>')
process.stdin.on('data', (chunk) => {
    // 控制台输入回车 - 发送数据到服务端
    client.write(chunk.toString())
    process.stdout.write('请输入>')
})