import { ChangeEvent, useState } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import styles from './styles.module.scss';

import { canSSRAuth } from "@/utils/canSSRAuth";

import { FiUpload } from "react-icons/fi";

export default function Product(){
    
    //armazenar url
    const [avatarUrl, setAvatarUrl] = useState('');
    //armazenar a foto
    const [imageAvatar, setImageAvatar] = useState();

    
    //função de imagem
    function handleFile(e: any){

        //se não tiver arquivos
        if(!e.target.files){
            return;
        }
    
        //variável de armazenar arquivo 
        const image = e.target.files[0];

        //se não tiver imagem
        if(!image){
            return;
        }

        //se tiver imagem
        if(image.type === 'image/jpeg' || image.type === 'image/png'){

            //armazenando imagem
            setImageAvatar(image)
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));

        }

    }


    return(
        <>
            <Head>
                <title>Novo produto - Sujeito Pizzaria</title>
            </Head>
            <div>
                <Header/>

                <main className={styles.container}>
                    <h1>Novo produto</h1>

                    <form className={styles.form}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#FFF" />
                            </span>

                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile}/> 

                            {avatarUrl && (
                            
                            <img
                                className={styles.preview}
                                src={avatarUrl}
                                alt="Foto do produto"
                                width={250}
                                height={250}
                            />

                            )}

                        </label>

                        <select>
                            <option>
                                Bebida
                            </option>
                            <option>
                                Pizzas
                            </option>
                        </select>

                        <input 
                        type="text"
                        placeholder="Digite o nome do produto"
                        className={styles.input}
                        />

                        <input 
                        type="text"
                        placeholder="Preço do produto"
                        className={styles.input}
                        />

                        <textarea
                        placeholder="Descreva seu produto..."
                        className={styles.input}
                        />

                        <button className={styles.buttonAdd} type="submit">
                            Cadastrar
                        </button>

                    </form>
                </main>
            </div>
        </>
    )
}

//VERIFICAÇÃO SE O USUÁRIO TA LOGADO PARA ACESSAR ESSA ROTA
export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{
        props:{}
    }
})