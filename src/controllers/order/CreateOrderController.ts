import { Request, Response } from "express";
import { CreateOrderService } from '../../services/order/CreateOrderService'

class CreateOrderController{
    async handle(req: Request, res: Response){
        //pedindo table e name com request
        const { table, name } = req.body;

        //instanciando o service
        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            table, 
            name
        })

        //retornando o json do usuário
        return res.json(order);
    }        
}


export { CreateOrderController }