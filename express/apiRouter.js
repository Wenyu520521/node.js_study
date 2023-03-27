const express = require('express')
const router = express.Router()

// 挂载路由
router.get('/get', (req, res) => {
  // 获取客户端通过查询字符串发送到服务器的数据
  const query = req.query
  res.send({
    status: 0, // 0表示请求成功，1表示请求失败
    msg: 'Get请求成功！', // 描述信息
    data: query,
  })
})

// 编写post接口
router.post('/post', (req, res) => {
  // 通过req.body获取客户端发送的url-encoded格式的数据
  // 注意：要解析url-encoded格式的数据，必须先配置解析表单的中间件
  const body = req.body
  res.send({
    status: 0,
    msg: 'Post请求成功!',
    data: body,
  })
})

// 向外导入router
module.exports = router
