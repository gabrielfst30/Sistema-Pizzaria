import prismaClient from "../../prisma";

//pedindo o ID do item
interface ItemRequest{
    item_id: string;
}

class RemoveItemService{
    async execute({ item_id }: ItemRequest){

        const order = await prismaClient.item.delete({
           //deletando o id do banco caso ele seja igual ao ID do excluido
            where:{
                id: item_id
            }
        })

        return order;
    }
}

export { RemoveItemService }