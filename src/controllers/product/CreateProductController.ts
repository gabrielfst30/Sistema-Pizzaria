import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'


class CreateProductController{
    async handle(req: Request, res: Response){
        const{ name, price, description, category_id} = req.body

        const createProductService = new CreateProductService();

        //verificação de erro se a imagem foi enviada
        if(!req.file){
            throw new Error("error upload file")
        }else{
            //acessando o file
            const {originalname, filename: banner } = req.file;

            

        //await: espera nossa resposta para depois enviar para o usuário
        const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id
        });

        return res.json(product)

        }
    }
}

export { CreateProductController }