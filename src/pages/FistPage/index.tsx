import { Link } from "react-router-dom"
import "./FirstPage.css"


export default function FistPage(){


    return(
        <section className="section_firstPage">
            <h1>O nome do projeto vai aqui</h1>

            <div className="div_links">
                <Link to="./form">Criar um game</Link>
                <Link to="./ingame">Jogar</Link>
                <Link to="#">Instruções</Link>
                <Link to="#">Sobre o dev</Link>
            </div>

        </section>
    )
}