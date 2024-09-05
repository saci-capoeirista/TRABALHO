const livros = require('../data');

function buscarPorgenero(req, res) {
const { genero } = req.query;
const resultados = livros.find(livro => livro.genero == genero);

if (resultados) {
res.status(200).send(resultados);
} else {
res.status(404).send({ message: 'Nenhum livro encontrado para esse genero.' });
}
}
module.exports = buscarPorgenero