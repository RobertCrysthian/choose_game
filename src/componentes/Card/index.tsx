import Button from "../Button"
import "./Card.css"


export default function Card({name, image, className} : {name:string, image: string, className: string}){
    return(
        <section className={`section_card ${className}`} >
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