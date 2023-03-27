const express = require('express')
const app = express()

// 1.导入路由模块
const router = require('./03.router')
// 2.注册路由模块 app.use()函数用来注册中间件
// app.use(router)
// 为路由模块添加前缀
app.use('/api',router)

app.listen(8080,()=>{
  console.log('http:127.0.0.1:8080/ listening...');
})