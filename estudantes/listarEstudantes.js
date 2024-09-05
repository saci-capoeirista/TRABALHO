const { estudantes } = require('../data')

const listarEstudantes = (req, res) => {
    const { nome } = req.params
    const index = estudantes.find((e) => e.nome == nome);

    if (!index) {
        return res.status(404).send(' Estudante não encontrado. ')
    }
    res.status(200).send(estudantes)
}
module.exports = listarEstudantes;