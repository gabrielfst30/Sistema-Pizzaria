import { TextareaHTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

//para usar atributos html como placeholder
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}: InputProps){ //rest para pegar todas as propriedades do input
    return(
        <input className={styles.input} {...rest} />//fazemos isso para usar propriedades individuais/>
    )
}

export function TextArea({...rest}: TextAreaProps){ //rest para pegar todas as propriedades do input
    return(
        <textarea className={styles.input} {...rest}></textarea> //fazemos isso para usar propriedades individuais/>
    )
}
