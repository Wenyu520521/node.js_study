// 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据

// 导入配置好的mysql模块
const db = require('./1.配制mysql模块')

// 要插入到users表中的数据
// const user = {
//   username: 'spiderMan1',
//   password: 'pcc4214',
// }
const users = [
  {
    username: 'spiderMan1',
    password: 'pcc4214',
  },
  {
    username: 'spiderMan2',
    password: 'pcc4254',
  },
]


// 待执行的语句，其中？表示占位符
// 插入单个对象
// const sqlStr = 'insert into users set ?'
// 插入多个对象
const sqlStr = 'insert into users (username, password) values (?, ?), (?, ?)'


// 直接把数据对象当作占位符的值
// db.query(sqlStr, users, (err, results) => {
//   if (err) {
//     return console.log('插入失败!')
//   }
//   if (results.affectedRoes === 2) {
//     console.log('插入成功!')
//   }
// })

const values = users.reduce((acc, user) => {
  acc.push(user.username)
  acc.push(user.password)
  return acc
}, [])
// 以上代码中，reduce() 方法用于将多个对象的参数组成一个参数数组。在回调函数中可以打印出插入成功的信息。
// 这段代码是一个数组的 reduce() 方法，用于将多个对象的参数组成一个参数数组。
// reduce() 方法的第一个参数是一个回调函数，第二个参数是初始值，表示累加器的初始值，本例中初始值为一个空数组 []。
// 回调函数中的第一个参数 acc 是累加器，表示当前的累加结果；第二个参数 user 是数组中当前正在处理的元素。
// 回调函数的主要逻辑是将每个用户的 username 和 password 属性分别 push 到累加器 acc 中，最终返回累加器。
// 例如，对于 users 数组中的两个元素，第一次执行回调函数时，累加器为 []，当前元素为 { username: 'spiderMan1', password: 'pcc4214' }，
// 则会将 "spiderMan1" 和 "pcc4214" 分别 push 到累加器中，累加器变为 ['spiderMan1', 'pcc4214']，然后继续处理下一个元素，直到处理完所有元素。
// 最终，values 数组的值为 ['spiderMan1', 'pcc4214', 'spiderMan2', 'pcc4254']，用于作为参数传入插入语句中。
console.log(values);

db.query(sqlStr, values, function (error, results, fields) {
  if (error) throw error
  console.log('插入成功！')
})

