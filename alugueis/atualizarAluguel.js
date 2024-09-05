const { alugueis } = require("../data");

const atualizarAluguel = (req, res) => {
  const { id } = req.params;
  const novoIdLivro = req.body.idLivro;
  const novoIdEstudante = req.body.idEstudante;
  const novaDataAluguel = req.body.dataAluguel;
  const novaDataDevolcao = req.body.dataDevolucao;

  const aluguel = alugueis.find((g) => g.id == id);

  if (!aluguel) {
    return res.status(404).send({ mensagem: "aluguel não encontrado. " });
  }

  aluguel.idLivro = novoIdLivro;
  aluguel.idEstudante = novoIdEstudante;
  aluguel.dataAluguel = novaDataAluguel;
  aluguel.dataDevolucao = novaDataDevolcao;
  res.status(200).send({ mensagem: "Aluguel atualizado com sucesso", aluguel: aluguel });
};
module.exports = atualizarAluguel;
