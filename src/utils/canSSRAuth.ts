import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult  } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "@/services/errors/AuthTokenErrors";



//funcao para paginas que só usuários logados podem ter acesso.
export function canSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@nextauth.token'];

        //Se não tem token o usuário volta para tela de login
        if(!token){
            return{
                redirect:{
                    destination:'/',
                    permanent:false,
                    
                }
            }
        }

        //CASO TENHA O TOKEN MAS DEU ALGUM ERRO, DESTRUA O COOKIE E VOLTE PARA TELA DE LOGIN
        try{
            return await fn(ctx);

            //limpo o cookie
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@nextauth.token')

                //redireciono para tela de login 
                return{
                    redirect:{
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}