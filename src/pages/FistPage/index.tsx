import { Link } from "react-router-dom"
import "./FirstPage.css"


export default function FistPage(){


    return(
        <section className="section_firstPage">
            <h1>O nome do projeto vai aqui</h1>

            <Link to="./form">Criar um game</Link>
            <Link to="./ingame">Jogar</Link>

        </section>
    )
}