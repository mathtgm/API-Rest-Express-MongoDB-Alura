import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
  editora: { type: String, required: [true, "A editora é obrigatória"]},
  preco: { type: Number },
  paginas: { type: Number },
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