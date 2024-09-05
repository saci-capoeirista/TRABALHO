const { estudantes } = require('../data')

function cadastrarEstudante(req, res) {
    console.log(req.body);
    const novoEstudante = {
        id: estudantes.length + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    }
    estudantes.push(novoEstudante)
    res.status(201).send({ mensagem: 'Estudante adicionado com sucesso. ', estudantes: novoEstudante })
}
module.exports = cadastrarEstudante;