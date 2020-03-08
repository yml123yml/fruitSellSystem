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
    allFruit: 'select * from allFruit',
    apple: 'select * from allFruit where tip like "%苹果%" ',
    dongzao: 'select * from allFruit where tip like "%枣龙眼%" ',
    huolongguo: 'select * from allFruit where tip like "%火龙果%" ',
    jinju: 'select * from allFruit where tip like "%金桔柠檬%" ',
    liulian: 'select * from allFruit where tip like "%榴莲%" ',
    mangguo: 'select * from allFruit where tip like "%芒果%" ',
    migua: 'select * from allFruit where tip like "%瓜%" ',
    orange: 'select * from allFruit where tip like "%橙子%" ',
    pipa: 'select * from allFruit where tip like "%杷芭%" ',
    qiyiguo: 'select * from allFruit where tip like "%奇异%" ',
    shiliu: 'select * from allFruit where tip like "%石榴山竹%" ',
    strawberry: 'select * from allFruit where tip like "%莓%" '
  },
  banner: {
    allBanner: 'select * from banner'
  }
}

module.exports = sqlMap
