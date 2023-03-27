// 导入模块
const express = require('express')
// 创建服务器实例
const app = express()

// 配置解析表单的中间件
app.use(express.urlencoded({ extend: false }))

// 在导入路由之前配置cors中间件解决跨域问题

const cors = require('cors')
app.use(cors())

// const cors = require('cors') 和 app.use(cors()) 是使用第三方中间件 cors 来解决跨域问题的常见方式。cors 中间件会自动设置一些 CORS 头部信息，因此在使用该中间件后，就可以直接进行跨域请求。
// cors 中间件会在响应头中添加如下信息：
// Access-Control-Allow-Origin：指定允许访问的来源。
// Access-Control-Allow-Methods：指定允许的请求方法。
// Access-Control-Allow-Headers：指定允许的请求头信息。
// Access-Control-Max-Age：指定预检请求的有效期限，单位为秒。
// 因此，使用 app.use(cors()) 就能解决跨域问题，而不需要手动设置响应头信息。
// 需要注意的是，cors 中间件会允许所有的来源进行访问，这可能会带来一些安全隐患。因此，在生产环境下，需要根据实际情况设置允许访问的来源。可以使用如下方式：
// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));
// 在上述代码中，通过 corsOptions 对象指定了允许访问的来源为 http://example.com。


// // 设置 CORS 头部信息中间件
// app.use(function (req, res, next) {
//   // 设置允许跨域的源
//   res.header('Access-Control-Allow-Origin', '*')
//   // 设置允许的请求方法
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   // 设置允许的请求头
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   // 继续请求处理
//   next()
// })


// 导入路由
const router = require('./apiRouter')
// 把路由注册到app上
app.use('/api', router)

// 监听8080端口并且启动服务器
app.listen(8080, () => {
  console.log('server is listening at 127.0.0.1:8080')
})
