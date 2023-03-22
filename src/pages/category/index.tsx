import { FormEvent, useState } from 'react'
import Head from "next/head"
import { Header } from '../../components/Header'
import styles from './styles.module.scss'

import { setupAPIClient } from '@/services/api'
import { toast } from 'react-toastify'

import { canSSRAuth } from '../../utils/canSSRAuth'

export default function Category(){
    const [name, setName] = useState('')

    //pegando cadastro de categoria
    async function handleRegister(event: FormEvent){
        event.preventDefault();

        //nome categoria for vazio
        if(name == ''){
            return alert("Insira o nome da categoria");
        }

        //nome da categoria for preenchido
        const apiClient = setupAPIClient();
        await apiClient.post('/category',{
            name:name
        })


        toast.success("Categoria cadastrada com sucesso!")
        setName('')
        
    }


    return(
        <>
            <Head>
                <title>Nova categoria - Sujeito Pizzaria</title>
            </Head>
            <div>
                <Header/>
                <main className={styles.container}>
                    <h1>Cadastrar categorias</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input type="text"
                        placeholder="Digite o nome da categoria"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>

                </main>
            </div>
        </>
    )

}

//VERIFICAÇÃO SE O USUÁRIO TA LOGADO PARA ACESSAR ESSA ROTA
export const getServerSideProps = canSSRAuth(async (ctx) =>{

    return{
        props: {}
    }

})