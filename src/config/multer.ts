import crypto from 'crypto'; //para gerar um hash e as imagens não se repetirem
import multer from "multer"; // para imagens

import { extname, resolve } from 'path' //para importar os caminhos

export default{
    upload(folder: string){
        return{
            storage: multer.diskStorage({ 
                destination: resolve(__dirname, "..", "..", folder), //diretório da pasta que as imagens serão salvas
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex"); //gerando hash para não confundir nomes das imagens
                    const fileName = `${fileHash}-${file.originalname}` //hash gerado - nome da foto


                    return callback(null, fileName) //retornando com callback
                }
            })
        }
    }
}
