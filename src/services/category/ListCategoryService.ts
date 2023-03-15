import prismaClient from "../../prisma";


class ListCategoryService {
    async execute() {

        //Consultando no banco todos os itens que existe com o 'findMany'
        const category = await prismaClient.category.findMany({
            //selecionando apenas o id do user e o nome
            select: {
                id: true,
                name: true
            }
        })

        return category;

    }
}


export { ListCategoryService }