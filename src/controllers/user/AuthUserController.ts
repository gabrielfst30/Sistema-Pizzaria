import { Request, Response } from "express";
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;
        
        //instanciando em uma variável
        const authUserService = new AuthUserService      

        //inicializando
        const auth =  await authUserService.execute({
            email, 
            password
        });

        return res.json(auth)
    }
}

export { AuthUserController }