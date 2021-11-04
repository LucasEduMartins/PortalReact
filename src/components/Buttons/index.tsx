import {ButtonHTMLAttributes} from 'react';
import "./styles.scss"
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> 

export function ButtonBlock(props: ButtonProps){
    return (
        <button className="button-block" {...props}>{props.children}</button>
    )
}