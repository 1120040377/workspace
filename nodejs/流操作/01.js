// [流操作]

var fs = require('fs')
var path = require('path')

var readStream = fs.createReadStream('./list.md')
var writStream = fs.createWriteStream('./output_list.md')

// 监听pipe事件，输出来源
writStream.on('pipe', src => {
    console.log(src)
})

// 可读流 -> 可写流
readStream
    .pipe(writStream)


/**
 * 注意
 *  流如果想链式执行，中间必须传stream.Transform类型
 */
