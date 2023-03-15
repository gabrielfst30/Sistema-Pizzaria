import { hash } from 'bcryptjs';
import prismaClient from '../../prisma'


interface UserRequest{
    name: string;
    email: string;
    password: string;

}

//classe que retorna true quando o usuário tiver sido criado 
class CreateUserService{
    async execute({name, email, password}: UserRequest){
        
       // verificar se ele enviou um email
       if(!email){
        throw new Error("Email incorrect")
        
       }
       //consultando o banco de dados para verificar se o email existe
       const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
       })

       //verificando se o usuário existe
       if(userAlreadyExists){
        throw new Error("User already exists")
       }

       //criando o password hash
       const passwordHash = await hash(password, 8)
       
       //cadastrando um usuário no banco de dados
       const user = await prismaClient.user.create({
        data:{
            name: name,
            email: email,
            password: passwordHash,
    
        }
       })
        
       return user
    }
}

export {CreateUserService}