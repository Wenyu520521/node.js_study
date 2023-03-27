import db from '../db/index.js'

// 使用ES6的按需导出语法，将getAllUser方法导出
export async function getAllUser(req, res) {
  // 获取所有用户的列表数据
  // db.query()函数的返回值是promise的实例对象，因此可以使用async/await进行简化
  try {
    const [rows] = await db.query('select id,username,password from users')
    // const [rows] = await db.query('select id,username,password,xxx from users')
    res.send({
      status: 0,
      message: '获取用户数据成功!',
      data: rows,
    })
  } catch (error) {
    res.send({
      status: 1,
      message: '获取用户数据失败!',
      desc: error.message,
    })
  }
}
