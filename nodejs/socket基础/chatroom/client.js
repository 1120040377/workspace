// 客户端

const net = require('net')
const assert = require('assert')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`What's your name?`, (name) => {
    rl.setPrompt(`${name} >`)

    // 连接服务器
    const server = net.connect({port:8080, host: '127.0.0.1'}, () => {
        console.log(`Welcome ${name} to 8080 chatroom`);
        rl.prompt();
        rl.on('line', (line) => {
            if (!line.toString().trim()) {
                console.log('输入为空，请重新输入')
                rl.prompt();
            }
            var sendData = {
                protocol: 'boardcast',
                name: name,
                body:{
                    message: line.toString()
                }
            }

            server.write(JSON.stringify(sendData))
            rl.prompt();
        })
    })

    server.on('data', (chunk) => {
        console.log(chunk.toString())
    })
});







const actions = {
    // 广播
    boardcast (signal) {
        var send = {
            protocol: signal.protocol,
            from: signal.name,
            body: signal.body
        }
    }
}