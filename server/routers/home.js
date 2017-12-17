/**
 * home 子路由
 */
const router = require('koa-router')()

module.exports = router.get('/', async ctx => {
    // const session = ctx.session
    // ctx.state = { session }
    // await ctx.render('home')
    await ctx.redirect('/blogs/0')
})