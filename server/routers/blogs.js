/**
 * 博客路由
 */
const router = require('koa-router')()
const blog = require('../services/blog')

module.exports = router.get('/:id', blog.render)
                       .post('/comment', blog.comment)