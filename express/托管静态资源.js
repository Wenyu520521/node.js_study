const express = require('express')
const app = express()

// 托管静态资源
// app.use(express.static('../clock'))
// 托管静态资源而且希望挂载路径前缀
app.use('/clock', express.static('../clock'))

app.listen(8080, () => {
  console.log('http:127.0.0.1:8080/ listening...')
})
