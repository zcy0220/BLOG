const db = require('../db/util')
const { setSession } = require('../utils/session')

const user = {

    /**
     * 处理注册逻辑
     * @param {context} ctx 
     */
    async signUp(ctx) {
        const info = ctx.request.body
        const name = info.userName
        const password = info.password
        let results = await db.find({name})
        ctx.body = '注册失败'
        if (results.length > 0) {
            ctx.body = '用户名已被注册'
        } else {
            results = await db.insert({name, password})
            if (results) {
                const id = results[0].id
                ctx.body = info
                setSession(ctx, {id, name})
            }
        }
    },

    /**
     * 处理登录逻辑
     * @param {context} ctx
     */
    async signIn(ctx) {
        const info = ctx.request.body
        const name = info.userName
        const password = info.password
        let results = await db.find({name, password})
        ctx.body = '登录失败'
        if (results.length > 0) {
            const id = results[0].id
            ctx.body = info
            setSession(ctx, {id, name})
        } else {
            ctx.body = '用户或密码错误'
        }
    }
    
}

module.exports = user