var Observer = (() => {
    var _message = {};
    return {
        // 注册信息接口
        regist (channel, fn) {
            // 如果消息频道没有被注册，测注册
            if (typeof _message[channel] === 'undefined') {
                // 将动作推入到消息对应的动作执行队列
                _message[channel] = [fn];
            } else {
                _message[channel].push(fn);
            }
            return this;
        },
        // 发布信息接口
        fire (channel, args) {
            // 如果频道没有被注册，则返回
            if(!_message[channel]) return;

            // 定义消息信息
            var events = {
                channel: channel, // 频道
                args: args || {} // 消息携带数据
            },
            i = 0,
            len = _message[channel].length;
            // 遍历消息动作
            for (;i < len; i++) {
                // 依次执行注册的消息对应的动作序列
                console.log(this)
                _message[channel][i].call(this, events)
            }
        },
        // 移除信息接口
        remove (channel, fn) {
            //如果消息队列存在
            if (_message[channel] instanceof Array) {
                // 从最后一个消息动作遍历
                var i = _message[channel].length - 1;
                for (;i >= 0; i--) {
                    // 如果存在动作则在消息队列中移除相应动作
                    _message[channel][i] === fn && _message[channel].splice(i, 1);
                }
            }
        }
    }
})()

