import { Request, Response } from "express"
import { FinishOrderService } from "../../services/order/FinishOrderService"

class FinishOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body //corpo da requisição

        const finishOrderService = new FinishOrderService();

        //espera a finishOrderService ser executada, para chamar o res order_id 
        const order = await finishOrderService.execute({
            order_id
        })

        //devolvendo para mostrar o json.
        return res.json(order)
    }

}

export { FinishOrderController }