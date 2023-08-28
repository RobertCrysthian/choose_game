import axios from "axios";
import Button from "../../componentes/Button";
import Card from "../../componentes/Card";
import './InGame.css'
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";



export default function InGame(){

    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2)
    
    const [selecionados, setSelecionados] = useState([]);


    const [data, setData] = useState<iData[]>([])

    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(response => setData(response.data))
    }, [])

    const clickButton = (e: any | null) => {
        setValor1(valor1 + 2);
        setValor2(valor2 + 2);
        console.log(valor1, valor2)
        setSelecionados(e.link)
        console.log([...selecionados], e.link)
    }

    const elementosTela = data.filter((e) => {
        return e.id === valor1 || e.id === valor2

    })

    console.log(elementosTela)

    return(
        <section>
            <div className="div_inGame">
                <div className="div_elementos_tela">
                    {elementosTela.map((e) => {
                        return(
                            <>
                                <Card name={e.nome} image={e.link} key={e.id}/>
                                <div className="div_botao">
                                    <Button text="Escolher" onClick={() => clickButton(e)}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}