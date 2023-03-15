import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styles from '../Button/styles.module.scss'

import { FaSpinner} from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean, //opcional
    children: ReactNode, //é o quem dentro do componente por exeplo, "acessar"
}

export function Button({ loading, children, ...rest }: ButtonProps){
    return(
        <button className={styles.button}
        disabled={loading}//desativaro botão quando estiver carregando
        {...rest} //todo restante que for passado do botão, como o submit
        >

            {/* condição para o spinner aparecer somente enquanto estiver carregando */}
            { loading ? (
                    <FaSpinner color="#FFF" size={16}/>
                )
             : (
                <a className={styles.buttonText}>
                    {children}
                </a>
             )
            }
           
        </button>
    )
}