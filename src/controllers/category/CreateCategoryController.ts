import {Request, Response} from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController{
    async handle(req: Request, res:Response){
        const { name } = req.body; 

    //inicializando o service   
    const createCategoryService = new CreateCategoryService();
    
    //execute o service
    const category = await createCategoryService.execute({
        name
    });

    //retornar o json
    return res.json(category);

    }
}

export { CreateCategoryController }