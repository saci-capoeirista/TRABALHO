const { alugueis } = require("../data");

const listarAluguel = (req, res) => {
  res.status(200).send(alugueis);
};
module.exports = listarAluguel;
