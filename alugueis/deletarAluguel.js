const { alugueis } = require("../data");

const deletarAluguel = (req, res) => {
  const { id } = req.params;
  const index = alugueis.findIndex((e) => e.id == id);

  if (index === -1) {
    return res.status(404).send("aluguel não encontrado. ");
  }

  const aluguelDeletado = alugueis.splice(index, 1)[0];

  res
    .status(200)
    .send({
      mensagem: "Aluguel deletado com sucesso. ",
      alugueis: aluguelDeletado,
    });
};
module.exports = deletarAluguel;
