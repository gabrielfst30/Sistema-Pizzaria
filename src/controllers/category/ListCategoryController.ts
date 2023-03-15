import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        
        const listCategoryService = new ListCategoryService();
        
        //esperando a listCategoryService ser executada
        const category = await listCategoryService.execute();

        //retorna json do usuário
        return res.json(category);

    }
}

export { ListCategoryController }