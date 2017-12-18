const User = require('../models/user')
const Blog = require('../models/blog')
const collections = { User, Blog }

/**
 * 插入数据
 */
const insert = function(obj, collection = 'User') {
    return new Promise((resolve, reject) => {
        const Model = collections[collection]
        const model = new Model(obj)
        model.save((err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}

/**
 * 更新数据
 * options 条件
 * obj 更新内容
 */
const update = function(options, obj, collection = 'User') {
    return new Promise((resolve, reject) => {
        const Model = collections[collection]
        Model.update(options, obj, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}

/**
 * 查询数据
 */
const find = function(options, collection = 'User') {
    return new Promise((resolve, reject) => {
        const Model = collections[collection]
        Model.find(options ,(err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}

module.exports = {
    insert,
    update,
    find
}