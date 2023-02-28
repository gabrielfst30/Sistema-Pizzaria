import prismaClient from "../../prisma";

//criando o request
interface ProductRequest{
    category_id: string;
}

class ListByCategoryService{
    //recebendo o request
    async execute({ category_id }: ProductRequest){

        //pesquisando na tabela produto todas as coisas
        const findByCategory = await prismaClient.product.findMany({

            //condição onde category_id recebido for igual ao category_id do banco
            where:{
                category_id: category_id
            }
        })

        //tudo ok, retorne
        return findByCategory;
    }
}

export { ListByCategoryService }