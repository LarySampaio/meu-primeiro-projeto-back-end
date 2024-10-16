const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
  response.json({
    nome: "Larissa Sampaio",
    imagem:
      "https://media.licdn.com/dms/image/v2/D5603AQEBPB7LmjAKHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715013586609?e=1732147200&v=beta&t=C75a_fGoEcJxMwFikcbJ3COBwCzApMzdbv907hmaPJQ",
    minibio: "Desenvolvedora",
  });
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}
app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);
