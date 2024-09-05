const livros = require('../data')

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;
    const novoAutor = req.body.autor
    const novoAno = req.body.ano
    const novoGenero = req.body.novoGenero

    const livro = livros.find((i) => i.id == id);

    if (!livro) {
        return res.status(404).send({ mensagem: 'livro não encontrado' });
    }
    livro.titulo = novoTitulo
    livro.autor = novoAutor
    livro.ano = novoAno
    livro.genero = novoGenero
    res.status(200).send({
        mensagem: 'Livro atualizado com sucesso. ',
        livros: livro
    })
}
module.exports = atualizarLivro;