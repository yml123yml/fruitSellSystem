// node 后端服务器

const userApi = require('./api/userApi')
const tuijianApi = require('./api/tuijianApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/user', userApi)
app.use('/api/tuijian', tuijianApi)

// 监听端口
app.listen(3000)
console.log('3000端口服务器已连接')
