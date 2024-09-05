const { alugueis } = require("../data");

const buscarLivroPorId = (req, res) => {
  const { idLivro } = req.query;

  const resultado = alugueis.find((alugueis) => alugueis.idLivro == idLivro);

  if (!resultado) {
    return res.status(404).send({ mensagem: "Aluguel não encontrado. " });
  }
  res.status(200).send(resultado);
};
module.exports = buscarLivroPorId;
