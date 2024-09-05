const { estudantes } = require('../data');

const buscarEstudantePorCurso = (req, res) => {
    const { curso } = req.query;

    const resultados = estudantes.filter(estudante =>
        estudante.curso == curso);

    if (resultados == undefined) {
        return res.status(404).send({ message: 'curso não encontrada.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarEstudantePorCurso;