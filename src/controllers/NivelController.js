const connection = require("../Database");
const Nivel = require("../models/Nivel");


Nivel.init(connection);


module.exports = {

    async selectAll(req,res){
        const niveis = await Nivel.findAll();
        return res.json(niveis);
    },

    async selectById(req,res){
        const id = req.params.id;
        const nivel =  await Nivel.findByPk(id);
        return res.json(nivel);
    },

    async selectAllWhereStatusOn(req,res){
       const niveis = await Nivel.findAll({
            where:{status:1}
        });

        return res.json(niveis);
    },

    async insert(req,res){
        const {nivel,adm_conteudo,adm_produto,adm_usuario} = req.body;
        const nivelCriado = await Nivel.create({
            nivel,
            adm_conteudo,
            adm_produto,
            adm_usuario
        });

        return res.json(nivelCriado);

    },

    async update(req,res){
        const {id_nivel,nivel,adm_conteudo,adm_produto,adm_usuario} = req.body;

        const statusUpdate = await Nivel.update({
            nivel,
            adm_conteudo,
            adm_produto,
            adm_usuario
        },
        {
            where:{id_nivel}
        }
        );

        if(statusUpdate==1){
            const nivelUpdated = await Nivel.findByPk(id_nivel);
            return res.json(nivelUpdated);
        }else{
            return res.json({status:"erro ao atualizar"});
        }

    },

    async delete(req,res){
        const id = req.params.id;

        try{
            await Nivel.destroy({where:{id_nivel:id}});

            return res.json({status:"deletado com sucesso"});

        }catch(err){
            console.log(err);
            return res.json({status:"erro ao deletar"});
        }
    }



}