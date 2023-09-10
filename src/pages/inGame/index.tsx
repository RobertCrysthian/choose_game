import axios from "axios";
import Button from "../../componentes/Button";
import Card from "../../componentes/Card";
import './InGame.css'
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";
import { Link } from "react-router-dom";

export default function InGame(){



    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    const [placar, setPlacar] = useState(1)    

    
    var escondido = true
    var esconderPlacar = false

    const [data, setData] = useState([])

    const [array, setArray] = useState<iData[]>([])



    useEffect(() => {
        axios.get("http://localhost:8080/media/listall")
        .then(response => setData(response.data))
    }, [])

    
    useEffect(() => {
        axios.get("http://localhost:8080/media/listall")
        .then(response => setId(response.data.length+1))
    }, [])


    const [id, setId] = useState(0)

    const clickButton =(e :iData) => {
            setValor1(valor1 + 2);
            setValor2(valor2 + 2);
        var novoItem = {
            mediaName: e.mediaName,
            mediaLink: e.mediaLink,
            isVideo: e.isVideo,
            mediaID:id
        }

        setArray([...array, novoItem] )
        setId(id+1)
        setPlacar(placar+1)
    }

    if(placar === data.length){
        esconderPlacar=true
    }

    var elementosTela = data.filter((e :iData) => {

        return e.mediaID === valor1 || e.mediaID === valor2
    })

    var elementosTela2 = array.filter((e) => {
        return e.mediaID === valor1 || e.mediaID === valor2
    })

    console.log(array)

    if(valor2 > data.length){
        escondido=false
    }
    console.log(elementosTela)
    return(
        <section>
            <h1 className={`${esconderPlacar? "escondido_placar" : ""} placar`}>{`Rodada ${placar} / ${data.length-1}`}</h1>
            <div className="div_inGame">
                <div className="div_elementos_tela">

                    {elementosTela.map((e:iData) => {
                        if(e.isVideo === true){
                            return(
                                <>  <div className="centralizar_video">
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.mediaLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                        <div className="div_botao">
                                            <Button cor1={true} text="Escolher" onClick={() => clickButton(e)}/>
                                        </div>
                                    </div>
                                </>
                                )
                        }else{
                        return(
                            <>  <div className="centralizar_video">
                                    <Card name={e.mediaName} image={e.mediaLink} key={e.mediaID}/>
                                    <div className="div_botao">
                                        <Button text="Escolher" cor1={true} onClick={() => clickButton(e)}/>
                                    </div>
                                </div>
                            </>
                        )}
                    })}
                    {elementosTela2.map((e: any) => {
                        if(data.length-1 === array.length){
                            if(e.video){
                                return (
                                    <div className="div_ultimaImagem">
                                    <h1>Sua escolha é: {array[array.length-1].mediaName}</h1>
                                    <p>A man of culture, I see</p>
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${array[array.length-1].mediaLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    <Link className="link_menu" to="http://localhost:3000/">Voltar para o menu</Link>
                                </div>
                                )
                            }else{
                            return (
                                <div className="div_ultimaImagem">
                                    <h1>Sua escolha é: {array[array.length-1].mediaName}</h1>
                                    <p>A man of culture, I see</p>
                                    <img src={array[array.length-1].mediaLink} alt="Última imagem selecionada"/>
                                    <Link className="link_menu" to="http://localhost:3000/">Voltar para o menu</Link>
                                </div>
                            )}
                        }
                        if (e.video === true) {
                            return (
                                <>
                                    <div className="centralizar_video">
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                        <div className="div_botao">
                                            <Button text="Escolher" cor1={true} onClick={() => clickButton(e)} />
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        return(
                            <>
                                <div className="centralizar_video">
                                    <Card name={e.mediaName} 
                                        image={e.mediaLink} 
                                        key={e.mediaID} 
                                        className={`${escondido? "escondido" : ""}`}
                                    />
                                    <div className={`${escondido? "escondido" : ""} div_botao`}>
                                        <Button 
                                            className={`${escondido? "escondido" : ""}`} 
                                            text="Escolher"
                                            cor1={true} 
                                            onClick={() => clickButton(e)}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


