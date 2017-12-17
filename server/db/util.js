const User = require('../models/user')

/**
 * 插入数据
 * @param {Object} options
 */
const insert = function(obj) {
    return new Promise((resolve, reject) => {
        const user = new User(obj)
        user.save((err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}

/**
 * 查询数据
 * @param {Object} options
 */
const find = function(options) {
    return new Promise((resolve, reject) => {
        User.find(options ,(err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}

module.exports = {
    insert,
    find
}