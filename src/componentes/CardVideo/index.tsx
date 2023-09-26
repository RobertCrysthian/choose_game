import '../Card/Card.css'

export default function CardVideo({name, link, className} : {name:string, link:string, className?:string}) {
    return(
        <section className={`"section_card" ${className}`} >
            <div className="card">
                <div className="card_background">
                    <h1>{name}</h1>
                    <div className="div_image">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
