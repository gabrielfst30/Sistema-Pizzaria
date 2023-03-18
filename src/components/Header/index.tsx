import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

//icone logout
import { FiLogOut } from 'react-icons/fi'

//trazendo função de logout do auth
import { AuthContext } from '@/contexts/AuthContext'

export function Header(){

    //trazendo a funcionalidade signOut (deslogar)
    const { signOut } = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60}/>
                </Link>

            {/*MENU*/}
                <nav className={styles.menuNav}>
                    <Link href="/category">
                       Categoria
                    </Link>

                    <Link href="/product">
                       Cardápio
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}