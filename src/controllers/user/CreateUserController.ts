import { Request, response, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService'


class CreateUserController{
    async handle(req: Request, res: Response){
        
        //pega os dados do body
        const { name, email, password } = req.body;

        //inicializando o serviço
        const createUserService = new CreateUserService();

        //executa o serviço
        //await para esperar o execute e prosseguir para linha de baixo
        const user = await createUserService.execute({
            name,
            email,
            password
        });

        //retorna para o usuário
        return res.json(user)
    }
}

export { CreateUserController }