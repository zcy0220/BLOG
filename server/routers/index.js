/**
 * 总路由
 */
const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const blogs = require('./blogs')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/blogs', blogs.routes(), blogs.allowedMethods())

module.exports = router