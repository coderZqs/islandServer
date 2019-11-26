const {
    sequelize
} = require("../core/db");

const {
    Sequelize,
    Model
} = require("sequelize");

const {
    User
} = require("./user");

class Dynamic extends Model {
    static async getAllDynamic() { //首页信息；
        const dynamic_data = await Dynamic.findAll({

            order: [
                ["id", "DESC"]
            ]
        })
        const user_data = await User.findAll({
            attributes: ["nickname", "portrait"]
        })

        dynamic_data.forEach(dynamic => {
            user_data.forEach((user) => {
                if (dynamic.get("user_name") === user.get("nickname")) {
                    dynamic.setDataValue("portrait", user.get("portrait"))
                }
            })
        })

        console.log(dynamic_data)
        return dynamic_data;
        if (!user_data) {
            throw new global.erros.NotFound();
        }
        /*return data; */
    }
    static async findDynamicByNickName(nickname) { //通过id查询资料
        const dynamic_data = await Dynamic.findAll({

            order: [
                ["id", "DESC"]
            ],
            where: {
                user_name: nickname
            }
        })
        const user_data = await User.findAll({
            attributes: ["nickname", "portrait"]
        })
        dynamic_data.forEach(dynamic => {
            user_data.forEach((user) => {
                if (dynamic.get("user_name") === user.get("nickname")) {
                    dynamic.setDataValue("portrait", user.get("portrait"))
                }
            })
        })
        return dynamic_data;
    }
    static async incrementDynamic(nickname, content, pub_date) {
        console.log(pub_date);
        await Dynamic.create({
            user_name: nickname,
            pubDate: pub_date,
            content
        })
    }
}
Dynamic.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pubDate: Sequelize.STRING,
    user_name: Sequelize.STRING(24),
    content: Sequelize.STRING(128),
    content_image: Sequelize.STRING
}, {
    sequelize,
    tableName: "dynamic"
})

module.exports = {
    Dynamic
}