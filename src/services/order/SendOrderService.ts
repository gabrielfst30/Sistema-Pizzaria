import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}


class SendOrderService{
    async execute({ order_id }: OrderRequest){ //importando a interface e recebendo o objeto que sera chamado
        const order = await prismaClient.order.update({     //update para atualizar algo na tabela
            where:{
                id: order_id
            },
            //atualizando o draft para falso para que a order saia do rascunho e se torne um pedido
            data:{
                draft: false
            }

        })
        return order;
    }
}

export { SendOrderService }