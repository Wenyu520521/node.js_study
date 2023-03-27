// 导入配置好的mysql模块
const db = require('./1.配制mysql模块')

// 待执行的sql语句
const sqlStr = 'select * from users'

// 执行sql语句
db.query(sqlStr, (error, results) => {
  if (error) throw error
  console.log(results)
})
