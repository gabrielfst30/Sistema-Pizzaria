import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string; //criação do request
}

class RemoveOrderService {
    async execute({ order_id }: OrderRequest) {

        //deletando a order_id da tabela order com os prisma.
        const order = await prismaClient.order.delete({
            where: {
                id: order_id

            }
        })
    }
}


export { RemoveOrderService }