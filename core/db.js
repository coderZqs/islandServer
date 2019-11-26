const {
    Sequelize
} = require("sequelize");

const {
    dbName,
    host,
    port,
    user,
    password
} = require("../config.js").database;

const sequelize = new Sequelize(dbName, user, password, {
    dialect: "mysql",
    host,
    port,
    logging: false,
    timezone: "+08:00",
    define: {
        timestamps: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updatedAt",
        daletedAt: "deleted_At",
        underscored: true,
        freezeTableName: true
    }
})

sequelize.sync({
    force: false //实时重新加载
})

module.exports = {
    sequelize
}