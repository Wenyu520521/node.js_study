// 使用require导入fs文件系统模块
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
  // 导入失败打印
  // console.log(err);
  if (err) {
    return console.log('读取失败' + err.message)
  }
  console.log('--------------------------------')
  // 导入成功打印
  console.log(dataStr)
})
