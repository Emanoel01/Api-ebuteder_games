const { Sequelize } = require("sequelize");

    const sequelize = new Sequelize("db_ebutder_games","root","bcd127",{
        host:"localhost",
        dialect:"mysql",
        define:{
            underscored:true,
            timestamps:false
        }
    });

    try{
        console.log("Database connection success")
    }catch(error){
        console.log("Databse connection fail: ",error)
    }

    module.exports = sequelize;
