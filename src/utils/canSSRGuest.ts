import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPathsResult } from "next";
import { parseCookies } from "nookies";

//função para páginas que só pode ser acessadas por visitantes - POR USUÁRIOS QUE NÃO ESTÃO LOGADOS
export function canSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);

        //Se tentar acessar a página tendo um login salvo, redirecionanamos para o dashboard
        if(cookies['@nextauth.token']){
            return{
                redirect:{
                    destination: '/dashboard',
                    permanent: false,

                }
            }
        }

        return await fn(ctx);

    }

}