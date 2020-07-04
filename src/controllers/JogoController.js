const Jogo = require("../models/Jogo");
const sequelize = require("../Database");

Jogo.init(sequelize);

module.exports = {
    
    async create(req,res){
        const {nome,descricao,preco,promocao,status,id_console} = req.body;
        
        const newJogo = await Jogo.create({nome,
            descricao,
            preco,
            promocao,
            status,
            id_console
        });

        return res.json(newJogo);
    },

    async insertCaminhoImagemJogo(req,res){
        const id_jogo = req.params.id;
        const status = await Jogo.update({
            imagem: req.file.path
        },{
            where: {id_jogo}
        });

            const jogoComImagem = await Jogo.findByPk(id_jogo);
            return res.json(jogoComImagem);

    },
    

    async selectAll(req,res){
        return res.json(await Jogo.findAll())
    },

    async selectById(req,res){

        const id = req.params.id;
        const jogo = await Jogo.findByPk(id);

        return res.json(jogo)

    },

    async selectWhereStatusOn(req,res){
        const jogosOn = await Jogo.findAll({
            where:{
                status:1
            }
        })

        return res.json(jogosOn);

    },

    async update(req,res){
        const { id,nome,descricao,preco,promocao,status,id_console } =  req.body;

        const atualizar = await Jogo.update({
            nome,
            descricao,
            preco,
            promocao,
            status,
            id_console
        },{
            where:{id}
        })

        const jogoUpdated = await Jogo.findByPk(id);

        return res.json(jogoUpdated);

    },

    async delete(req,res){
        const id_jogo = req.params.id;
        const status = "";

        const jogoToDelete = await Jogo.destroy({
            where: { id_jogo } 
        });

        return res.json({status:jogoToDelete});
    }

    


}