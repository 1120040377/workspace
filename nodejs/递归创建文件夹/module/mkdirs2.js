var fs = require('fs')
var path = require('path')

function mkdirs (pathname) {
    // __dirname 使用时要注意，防止路径出问题
    // console.log(module.parent) // 父模块对象

    // 父模块所在根路径
    var root = path.dirname(module.parent.filename);

    // 获取相对路径
    var relativePath = path.relative(root, pathname);

    // 获取想要创建目录的数组
    var folders = relativePath.split(path.sep);

    folders.forEach((item, index) => {
        try {
            fs.accessSync(path.join(root, ...folders.slice(0, index + 1)))
        } catch (e) {
            fs.mkdirSync(path.join(root , ...folders.slice(0, index + 1)))
        }
    })
}

module.exports = mkdirs;