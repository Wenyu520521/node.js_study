// 导入配置好的mysql模块
const db = require('./1.配制mysql模块')

// 1.要插入到users表中的数据
const user = {
  username: 'SpiderMan',
  password: 'pcc321',
}
// 2.待执行的SQL语句，其中英文的？表示占位符
const sqlStr = 'insert into users (username, password) values (?,?)'
// 4.使用数组的形式，依次为？占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
  if (err) {
    return console.log(err.message) // 失败
  }
  if (results.affectedRows === 1) {
    console.log('插入数据成功!') // 成功
  }
})
