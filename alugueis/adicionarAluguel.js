const { alugueis } = require("../data");

function adicionarAluguel(req, res) {
  const novoAluguel = {
    id: alugueis.length + 1,
    idLivro: req.body.idLivro,
    idEstudante: req.body.idEstudante,
    dataAluguel: req.body.dataAluguel,
    dataDevolucao: req.body.dataDevolucao
  };
  alugueis.push(novoAluguel);
  res.status(201).send({
    mensagem: "Aluguéis adicionado com sucesso. ",
    alugueis: novoAluguel,
  });
}
module.exports = adicionarAluguel;
