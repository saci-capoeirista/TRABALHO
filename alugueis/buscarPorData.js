const { alugueis } = require("../data");

const buscarPorData = (req, res) => {
  const { dataAluguel } = req.query;

  const resultado = alugueis.find(
    (alugueis) => alugueis.dataAluguel == dataAluguel
  );

  if (!resultado) {
    return res.status(404).send({ mensagem: "Aluguel não encontrado. " });
  }
  res.status(200).send(resultado);
};
module.exports = buscarPorData;