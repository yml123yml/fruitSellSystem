// node 后端服务器

const userApi = require('./api/userApi')
const tuijianApi = require('./api/tuijianApi')
const categoryApi = require('./api/categoryApi')
const bannerApi = require('./api/bannerApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/user', userApi)
app.use('/api/tuijian', tuijianApi)
app.use('/api/category', categoryApi)
app.use('/api/banner', bannerApi)

// 监听端口
app.listen(4000)
console.log('4000端口服务器已连接')
