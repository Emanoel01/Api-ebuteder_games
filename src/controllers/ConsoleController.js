const Console = require("../models/Console");
const connection = require("../Database");
const { update } = require("../models/Console");

Console.init(connection);

module.exports = {

    async insert(req,res){
        const {nome,status} = req.body;

        const consoleSalvo = await Console.create({
            nome,status
        });

        res.json(consoleSalvo);
    },

    async selectAll(req,res){
        const allConsole = await Console.findAll();
        return res.json(allConsole);
    },

    async selectById(req,res){
        const idConsole = req.params.id;
        const console = await Console.findByPk(idConsole);

        return res.json(console)
    },

    async selectWhereStatusOn(req,res){

        const console = await Console.findAll({
            where:{status:1}
        });

        return res.json(console);

    },

    async update(req,res){
        const {id_console,nome,status} = req.body;

        const statusUpdate = await Console.update({
            nome,status
        },
        {
            where:{id_console}
        }
        );

        if(statusUpdate==1){
            const consoleUpdated = await Console.findByPk(id_console);
            return res.json(consoleUpdated)
        }else{
            return res.json({erro:"erro ao atualizar"})
        }

    },

    async delete(req,res){
        const id = req.params.id;

            const statusDelete = Console.destroy({
                where:{id_console:id}
            });

            return res.json({status:"Deletado"});
    }
}