import axios from "axios";
import Button from "../../componentes/Button";
import Card from "../../componentes/Card";
import './InGame.css'
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";

export default function InGame(){


    const [id, setId] = useState(11)
    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    

    
    var escondido = true

    const [data, setData] = useState([])

    const [array, setArray] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(response => setData(response.data))
    }, [])



    const clickButton =(e) => {
            setValor1(valor1 + 2);
            setValor2(valor2 + 2);

        var novoItem = {
            nome: e.nome,
            link: e.link,
            id:id
        }

            setArray([...array, novoItem] )
        setId(id+1)
    }

console.log(array)

    var elementosTela = data.filter((e) => {
        return e.id === valor1 || e.id === valor2
    })

    var elementosTela2 = array.filter((e) => {
        return e.id === valor1 || e.id === valor2
    })


    if(valor1 >= 11){
        escondido=false

    }

    console.log(elementosTela)

    const selecionados = data.filter((e) => {
        return e.selecionado == true
    })

    const tudo = [...data, ...selecionados]
console.log(valor1, valor2)

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
                    {elementosTela2.map((e) => {
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


