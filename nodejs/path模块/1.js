var path = require('path');
var temp = __dirname;
var lrc = path.join(__dirname, '歌词.lrc');
// path.basename(path[, ext])
// console.log(path.basename(lrc))  // 歌词.lrc
// console.log(path.basename(lrc, '.lrc')) // 歌词
// console.log(path.basename(lrc, 'rc')) // 歌词.l

// 路径分隔符  windows：;  linux：:
// path.delimiter
// console.log(path.delimiter)

// 获取文件夹
// path.dirname(path)
// console.log(path.dirname(lrc)) // E:\瞎玩\Node学习\path模块>

// 获取后缀
// path.extname(path)
// console.log(path.extname(lrc)) // .lrc

// 路径和路径对象互转
// path.format(pathObject)
// path.parse(path)

// 判断一个路径是否为绝对路径，返回true，false
// path.isAbsolute(path)

// 拼合路径
// path.join([...paths])

// 格式化一个路径
// path.normalize(path)
// console.log(path.normalize('.///aa/s///f')) // aa/s/f

// 获取相对路径，从一个绝对路径到另一个绝对路径
// path.relative(from, to)

// 与join相似，resolve每一个参数都相当于执行一次cd命令
// path.resolve([...paths])

// 当前环境路径中文件夹得分隔符 windows: \ linux: /
// path.sep
console.log(path.sep)

// path.win32
// path.posix