import Modal from 'react-modal';
import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi';

import { OrderItemProps } from '@/pages/dashboard';

interface ModalOrderProps{
    isOpen: boolean; // modal aberto
    onRequestClose: () => void; //fechar modal
    order: OrderItemProps[]; //trazendo tipagem 
}



export function ModalOrder({isOpen, onRequestClose, order}:ModalOrderProps){
    
    const customStyles ={
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            padding               : '30px',
            backgroundColor       : '#1d1d2e',
            borderRadius          : '10px',
            transform             : 'translate(-50%, -50%)'
        }
    }
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        >

        <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: 'transparent', border:0 }}
        >

            <FiX size={45} color='#f34748'/>
        </button>

        <div>

            <h2>Detalhes do pedido</h2>
            <span className={styles.table}>
                Mesa: <strong>{order[0].order.table}</strong>
            </span>

            {/*PERCORRENDO A ORDER COM MAP PARA MOSTRAR TODOS OS ITENS NO MODAL*/}
            {order.map( item => (
                <section key={item.id} className={styles.containerItem}>
                    <span>{item.amount} - <strong>{item.product.name}</strong></span>
                    <span className={styles.description}>{item.product.description}</span>
                </section>
            ))}


        </div>

        </Modal>
    )
}