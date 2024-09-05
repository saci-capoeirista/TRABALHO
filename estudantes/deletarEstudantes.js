const { estudantes } = require('../data')

const deletarEstudantes = (req, res) => {
    const { id } = req.params
    const index = estudantes.findIndex((c) => c.id == id);

    if (index === -1) {
        return res.status(404).send(' Estudante não encontrado. ')
    }

    const estudanteDeletado = estudantes.splice(index, 1)[0]
    res.status(200).send({
        mensagem: 'estudante deletado com sucesso',
        estudante: estudanteDeletado
    })
}
module.exports = deletarEstudantes;