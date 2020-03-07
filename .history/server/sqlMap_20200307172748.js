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
    selectPro: 'select * from tuijian', // 滑动推荐
    heavyPro: 'select * from heavyRecommend' // 重磅推荐
  },
  category: {
    hotFruit: 'select * from hotFruit', // 热销水果
    hotFruitList: 'select * from hotFruitList',
    importFruit: 'select * from importFruit', // 进口水果
    landmankFruit: 'select * from landmankFruit', // 地标水果
    twoFruit: 'select * from twoFruit', // 买一赠一水果
    seasonalFruit: 'select * from seasonalFruit', // 时令水果
    allFruit: 'select * from allFruit'
  },
  banner: {
    allBanner: 'select * from banner'
  }
}

module.exports = sqlMap
