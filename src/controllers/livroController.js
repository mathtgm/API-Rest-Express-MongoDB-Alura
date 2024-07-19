import { livros, autores } from "../models/index.js";
import RequisicaoIncorreta from "../erros/RequesicaoIncorreta.js";
class LivroController {

  static listarLivros = async (req, res, next) => {
    try {

      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();

    } catch (erro) {
      next(new RequisicaoIncorreta());
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .exec();

      res.status(200).send(livroResultados);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndDelete(id);

      res.status(200).send({ message: "Livro removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {

        const livrosResultado = await livros.find(busca);

        res.status(200).send(livrosResultado);
      } else {

        res.status(200).send([]);

      }

    } catch (erro) {
      next(erro);
    }
  };



}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = editora;

  if (titulo) busca.titulo = titulo;

  // GTE Greater Than or Equal (Maior ou igual)
  if (minPaginas) busca.numeroPagina.$gte = minPaginas;
  //LTE LESS Than or Equal (Menor ou igual)
  if (maxPaginas) busca.numeroPagina.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {

      busca.autor = autor._id;

    } else {

      busca = null;

    }

  }

  return busca;

}

export default LivroController;