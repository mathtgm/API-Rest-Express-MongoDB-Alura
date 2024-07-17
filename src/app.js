import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => console.error("Erro de conexão: ", erro));
conexao.once("open", () => console.log("Conexão com o banco feita com sucesso!"));

const app = express();
app.use(express.json());

routes(app);

app.use(manipulador404);

// Middleware para manipular erros
app.use((erro, req, res, next) => {
    manipuladorErros(erro, req, res, next);
});

// app.get('/livros', (req, res, next) => {
//     console.log("Middleware registrado no GET da rota /livros");
//     next();
// });

export default app;
