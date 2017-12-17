/**
 * restful api 子路由
 */
const router = require('koa-router')()
const user = require('../services/user')

module.exports = router.post('/signUp', user.signUp)
                       .post('/signIn', user.signIn)