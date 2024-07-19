import mongoose from "mongoose";
import ErroBase from "../erros/erroBase.js";
import RequisicaoIncorreta from "../erros/RequesicaoIncorreta.js";
import ErroValidacao from "../erros/erroValidacao.js";

function manipuladorErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else if(erro instanceof ErroBase) {
        erro.enviarResposta(res);
    } else {
        console.log(erro);
        new ErroBase().enviarResposta(res);
    }

}

export default manipuladorErros;