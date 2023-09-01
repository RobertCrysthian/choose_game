
import './Button.css'



export default function Button({text, red, yellow, blue, onClick}: {text:string, red?:boolean, yellow?:boolean, blue?: boolean, onClick?: any}){
    return(
        <>
            <button 
            className={`button ${red? 'red' : ''} 
            ${yellow? 'yellow' : ''} 
            ${blue? 'blue' : ''}`}
            onClick={onClick}
                >{text}
            </button>
        </>
    )
}