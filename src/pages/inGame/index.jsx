import axios from "axios";
import Button from "../../componentes/Button";
import Card from "../../componentes/Card";
import './InGame.css'
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";

export default function InGame(){



    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    

    
    var escondido = true

    const [data, setData] = useState([])

    const [array, setArray] = useState([])



    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(response => setData(response.data))
    }, [])

    
    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(response => setId(response.data.length+1))
    }, [])


    const [id, setId] = useState(0)

    const clickButton =(e) => {
            setValor1(valor1 + 2);
            setValor2(valor2 + 2);
        var novoItem = {
            nome: e.nome,
            link: e.link,
            video: e.video,
            id:id
        }

        setArray([...array, novoItem] )
        setId(id+1)
    }



    var elementosTela = data.filter((e) => {
        return e.id === valor1 || e.id === valor2
    })

    var elementosTela2 = array.filter((e) => {
        return e.id === valor1 || e.id === valor2
    })


    if(valor1 > data.length){
        escondido=false

    }
    console.log(array)

    return(
        <section>
            <div className="div_inGame">
                <div className="div_elementos_tela">
                    {elementosTela.map((e) => {
                        if(e.video == true){
                            return(
                                <>
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <div className="div_botao">
                                        <Button text="Escolher" onClick={() => clickButton(e)}/>
                                    </div>
                                </>
                                )
                        }else{
                        return(
                            <>
                                <Card name={e.nome} image={e.link} key={e.id}/>
                                <div className="div_botao">
                                    <Button text="Escolher" onClick={() => clickButton(e)}/>
                                </div>
                            </>
                        )}
                    })}
                    {elementosTela2.map((e) => {
                        if (e.video == true) {
                            return (
                                <>
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <div className="div_botao">
                                        <Button text="Escolher" onClick={() => clickButton(e)} />
                                    </div>
                                </>
                            )
                        }

                        return(
                            <>
                                <Card name={e.nome} 
                                    image={e.link} 
                                    key={e.id} 
                                    className={`${escondido? "escondido" : ""}`}
                                />
                                <div className={`${escondido? "escondido" : ""} div_botao`}>
                                    <Button 
                                        className={`${escondido? "escondido" : ""}`} 
                                        text="Escolher" 
                                        onClick={() => clickButton(e)}
                                    />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


