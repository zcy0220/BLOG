const path = require('path')
const Koa = require('koa2')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const views = require('koa-views')
const db = require('./db/db')
const { port, dbUrl } = require('../config')
const viewsEx = require('./views/index')
const router = require('./routers/index')
const session = require('./middlewares/session')

// 创建koa实例
const app = new Koa()

// 配置数据解析中间件
app.use(bodyparser())

// 配置静态资源加载中间件
app.use(static(path.join(__dirname, '../public')))

// 配置模板引擎中间件
app.use(views(path.join(__dirname, './views'), viewsEx))

// session
app.use(session())

// 配置路由中间件
app.use(router.routes()).use(router.allowedMethods())

// 连接数据库
db.connect(dbUrl, {useMongoClient: true})

app.listen(port)

console.log(`the server start at port ${port}`)