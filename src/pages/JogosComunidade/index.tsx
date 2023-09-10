import { Link } from "react-router-dom"
import "./JogosComunidade.css"


export default function JogosComunidade(){
    return(
        <section className="section_div_fundo">
            <div className="div_campo_fundo">
                <div className="div_link">
                    <Link to="1">Alguma coisa vai aqui</Link>
                </div>
                <div className="div_link">
                <Link to="2">Outro form kkkk</Link>
                </div>
                <div className="div_link">
                <Link to="3">Outro form kkkk</Link>
                </div>
            </div>
        </section>
    )
}