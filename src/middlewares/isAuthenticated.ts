import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string; //id do usuário

}

export function isAuthenticated(req: Request, res: Response, next:NextFunction){

    //receber o token
    const authToken = req.headers.authorization;

    //caso não tenha recebido o token, a rota será NEGADA
    if(!authToken){
        return res.status(401).end();
    }

    //desconstruindo a string, só mostrando o token
    const [, token] = authToken.split(" ")

    //tratando um erro
    try{
        //validando esse token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET

        ) as PayLoad;

        //Recuperar o id do token e colocar dentro de uma varável user_id dentro do req.
        req.user_id = sub;

        //prosseguir se tiver ok
        return next()

    }catch(err){
        return res.status(401).end();
    }
}
