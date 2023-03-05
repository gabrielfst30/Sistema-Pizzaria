import prismaClient from "../../prisma";


class ListOrdersService{
    async execute(){

        const orders = await prismaClient.order.findMany({
            where:{
                draft:false,
                status:false,

            },
            orderBy:{ //verificando do mais recente pro menos recente
                create_at: 'desc' 
            }
        })

        return orders;
    }
}

export { ListOrdersService }