const livros = require('../data');

function buscarPortitulo(req, res) {
const { titulo } = req.query;
const resultados = livros.find(livro => livro.titulo == titulo);

if (resultados) {
res.status(200).send(resultados);
} else {
res.status(404).send({ message: 'Nenhum livro encontrado para esse titulo.' });
}
}
module.exports = buscarPortitulo