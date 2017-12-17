/**
 * session中间件
 */

const { sessions, key } = require('../utils/session')

module.exports = () => {
    return async (ctx, next) => {
        let id = ctx.cookies.get(key)
        if (!id) {
            ctx.session = {}
        } else {
            const session = sessions[id]
            if (session) {
                ctx.session = session
            } else {
                ctx.session = {}
            }
        }
        await next()
    }
}