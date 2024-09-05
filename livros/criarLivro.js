const livros = require('../data')

function criarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: livros.length + 1,
        titulo: req.body.titulo
    }
    livros.push(novoLivro)
    res.status(201).send({ mensagem: 'Livro adicionado com sucesso. ', livro: novoLivro })
}
module.exports = criarLivro;