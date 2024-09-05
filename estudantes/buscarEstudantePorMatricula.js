const { estudantes } = require('../data');

const buscarEstudantePorMatricula = (req, res) => {
    const { matricula } = req.query;

    const resultados = estudantes.find(estudante =>
        estudante.matricula == matricula);

    if (resultados == undefined) {
        return res.status(404).send({ message: 'matricula não encontrada.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarEstudantePorMatricula;