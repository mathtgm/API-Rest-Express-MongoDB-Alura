import RequisicaoIncorreta from "./RequesicaoIncorreta.js"

export class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro){
        const mensagensErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");

        super(`Os seguintes erros foram encontrado: ${mensagensErro}`);
    }
}

export default ErroValidacao;