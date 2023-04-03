import { useState } from 'react'
import { canSSRAuth } from "@/utils/canSSRAuth"
import Head from "next/head"
import styles from "./styles.module.scss";

import { Header } from '../../components/Header'
import { FiRefreshCcw } from 'react-icons/fi'

import { setupAPIClient } from "@/services/api";

import { ModalOrder } from '@/components/ModalOrder';

//react-modal
import Modal from 'react-modal';

type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface HomeProps{
    orders: OrderProps[];
}

export type OrderItemProps = {
    id: string;
    amount: number;
    order_id: string;
    product_id: string;
    product:{
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    }
    order:{
        id: string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}


export default function Dashboard({ orders }: HomeProps){

    const [ orderList, setOrderList ] = useState(orders || [])

    const [ modalItem, setModalItem ] = useState<OrderItemProps[]>()
    const [ modalVisible, setModalVisible ] = useState(false);

    function handleCloseModal(){
         setModalVisible(false);   
    }

    async function handleModal(id: string){
        const apiClient = setupAPIClient();

        const response = await apiClient.get('/orders/detail',{
            params:{
                order_id: id
            }
        })

        console.log(response)

        setModalItem(response.data)
        setModalVisible(true)
    }

    async function handleFinishItem(id: string){
        const apiClient = setupAPIClient();
        //atualizando o id 
        await apiClient.put('/order/finish',{
           order_id: id,
        })

        //buscando todas as orders
        const response = await apiClient.get('/orders');
        //setando
        setOrderList(response.data);

        setModalVisible(false);
    }

    async function handleRefreshOrder() {
        const apiClient = setupAPIClient();

        //buscando todas as orders
        const response = await apiClient.get('/orders');
        setOrderList(response.data);
        
        console.log("retornando")
    }

    Modal.setAppElement('#__next');

    return(
       <>
       <Head>
        <title>Painel - Sujeito Pizzaria</title>
       </Head>
        <div>
            <Header/>

        <main className={styles.container}>
            <div className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button className={styles.buttonUpdate} onClick={handleRefreshOrder}>
                    <FiRefreshCcw size={25} color="#3fffa3"/>
                </button>
            </div>

            <article className={styles.listOrders}>

                {/*SE A LISTA ESTIVER VAZIA, APARECERÁ A SEGUINTE MSG*/}
                {orderList.length === 0 &&(
                    <span className={styles.emptyList}>
                        <h2>Nenhum pedido encontrado...</h2>
                    </span>
                )}
                
                {orderList.map(item => (
                    <section key={item.id} className={styles.orderItem}>
                        <button onClick={() => handleModal(item.id)}>
                            <div className={styles.tag}></div>
                                <span>Mesa {item.table}</span>
                        </button>
                    </section>
                ))}

            </article>
        </main>

        { modalVisible && (
            <ModalOrder
            isOpen={ modalVisible }
            onRequestClose={ handleCloseModal }
            order={ modalItem }
            handleFinishOrder={ handleFinishItem }
            
            />
        )}

        </div>
       </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/orders')

    //console.log(response.data)


    //retorna as propriedades do contexto
    return{
        props: {
            orders: response.data
        }
    }
})