const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")


class magalu extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,

            },
            telefone: {
                type: DataTypes.STRING,

            },
            enviado: {
                type: DataTypes.STRING,

            },

            tipo: {
                type: DataTypes.STRING,

            },


        }, {

            sequelize

        })
    }

}


module.exports = magalu;