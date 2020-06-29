const {Model,DataTypes} = require("sequelize");

class Nivel extends Model{
    static init(sequelize){
        super.init({
            id_nivel:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nivel:DataTypes.STRING,
            adm_conteudo:DataTypes.CHAR,
            adm_produto:DataTypes.CHAR,
            adm_usuario:DataTypes.CHAR
        },
        {
            sequelize,
            modelName:"Nivel",
            tableName:"tbl_nivel"
        })
    }
}

module.exports = Nivel;