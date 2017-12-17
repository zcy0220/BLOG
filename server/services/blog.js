const path = require('path')
const { readFile } = require('../utils/util')
const marked = require('marked')

const blog = {

    /**
     * 渲染博客
     * @param {context} ctx 
     */
    async render(ctx) {
        const session = ctx.session || {}
        const id = ctx.params.id
        const data = await readFile(path.join(__dirname, '../../public/blogs/' + id + '.md'))
        const content = marked(data.toString())
        ctx.state = { content, session }
        await ctx.render('blog')
    },

}

module.exports = blog