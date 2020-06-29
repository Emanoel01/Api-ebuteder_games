const {Model,DataTypes} = require("sequelize");

class Jogo extends Model{
    static init(sequelize){
        super.init({
            id_jogo:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nome:DataTypes.STRING,
            descricao:DataTypes.STRING,
            imagem:DataTypes.STRING,
            preco:DataTypes.DOUBLE,
            promocao:DataTypes.DOUBLE,
            status:DataTypes.CHAR,
            id_console:DataTypes.INTEGER
        },
        {
            sequelize,
            modelName:'Jogo',
            tableName:"tbl_jogo"
        }
        )
    }
}

module.exports = Jogo;