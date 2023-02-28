import { Request, Response } from "express";
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        //recebendo o id do usuário
        const user_id = req.user_id

        //Instanciando o User Service
        const detailUserService = new DetailUserService();
        
        //executando o serviço no controller
        const user = await detailUserService.execute(user_id);

        return res.json(user);

    }
}

export { DetailUserController }