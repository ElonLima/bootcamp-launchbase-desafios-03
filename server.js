// Iniciando o express 
const express = require('express')
// Para iniciar o nunjucks
const nunjucks = require('nunjucks')

// Executando a variável "express" como função e guardando dentro da variável "server"
const server = express()
const cards = require('./data')

// Configurando o estilo
server.use(express.static("public"))

// Chamando imagens guardadas na pasta "assets"
server.use(express.static("assets"))

// Configurando a template engine
server.set("view engine", "njk")
// Configurando o nunjucks
nunjucks.configure("views", { 
    express: server,
    autoescape: false
})

//adicionando rotas
server.get("/", function(req, res) {
    return res.render("courses", {cards: "cards", items: cards})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    const level = cards.find(function(card){
        return card.id === id
    })

    if (!level) {
        return res.render("not-found")
    }
    
    return res.render("courses", {cards: "hidden", changeRedirect: " active",item: level})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/rocketseat", function(req, res) {
    return res.render("rocketseat")
})

// Página não encontrada
server.use(function(req, res) {
    res.status(404).render("not-found");
})

// iniciando o servidor
server.listen(5000, function () {
    console.log('server is running')
})
