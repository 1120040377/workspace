// [收发消息]

var net = require('net')

// 创建一个Socket服务器
var server = net.createServer((socket) => {
    // 当有客户端连接时触发匿名函数
    // socket.localAddress -> 本地地址
    // socket.remoteAddress -> 远端地址
    socket.write('你来啦小子')

    // 监听socket数据传输 -- 网络流
    socket.on('data', (chunk) => {
        console.log(chunk.toString('utf8'))
    })
})

// 监听特定端口
server.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
})

