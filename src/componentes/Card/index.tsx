import Button from "../Button"
import "./Card.css"


export default function Card({name, image} : {name:string, image: string}){
    return(
        <section className="section_card">
            <div className="card">
                <div className="card_background">
                    <h1>{name}</h1>
                    <div className="div_image">
                        <img src={image} alt="imagem do card"/>
                    </div>
                </div>
            </div>
        </section>
    )
}