// 1.导入模块
const express = require('express')
// 2.创建路由对象
const router = express.Router()
// 3.挂载路由
router.get('/user/list',(req,res)=>{
  res.send('Get user list.')
})
router.post('/user/add',(req,res)=>{
  res.send('Add a user.')
})
// 4.导出路由对象
module.exports = router