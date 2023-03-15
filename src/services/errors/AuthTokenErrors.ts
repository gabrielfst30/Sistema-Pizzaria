//criando um erro personalizado
export class AuthTokenError extends Error{
    constructor(){
        super('Erro com a autenticação')
    }
}