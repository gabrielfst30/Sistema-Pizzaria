import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategory";

class ListByCategoryController{
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string; //dizendo que o category_id é uma string

        //instanciando o service
        const listByCategory = new ListByCategoryService();

        //await para esperar a requisiçao
        const products = await listByCategory.execute({
            category_id
        });

        //retornando o json
        return res.json(products)
    }
}

export { ListByCategoryController }