// [客户端测试一]

const net = require('net')

const client = net.connect({port: 8080}, () => {
    console.log('连接服务器成功')

    client.write('world')
})

client.on('data', (data) => {
    console.log(data.toString('utf8'))

    client.end();
})

client.on('end', () => {
    console.log('与服务器断开连接')
})
