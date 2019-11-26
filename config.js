module.exports = {
    //production 
    environment: 'dev',
    database: {
        dbName: 'class',
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
    },
    security: {
        secretKey: "abcdefg",
        expiresIn: 60 * 60 * 24 * 30
    },
    wx:{
        appId:'wxdd1ab626345ac19c',
        appSecret:"66b46b51fc6203b3781f421bbdd4dc03",
        loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    },
    yushu:{
        detailUrl:'http://t.yushu.im/v2/book/id/%s',
        keywordUrl:'http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
    },
    host:'http://localhost:3000/'
}