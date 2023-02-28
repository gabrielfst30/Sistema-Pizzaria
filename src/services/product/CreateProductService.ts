import prismaClient from "../../prisma";

//criando o objeto
interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;

}

//criando o service
class CreateProductService {
    async execute({name, price, description, banner, category_id}: ProductRequest) {

        //acessando nossa tabela product e criando algo
        const product = await prismaClient.product.create({
            //criando no banco
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })

        return product;


    }
}

export { CreateProductService }