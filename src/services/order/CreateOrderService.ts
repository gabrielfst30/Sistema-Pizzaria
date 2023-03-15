//Importando o ORM para acessar o banco
import prismaClient from "../../prisma";

interface OrderRequest{
    table: number;
    name: string;
}

class CreateOrderService{
    async execute({ table, name}: OrderRequest){
    
        //Criando dentro da table do banco de dados
        const order = await prismaClient.order.create({
            data:{
                table: table,
                name: name
            }
        })


        return order;

    }
}

export { CreateOrderService }