import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
  editora: { 
    type: String, 
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: "A editora {VALUE} não é um valor permitido"
    }
  },
  preco: { type: Number },
  paginas: { 
    type: Number, 
    validate: {
      validator: (value) => {
        return value >= 10 && value <= 5000
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    }
  },
  //autor: autorSchema
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true,"O autor(a) é obrigatório"]}
  }, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;

// const livroSchema = new mongoose.Schema({
//     id: { type: mongoose.Schema.Types.ObjectId },
//     titulo: { type: String, required: true },
//     editora: { type: String },
//     preco: { type: Number },
//     paginas: { type: Number },
//     autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
//    }, { versionKey: false });