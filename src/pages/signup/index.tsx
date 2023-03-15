import { useState, FormEvent, useContext } from "react"
import Head from "next/head" 
import Image from "next/image" //importando tag de imagem do next
import styles from '../../../src/styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

//importando componentes
import { Input } from '../../components/ui/Input'
import { Button } from "@/components/ui/Button"

//importanto autenticação de usuário
import { AuthContext } from "@/contexts/AuthContext"

//importando link
import Link from "next/link";

export default function SignUp() {
  const { signUp } = useContext(AuthContext)


  //pegando os dados de registro de usuário
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [loading, setLoading] = useState(false)
  
  //um evento do onsubmit
  async function handleSignUp(event: FormEvent) {
    event.preventDefault();//pra não atualizar a página

    //verificação se os inputs foram preenchidos
    if(name === '' || email === '' || password === ''){
      alert("PREENCHA TODOS OS CAMPOS")
      return;
    }

    setLoading(true)

    //salvando os dados de cadastro
    let data = {
      name,
      email,
      password
    }

    await signUp(data)

    setLoading(false)

  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>

          <form onSubmit={handleSignUp}> {/*função handle SignUp para o processamento de informações*/}
          <Input
              placeholder="Digite seu nome"  
              type="text"
              value={name} //atribuindo o value do use state
              onChange= {(e) => setName(e.target.value)} //setando após ter recebido um valor
            />
            <Input
              placeholder="Digite seu email"  
              type="text"
              value={email} //atribuindo o value do use state
              onChange= {(e) => setEmail(e.target.value)} //setando após ter recebido um valor
            />
            <Input
              placeholder="Digite seu senha" 
              type="password" 
              value={password} //atribuindo o value do use state
              onChange= {(e) => setPassword(e.target.value)} //setando após ter recebido um valor
            />

            <Button
              type="submit"
              loading={loading}
            >
            
              Cadastrar
            </Button>
          </form>

          <Link legacyBehavior href="/">
            <a className={styles.text}>Já possui uma conta? Faça login!</a>
          </Link>

        </div>
      </div>
    </>

  )
}
