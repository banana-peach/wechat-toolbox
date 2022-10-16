//api.js 我们将所有的接口统一管理
const request = require("./network") //引入封装好的js文件
module.exports = {
    // 登录
    login(data) {
        return request.post('/learn/auth/login', data)
    }
}
