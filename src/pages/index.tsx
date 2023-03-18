import Head from "next/head" 
import Image from "next/image" //importando tag de imagem do next
import styles from '../../src/styles/home.module.scss'
import { FormEvent, useContext, useState } from 'react'//importando um hook para poder usar o contexto 
import logoImg from '../../public/logo.svg'

//importando componentes
import { Input } from '../components/ui/Input'
import { Button } from "@/components/ui/Button"

//importanto o contexto
import { AuthContext } from "@/contexts/AuthContext"
import { ToastContainer, toast } from 'react-toastify';

//importando link
import Link from "next/link";

//server side import
import { GetServerSideProps } from "next"
import { canSSRGuest } from "@/utils/canSSRGuest"

export default function Home() {
  //pegando a propriedade de login
  const { signIn } = useContext(AuthContext)

  //armazenando email
  const [email, setEmail] = useState('')
  
  //armazenando senha
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)


  //função 
  async function handleLogin(event: FormEvent){//recebendo onSubmit pelo FormEvent
    event.preventDefault();//para a página não ser recarregada apoś o submit

    //verificar se o usuário de fato informou algum dado
    if(email === '' || password === ''){
      toast.error("Preencha os campos!")
      return;
    }

    //
    setLoading(true);

    //recebendo o useState armazenado para fazer login
    let data = {
      email,
      password,
    }

    await signIn(data)

    //fez login o loading roda
    setLoading(false);
  }

  return(
    <>
      <Head>
        <title>SujeitoPizza - Faça seu Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}> {/*mandando o submit para a função handleLogin*/}
            <Input
              placeholder="Digite seu email"  
              type="text"
              value={email}
              onChange={ (e) => setEmail(e.target.value) } //abrindo uma função anonima de evento para enviar o valor digitado para o useState
            />

            <Input
              placeholder="Digite seu senha" 
              type="password" 
              value={password}
              onChange={ (e) => setPassword(e.target.value) } //abrindo uma função anonima de evento para enviar o valor digitado para o useState
            />

            <Button
              type="submit"
              loading={loading}
            >
            
              Acessar
            </Button>
          </form>

          <Link legacyBehavior href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>

  )
}


export const getServerSideProps = canSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})