

const fs = require('fs')

/**
 * 读取文件方法
 * @param {string} path
 */
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    readFile
}