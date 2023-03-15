import prismaClient from "../../prisma";

//objeto que será pedido na requisição 
interface CategoryRequest {
    name: string;
}


class CreateCategoryService {
    //recebendo o objeto
    async execute({ name }: CategoryRequest) {

        //validando o nome do objeto recebido
        if (name === '') {
            throw new Error('Name invalid')
        }

        //consultando o banco de dados para a criação do name
        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        })

        return category;

    }
}

export { CreateCategoryService }