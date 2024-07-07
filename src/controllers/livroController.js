import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static listarLivros = async (req, res) => {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);    
    } catch (error) {
      res.status(500).json(`${error.message} - Falha na requisição`);   
    }
        
  }

  // static async listarLivros (req, res) {
  //     try {
  //       const listaLivros = await livro.find({}).populate("autor").exec();
  //       res.status(200).json(listaLivros);
  //     } catch (erro) {
  //       res.status(500).json({ message: `${erro.message} - falha na requisição` });
  //     }
  // };

  static listarLivroId = async (req, res) => {
    try {
      const id = req.params.id
      const livro = await livro.findById(id);
      res.status(200).json(livro);    
    } catch (error) {
      res.status(500).json(`${error.message} - Falha na requisição do livro`);   
    }
        
  }

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json("Livro atualizado!"); 
    } catch (error) {
            
    }
  }

  static cadastrarLivro = async (req, res) => {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...req.body, autor: {...autorEncontrado._doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json(livroCompleto);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar Livro`
      });
    }
        
  }

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json("Livro excluído");
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha na exclusão do item`
      });
    }
  }

  static listarLivrosEditora = async (req, res) => {
    const editoraQuery = req.query.editora;
    try {
      const listaLivros = await livro.find({editora: editoraQuery});
      res.status(200).json(listaLivros);
    } catch (error) {
            
    }
  }

}

export default LivroController;