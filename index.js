const express = require("express") // importando o express para o index.js

const server = express(); // Chamando o express para o servidor

server.use(express.json()) // Função para reconhecer informações JSON

const dispensa = ["Arroz", "Feijão", "Macarrão", "Biscoito", "Salgadinho", "Tempero", "Chá", "Extrato de tomate", "Cuzcuz", "Açúcar"];

// Retornando um Alimento: (GET)
server.get("/dispensa/:id", (req,res) =>{
    const {id} = req.params;
    return res.json(dispensa[id]);
});

// Retornando todos os Alimentos: (GET)
server.get("/dispensa", (req,res) =>{
    return res.json(dispensa);
});

// Criar um novo Alimentos: (POST)
server.post("/dispensa", (req,res) => {
    const { alimento } = req.body;
    dispensa.push(alimento);
    res.status(201);
    return res.json(dispensa);
});

// Atualizar um Alimentos: (PUT)
server.put("/dispensa/:id", (req,res) => {
    const {id} = req.params;
    const {alimento} = req.body;

    dispensa[id] = alimento;

    return res.json(dispensa);
});

// Deletando um alimento: (DELETE)
server.delete("/dispensa/:id", (req,res) =>{
    const {id} = req.params;

    dispensa.splice(id, 1);
    return res.json({Message: "O Alimento foi deletado."});
});


server.listen(8080); // Porta que vai ser utilizada para verificação - Geralmente é o 8080