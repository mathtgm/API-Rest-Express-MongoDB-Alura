# API Rest com Node.js e Express de um livraria :book:

### Requisitos para todas o projeto 
- **Docker**
- **MongoDB Atlas**

## Configuração
Antes de iniciar a API, na raiz do projeto deve haver o arquivo `.env` com a váriavel de ambiente `DB_CONNECTION_STRING=`, nessa váriavel é aonde inidicamos em que banco MongoDB ela conectará.

Exemplo:
```
DB_CONNECTION_STRING=mongodb+srv://usuario:senha@cluster0.okyxwek.mongodb.net/nomeBanco?retryWrites=true&w=majority
```

## Iniciando a API
Na raiz da API execute o seguinte comando:
```
docker compose up
```

Após executar o comando o container será iniciado e apresentará a seguinte mensagem de inicialização da API e conexão com o banco de dados.

````
----------------------------------------------------
Servidor iniciado na porta http://localhost:3000
----------------------------------------------------
Conexão com o banco feita com sucesso!
````

## Endpoints

#### Livro
| Descrição  | Requisição | Caminho |
| ------------- | ------------- | ------------- |
| Listar todos os livros  | GET  | `/livros` |
| Procurar livro por id  | GET  | `/livros/id`|
| Procurar livros por Editora | Query Parameters & GET | `/livros/busca?editora=NomeEditora` |
| Cadastrar livro | POST | `/livros` |
| Exluir Livro | DELETE | `/livros/id` |

#### Autor
| Descrição  | Requisição | Caminho |
| ------------- | ------------- | ------------- |
| Listar todos os livros  | GET  | `/autores` |
| Procurar livro por id  | GET  | `/autores/id`|
| Cadastrar livro | POST | `/autores` |
| Exluir Livro | DELETE | `/autores/id` |


