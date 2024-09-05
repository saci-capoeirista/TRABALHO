const { alugueis } = require("../data");

const buscarEstudantePorId = (req, res) => {
  const { idEstudante } = req.query;

  const resultado = alugueis.find(
    (alugueis) => alugueis.idEstudante == idEstudante
  );

  if (!resultado) {
    return res.status(404).send({ mensagem: "Aluguel não encontrado. " });
  }
  res.status(200).send(resultado);
};
module.exports = buscarEstudantePorId;