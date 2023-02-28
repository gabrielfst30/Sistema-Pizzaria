import { Request, Response } from "express";
import { RemoveOrderService } from '../../services/order/RemoveOrderService'


class RemoveOrderController{
    async handle(req : Request, res: Response){
        const order_id = req.query.order_id as string //definindo que o request será uma query do tipo string

        const removeOrder = new RemoveOrderService(); //instaciando o service

        const order =  await removeOrder.execute({//executando
            order_id
        });

        return res.json(order);//retornando o json
    }
}

export { RemoveOrderController }