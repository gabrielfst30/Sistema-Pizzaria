import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies' //paga pegar os cookies
import { AuthTokenError } from './errors/AuthTokenErrors'; //importanto o erro personalizado

//importando a funçao de deslogar usuário
import { signOut } from '@/contexts/AuthContext';

export function setupAPIClient(ctx = undefined) {//contexto indefinido caso o usuário não passe nada
    let cookies = parseCookies(ctx); //pegando os cookies

    //criando o axios para configurar a api
    const api = axios.create({
        baseURL: 'http://localhost:8888/',//pegando a url base
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}` //pegando o token para definir a sessão pelos cookies(autorização de login)
        }
    })

    //caso a API de erro
    api.interceptors.response.use(response => {
        return response;
        //caso dê errado
    }, (error: AxiosError) => {
        
        //qualquer erro 401 (nao autorizado) devemos deslogar o usuário   
        if (error.response!.status === 401) {
            
          //chamando função para deslogar o usuário
          if (typeof window !== undefined) {
                signOut();//deslogando usuário
        } else {
            //retornando função de erro
            return Promise.reject(new AuthTokenError())
        }
        }

        return Promise.reject(error);
    })

    return api;
} 