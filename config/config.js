require('dotenv').config()

module.exports = {
    tokens: process.env.TOKEN,
    linkDb: process.env.LINK_DATABASE,
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

}