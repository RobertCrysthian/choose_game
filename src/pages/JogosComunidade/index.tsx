import { Link } from "react-router-dom"
import "./JogosComunidade.css"
import escolhas from './GameEspecifico/Escolhas.json'

export default function JogosComunidade(){


    const aleatorio = (array:number) => Math.floor(Math.random()* ((escolhas[array].length-1) - 1 + 1)) + 1

    console.log(escolhas[1][aleatorio(1)].mediaLink)

    return(
        <section className="section_div_fundo">
            <div className="div_campo_fundo">
                <div className="div_link">
                    <Link to="1">
                        <h1>Overwatch Characters</h1>
                        <img src={escolhas[1][aleatorio(1)].mediaLink} alt="Imagem do card"/>
                    </Link>
                </div>
                <div className="div_link">
                    <Link to="2">
                        <h1>Sei lá man</h1>
                        <img src={escolhas[2][aleatorio(2)].mediaLink} alt="Imagem do card"/>
                    </Link>
                </div>
                <div className="div_link">
                    <Link to="3">
                        <h1>Outro form kkkk</h1>
                        <img src={escolhas[2][aleatorio(2)].mediaLink} alt="Imagem do card"/>
                    </Link>
                </div>

            </div>
        </section>
    )
}