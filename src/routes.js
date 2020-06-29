const express = require('express');
const jogoController = require('./controllers/JogoController');
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./config/Multer");


////////rotas do jogo

routes.post("/novojogo",jogoController.create);

routes.put("/imagem/:id",multer(multerConfig).single("imagem"),jogoController.insertCaminhoJogo);

routes.get("/jogos",jogoController.selectAll);

routes.get("/jogo/:id",jogoController.selectById);

routes.get("/jogosOn",jogoController.selectWhereStatusOn);

routes.put("/atualizarJogo",jogoController.update);

routes.delete("/deletarJogo/:id",jogoController.delete);


module.exports = routes;