// sql语句
var sqlMap = {
  user: {
    // 添加用户
    add: 'insert into user(userName, passWord) values (?, ?)',
    // 查询用户和密码
    select_name: 'select * from user where userName = ?',
    select_password: 'select * from user where passWord = ?',
    update_password: 'update user set password = ? where id = ?'
  },
  tuijian: {
    selectPro: 'select * from tuijian'
  }
}

module.exports = sqlMap
