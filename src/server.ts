import express, { Request, Response, NextFunction} from 'express'
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes'


//app será nosso express
const app = express();

//definindo o tipo de dado pro express
app.use(express.json())

//para qualquer URL e IP fazer requisição na nossa API
app.use(cors())

//usando a router
app.use(router)

//criando uma middleware com rota estatica para mostrar as imagens banner salvas dos produtos
app.use( 
    '/files',
    express.static(path.resolve(__dirname, "..", 'tmp'))
)

//usando tratador de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        //Se for uma instancia do tipo error
        return res.status(400).json({
            error:err.message
        })

    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

//definindo porta
app.listen(8888, () => console.log("BORA PORRA!"))





