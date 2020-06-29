const {Model,DataTypes} = require("sequelize");

class Usuario extends Model{
    static init(sequelize){
        super.init({
            id_usuario:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nome : DataTypes.STRING,
            email: DataTypes.STRING,
            senha:DataTypes.STRING,
            id_nivel:DataTypes.INTEGER
        },
        {
            sequelize,
            modelName:"Usuario",
            tableName:"tbl_usuario"
        })
    }
}

module.exports = Usuario;