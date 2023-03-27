const fs = require('fs')
const path = require('path')
// 以./或../相对路径容易出现路径动态拼接的问题
// __dirname表示当前文件所处的目录
// console.log(__dirname);
const pathStr = path.join(__dirname, '/files/成绩.txt')
fs.readFile(pathStr, 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败!' + err.message)
  }
  // console.log('读取文件成功!' + dataStr)
  // 处理成绩.txt的数据
  const arrOld = dataStr.split(' ')
  // console.log(arrOld);
  const arrNew = []
  //   箭头函数是一种匿名函数的简写形式，它的语法如下：(parameters) => { statements }
  // 使用箭头函数作为 forEach 的参数可以使代码更加简洁。
  arrOld.forEach((item) => {
    arrNew.push(item.replace('=', ':'))
  })
  // arrOld.forEach(function(item){
  //   arrNew.push(item.replace('=', ':'))
  // })
  // console.log(arrNew);
  const newStr = arrNew.join('\r\n')
  //  console.log(newStr);
  fs.writeFile(__dirname + '/files/修改后的成绩.txt', newStr, function (err) {
    if (err) {
      return console.log('写入文件失败!' + err.message)
    }
    console.log('写入文件成功!')
  })
})
