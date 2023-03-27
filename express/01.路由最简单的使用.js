// 导入模块
const express = require('express')
// 生成实例
const app = express()

// 挂载路由
app.get('/',(req,res)=>{
  res.send('Hello World!');
})
app.post('/',(req,res)=>{
  res.send('Post Request.');
})

// 监听
app.listen('8080',()=>{
  console.log('http://127.0.0.1:8080 listening...');
})