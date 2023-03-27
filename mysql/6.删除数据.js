// 导入配置好的mysql模块
const db = require('./1.配制mysql模块')

// 要执行的sql语句
const sqlStr = 'delete from users where id=?'

// 调用db.query()执行sql语句的同时，为占位符指定具体的值
// 注意：如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果sql语句中只有一个占位符，则可以省略数组
db.query(sqlStr,8,(error,result) => {
  if(error) {
    throw error
  }
  console.log('删除成功!');
})