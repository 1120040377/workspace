// 服务端

const net = require('net')
const assert = require('assert')

// 客户端数组
const clients = []

const server = net.createServer((socket) => {
    // 每当客户端连接时，将连接对象存入客户端数组
    clients.push(socket);
    console.log(`${socket.remoteAddress}成功连接`)
    socket.on('data', (chunk) => {
        // 有任何客户端消息都会触发
        
        var signal = JSON.parse(chunk.toString());

        // 执行动作
        // {
        //     protocol: '...',
        //     name: '...',
        //     body: {
        //         ...
        //     }
        // }
        assert.notDeepStrictEqual(actions[signal.protocol], null, '不支持此协议')
        actions[signal.protocol](signal)

    })
})

const port = 8080;
server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`the server running at localhost:${port}`)
})



const actions = {
    // 广播
    boardcast (signal) {
        var send = {
            protocol: signal.protocol,
            from: signal.name,
            body: signal.body
        }
        console.log(clients.length)
        console.log(signal);
        clients.forEach(client => {
            client.write(`你好${signal.name},我收到你的消息了，消息是【${signal.body.message}】`)
        })
    }
}