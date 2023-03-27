// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
  session({
    secret: 'zxlml', // secret的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true, // 固定写法
  })
)

// 托管静态页面
app.use(express.static('./pages'))
// 解析post提交过来的表单数据
app.use(
  express.urlencoded({
    extended: false,
  })
)

// 登录的api接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({
      status: 1,
      msg: '登录失败',
    })
  }
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了express-session这个中间件才有req.session这个属性
  // 在这里，req.session.user是req.session一个自定义的属性
  req.session.user = req.body // 用户的信息
  req.session.isLogin = true // 用户的登录状态
  res.send({
    status: 0,
    msg: '登录成功',
  })
})

// 获取用户名的接口
app.get('/api/username', (req, res) => {
  // 判断用户是否登录成功
  if (!req.session.isLogin) {
    return res.send({
      status: 1,
      msg: 'fail',
    })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // 清空当前客户端的登录信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功!',
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
  console.log('Express server running at http://127.0.0.1:8080')
})
