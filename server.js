//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// const rotas = {
//     "/": "Curso de Node.JS",
//     "/saudacao": "Hello World",
//     "/not-found": "Não encontrei nada!"
// }

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {"Content-type": "text/plain;charset=UTF-8"});
//     res.end(rotas[req.url]);
// });
 
app.listen(PORT, () => {
  console.log("----------------------------------------------------")
  console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
  console.log("----------------------------------------------------")
});