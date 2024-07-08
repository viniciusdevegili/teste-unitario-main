const express = require("express");
const routers = require("./src/routes/route.js");

const app = express();

app.use(express.json());

app.use(routers);

const PORT = 3000; 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
