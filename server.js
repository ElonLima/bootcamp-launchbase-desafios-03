// Iniciando o express 
const express = require('express')
// Para iniciar o nunjucks
const nunjucks = require('nunjucks')

// Executando a variável "express" como função e guardando dentro da variável "server"  
const server = express()

// Configurando o estilo
server.use(express.static("public"))

// Chamando imagens guardadas na pasta "assets"
server.use(express.static("assets"))

// Configurando a template engine
server.set("view engine", "njk")
// Configurando o nunjucks
nunjucks.configure("views", { 
    express: server
})

//adicionando rotas

server.get("/", function(req, res) {
    return res.render("courses")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/homepage", function(req, res) {
    return res.render("homepage")
})

// Página não encontrada
server.use(function(req, res) {
    res.status(404).render("not-found");
});

// iniciando o servidor
server.listen(5000, function () {
    console.log('server is running')
})
