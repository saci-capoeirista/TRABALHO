const livros = require('../data')

const listar = (req, res) => {
    res.status(200).send(livros)
}
module.exports = listar;