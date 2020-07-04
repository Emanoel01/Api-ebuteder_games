const express = require('express');
const jogoController = require('./controllers/JogoController');
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./config/Multer");
const consoleController = require("./controllers/ConsoleController");
const nivelController = require("./controllers/NivelController");
const usuarioController = require("./controllers/UsuarioController");


////////rotas do jogo

routes.post("/novojogo",jogoController.create);

routes.put("/imagem/:id",multer(multerConfig).single("imagem"),jogoController.insertCaminhoImagemJogo);

routes.get("/jogos",jogoController.selectAll);

routes.get("/jogo/:id",jogoController.selectById);

routes.get("/jogosOn",jogoController.selectWhereStatusOn);

routes.put("/atualizarJogo",jogoController.update);

routes.delete("/deletarJogo/:id",jogoController.delete);


////Rotas Console

routes.post("/novoConsole",consoleController.insert);

routes.get("/allConsoles",consoleController.selectAll);

routes.get("/console/:id",consoleController.selectById);

routes.get("/consolesOn",consoleController.selectWhereStatusOn);

routes.put("/atualizarConsole",consoleController.update);

routes.delete("/deletarConsole/:id",consoleController.delete);

/////Rotas dos niveis

routes.get("/allNiveis",nivelController.selectAll);

routes.get("/nivel/:id",nivelController.selectById);

routes.get("/niveisOn",nivelController.selectAllWhereStatusOn);

routes.post("/novoNivel",nivelController.insert);

routes.put("/atualizarNivel",nivelController.update);

routes.delete("/deletarNivel/:id",nivelController.delete);

//// Rotas do Usuario

routes.get("/allUsuarios",usuarioController.selectAll);

routes.get("/usuario/:id",usuarioController.selectById);

routes.get("/usuariosOn",usuarioController.selectWhereStatusOn);

routes.post("/novoUsuario",usuarioController.insert);

routes.put("/atualizarUsuario",usuarioController.update);

routes.delete("/deletarUsuario/:id",usuarioController.delete);

routes.post("/login",usuarioController.login);


module.exports = routes;