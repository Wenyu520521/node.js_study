// 1.导入所需模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 2.创建基本的web服务器
// 2.1创建web服务器
const server = http.createServer()
// 2.2监听web服务器的request事件
server.on('request', (req, res) => {
  // 3.将资源的请求 url 地址映射为文件的存放路径
  // 3.1获取到客户端请求的url地址
  const url = req.url
  // 3.2把请求的url地址映射为本地文件的存放路径
  // const fpath = path.join(__dirname, url)
  let fpath = ''
  if(url === '/') {
    // 如果请求的路径为/,则手动指定文件的存放路径
    fpath = path.join(__dirname, './clock/index.html')
  }else{
    // 如果请求的路径不为/,则动态拼接文件的存放路径
    fpath = path.join(__dirname, './clock',url)
  }
  // console.log(url);
  // console.log(fpath)
  // 4.读取文件的内容并响应给客户端
  // 4.1根据映射过来的文件路径读取文件
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    // 4.2读取文件失败后，向客户端响应固定的“错误信息”
    if (err) {
      return res.end('404 Not Found')
    }
    // 4.3读取文件后，将“读取成功的的内容响应给客户端
    res.end(dataStr)
  })
})
// 2.3启动web服务器
server.listen(8080, () => {
  console.log('server listen at http://127.0.0.1:8080')
  })
