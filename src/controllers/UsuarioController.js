const brcypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const connection = require("../Database");

Usuario.init(connection);


module.exports = {

    async login(req,res){
        const {email,senha} = req.body;

        const usuario = await Usuario.findOne({where:{email}});

        const usuarioStringify = JSON.stringify(usuario);

        const usuarioJSON= JSON.parse(usuarioStringify);

        if(brcypt.compareSync(senha,usuarioJSON.senha)){
            return res.json(usuario);
        }else{
            return res.json({status:"senhas não correspondem"});
        }

    },

    async selectAll(req,res){
        const usuarios =  await Usuario.findAll();

        return res.json(usuarios);
    },

    async selectById(req,res){
        const id = req.params.id;
        const usuario = Usuario.findByPk(id);

        return res.json(usuario);
    },

    async selectWhereStatusOn(req,res){
        const usuarios = Usuario.findAll({where:{status:1}});

        return res.json(usuario);
    },

    async insert(req,res){
        const {nome,email,senha,id_nivel} = req.body;

        const emailJaCadastrado = await Usuario.findOne({where:{email}});

        if(emailJaCadastrado==null){

            const salt = brcypt.genSaltSync(10);

            const senhaCripto = brcypt.hashSync(senha,salt);
    
            const usuarioCriado = await Usuario.create({
                nome,email,senha:senhaCripto,id_nivel
            });
    
            return res.json(usuarioCriado);

        }else{
            return res.json({status:"email já cadastrado"});
        }

       

    },

    async update(req,res){
        const {id_usuario,nome,email,senha,id_nivel} = req.body;
        
        const salt = brcypt.genSaltSync(10);

        const senhaCripto = brcypt.hashSync(senha,salt);

        const statusUpdate = Usuario.update({
            nome,email,senhaCripto,id_nivel
        },
        {
            where:{id_usuario}
        });

        if(statusUpdate==1){
            const usuarioUpdated = Usuario.findByPk(id_usuario);

            return res.json(usuarioUpdated);
        }else{
            return res.json({status:"erro ao atualizar"});
        }
        
    },

    async delete(req,res){
        const id_usuario = req.params.id;

        try{
            await Usuario.destroy({where:id_usuario});

            return res.json({status:"Usuario deletado"});

        }catch(err){
            console.log(err);
            return res.json({status:"Erro ao deletar"});
        }


    }

}