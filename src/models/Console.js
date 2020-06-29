const {Model,DataTypes}  = require("sequelize");

class Console extends Model{
    static init(sequelize){
        super.init({
            id_console:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
                
            },
            nome:DataTypes.STRING,
            status:DataTypes.CHAR
        },
        {
            sequelize,
            modelName:"Console",
            tableName:"tbl_console",
            
        })
    }
}

module.exports = Console;