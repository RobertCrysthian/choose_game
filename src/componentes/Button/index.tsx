
import { LinkProps } from '@mui/material'
import './Button.css'



export default function Button({text, cor1, cor2, cor3, onClick, className}: {text:string, cor1?:boolean, cor2?:boolean, cor3?: boolean, onClick?: any, className?:string}){
    return(
        <>
            <button 
            className={`button ${cor1? 'cor1' : ''} 
            ${cor2? 'cor2' : ''} 
            ${cor3? 'cor3' : ''}`}
            onClick={onClick}
                >{text}
            </button>
        </>
    )
}