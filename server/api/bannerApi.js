/* eslint-disable camelcase */
var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

router.post('/allBanner', (req, res) => {
  var sql = $sql.banner.allBanner
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// 通过id获得商品
router.post('/queryBannerDetail', (req, res) => {
  let userdata = [req.body.id]
  var sql = $sql.banner.getBannerById
  conn.query(sql, userdata, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
