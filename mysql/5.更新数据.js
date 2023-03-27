// 导入配置好的mysql数据库
const db = require('./1.配制mysql模块')

// 要更新的对象
const users = [
  {
    id: 8,
    username: 'ccc',
    password: '222',
  },
  { id: 9, username: 'bbb', password: '111' },
]

// 要执行的sql语句
const sqlStr = 'update users set username=?,password=? where id=?'

// 处理对象转换成参数数组
const userArr = users.reduce((acc, user) => {
  acc.push(user.username)
  acc.push(user.password)
  acc.push(user.id)
  return acc
}, [])

// 执行sql
db.query(sqlStr, userArr, (error, results) => {
  if (error) throw error
  console.log(results)
})

// 问题：只能更新一个对象的数据？