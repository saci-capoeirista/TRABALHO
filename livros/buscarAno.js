const livros = require('../data');

function buscarAno(req, res) {
    const { ano } = req.query;

    const resultados = livros.find(livro => livro.ano == ano);

    if (resultados) {
    res.status(200).send(resultados);
    } else {
    res.status(404).send({ message: 'Nenhum livro encontrado para esse ano.' });
    }
    }
module.exports = buscarAno