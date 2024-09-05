let estudantes = [
    {
        id: 1,
        nome: "Maria Silva",
        matricula: "20210001",
        curso: "Engenharia",
        ano: 2021
    }
];

let alugueis = [
    {
        id: 1,
        idLivro: 1,
        idEstudante: 1,
        dataAluguel: "2024-08-01",
        dataDevolucao: "2024-08-15"
    }
];

let livros = [
    {
        id: 1,
        "titulo": "Dom Quixote",
        "autor": "Miguel de Cervantes",
        "ano": 1605,
        "genero": "Romance"
    }
];


module.exports = { estudantes, alugueis, livros };