const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

//Livros (ASSUNÇÃO)
const cadastrarEstudante = require('./estudantes/cadastrarEstudante');
const listarEstudantes = require('./estudantes/listarEstudantes');
const editarEstudante = require('./estudantes/editarEstudante');
const deletarEstudantes = require('./estudantes/deletarEstudantes');
const buscarEstudantePorNome = require('./estudantes/buscarEstudantePorNome');
const buscarEstudantePorMatricula = require('./estudantes/buscarEstudantePorMatricula');
const buscarEstudantePorCurso = require('./estudantes/buscarEstudantePorCurso');

app.post('/estudante', cadastrarEstudante);

app.get('/estudantes', listarEstudantes);

app.get('/estudantes/nome', buscarEstudantePorNome);

app.get('/estudantes/matricula', buscarEstudantePorMatricula);

app.get('/estudantes/curso', buscarEstudantePorCurso);

app.put('/estudante/:id', editarEstudante);

app.delete('/estudante/:id', deletarEstudantes);

/////////////////////////////////////////////////////////////////////////////////////

//Alugueis (ROTHSTEIN)
const adicionarAluguel = require("./alugueis/adicionarAluguel");
const listarAluguel = require("./alugueis/listarAluguel");
const atualizarAluguel = require("./alugueis/atualizarAluguel");
const deletarAluguel = require("./alugueis/deletarAluguel");
const buscarEstudantePorId = require("./alugueis/buscarEstudantePorId");
const buscarLivroPorId = require("./alugueis/buscaLivroPorId");
const buscarPorData = require("./alugueis/buscarPorData");

app.post("/aluguel", adicionarAluguel);

app.get("/alugueis", listarAluguel);

app.put("/aluguel/:id", atualizarAluguel);

app.delete("/aluguel/:id", deletarAluguel);

app.get("/alugueis/idEstudante", buscarEstudantePorId);

app.get("/alugueis/idLivro", buscarLivroPorId);

app.get("/alugueis/dataAluguel", buscarPorData);

/////////////////////////////////////////////////////////////////////////////////////


//Livros (LEONARDO)
const listar = require('./livros/listar');
const atualizarLivro = require('./livros/atualizarLivro');
const deletarLivro = require('./livros/deletarLivro');
const criarLivro = require('./livros/criarLivro');
const buscarPortitulo = require('./livros/buscarPortitulo');
const buscarPorautor = require('./livros/buscarPorautor');
const buscarPorgenero = require('./livros/buscarPorgenero');
const buscarAno = require('./livros/buscarAno');

app.post('/livro', criarLivro);

app.get('/livroslist', listar);

app.put('/livro/:id', atualizarLivro);

app.delete('/livro/:id', deletarLivro);

app.get('/livros/titulo', buscarPortitulo);

app.get('/livros/autor', buscarPorautor);

app.get('/livros/genero', buscarPorgenero);

app.get('/livros', buscarAno);

app.get('/', (req, res) => {
    res.send('Servidor está funcionando meu garoto! ');
});

app.listen(port, () => {
    console.log(`Server rodando em localhost:${port} `);
});
