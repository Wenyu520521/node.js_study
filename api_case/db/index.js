import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'test',
  user: 'root',
  password: 'mysql123456789'
})

export default pool.promise()
