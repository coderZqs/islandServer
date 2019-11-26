const {
    sequelize
} = require("../core/db");

const {
    Sequelize,
    Model
} = require("sequelize");

class User extends Model {
    static async AddUser(age, nickname, password, signatrue, coord) {
        const data = await User.create({
            age,
            nickname,
            password,
            signatrue,
            coord
        })
    }

    static async getInfoByNickName(nickname) {
        const data = await User.findOne({
            where: {
                nickname
            }
        })
        if (!data) {
            throw new global.errs.NotFound()
        }
        return data;
    }
}


User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    age: Sequelize.INTEGER,
    nickname: Sequelize.STRING(32), //一个汉字两个字节  一个字母一个字节
    password: Sequelize.STRING(32),
    signatrue: Sequelize.STRING(128),
    coord: Sequelize.STRING(64),
    portrait: {
        type: Sequelize.STRING,
        defaultValue: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563626967926&di=0c1bbd94e797ba12b21a8ffae50e4618&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67bf2026f_610.jpg"
    }
}, {
    sequelize,
    tableName: "user"
})

module.exports = {
    User
}