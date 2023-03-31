import { transformDocument } from "@prisma/client/runtime";
import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){
        //consultando o banco de dados para procurar um id igual o do usuário solicitado.
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return { user }

    }
}

export { DetailUserService }