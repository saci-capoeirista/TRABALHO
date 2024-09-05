const { estudantes } = require('../data');

const buscarEstudantePorNome = (req, res) => {
    const { nome } = req.query;

    const resultados = estudantes.find(estudante =>
        estudante.nome == nome);

    if (resultados == undefined) {
        return res.status(404).send({ message: 'Nome não encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarEstudantePorNome;