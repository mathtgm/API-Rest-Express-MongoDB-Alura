import { autor } from "../models/Autor.js";

class AutorController {

  static listarAutores = async (req, res) => {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);    
    } catch (error) {
      res.status(500).json(`${error.message} - Falha na requisição`);   
    }
        
  }

  static listaAutorId = async (req, res) => {
    try {
      const id = req.params.id
      const findedAutor = await autor.findById(id);
      res.status(200).json(findedAutor);    
    } catch (error) {
      res.status(500).json(`${error} - Falha na requisição do autor`);   
    }
        
  }

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json("Autor atualizado!"); 
    } catch (error) {
            
    }
  }

  static cadastrarAutor = async (req, res) => {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json(novoAutor);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar Autor`
      });
    }
        
  }

  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json("Autor excluído");
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha na exclusão do autor`
      });
    }
  }

}

export default AutorController;