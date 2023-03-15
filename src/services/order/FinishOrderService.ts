import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class FinishOrderService{
    async execute({ order_id }: OrderRequest){

        //atualizando no banco de dados com update
        const order = await prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{//status vai de false para true.
                status: true,
            }
        })

        return order;
    }
}

export { FinishOrderService }