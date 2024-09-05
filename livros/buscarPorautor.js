const livros = require('../data');

function buscarPorautor(req, res) {
const { autor } = req.query;
const resultados = livros.find(livro => livro.autor == autor);

if (resultados) {
res.status(200).send(resultados);
} else {
res.status(404).send({ message: 'Nenhum livro encontrado para esse autor.' });
}
}
module.exports = buscarPorautor