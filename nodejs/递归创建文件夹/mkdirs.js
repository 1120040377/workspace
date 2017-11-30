var fs = require('fs')
var path = require('path')

function mkdirs (pathname) {
    // 获取绝对路径
    pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);

    // 获取相对路径
    var relativePath = path.relative(__dirname, pathname);

    // 获取想要创建目录的数组
    var folders = relativePath.split(path.sep);

    folders.forEach((item, index) => {
        try {
            fs.accessSync(path.join(__dirname, ...folders.slice(0, index + 1)))
        } catch (e) {
            fs.mkdirSync(path.join(__dirname , ...folders.slice(0, index + 1)))
        }
    })
}

module.exports = mkdirs;