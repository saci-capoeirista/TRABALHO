const livros = require('../data')

const deletarLivro = (req, res) => {
    const { id } = req.params
    const index = livros.findIndex((c) => c.id == id);

    if (index === -1) {
        return res.status(404).send('Livro não encontrado. ')
    }

    const livroDeletado = livros.splice(index, 1)[0]
    res.status(200).send({
        mensagem: 'livro deletado com sucesso',
        livro: livroDeletado
    })
}
module.exports = deletarLivro