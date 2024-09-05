const { estudantes } = require('../data')

const editarEstudante = (req, res) => {
    const { id } = req.params;
    const novoNome = req.body.nome;
    const novaMatricula = req.body.matricula
    const novoCurso = req.body.curso
    const novoAno = req.body.ano

    const estudante = estudantes.find((i) => i.id == id);

    if (!estudante) {
        return res.status(404).send({ mensagem: 'estudante não encontrado' });
    }
    estudante.nome = novoNome
    estudante.matricula = novaMatricula
    estudante.curso = novoCurso
    estudante.ano = novoAno

    res.status(200).send({
        mensagem: 'estudante atualizado com sucesso. ',
        estudante: estudante
    })
}
module.exports = editarEstudante;