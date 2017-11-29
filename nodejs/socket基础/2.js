// [net-Api-建立一个Socket服务端]

var net = require('net')

// 创建一个Socket服务器
var server = net.createServer((socket) => {
    // 当有客户端连接时触发匿名函数
    console.log('连接')

    // 监听socket数据传输 -- 网络流
    socket.on('data', (chunk) => {
        console.log(chunk)
    })
})

// 监听特定端口
server.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
})

