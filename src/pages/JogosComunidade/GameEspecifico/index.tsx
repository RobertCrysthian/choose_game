import './GameEspecifico.css'
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import iData from "../../../interfaces/iData/iData";
import Button from "../../../componentes/Button";
import Card from "../../../componentes/Card";
import escolha from './Escolhas.json'


export default function GameEspecifico(){

    const parametros = useParams()
    const a: string | undefined= parametros.id

        let escolhas:any = escolha[a]






    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    const [placar, setPlacar] = useState(1)    

    var escondido = true
    var esconderPlacar = false

    const [array, setArray] = useState<iData[]>([])
    const [id, setId] = useState(escolhas.length+1)

    const clickButton =(e :iData) => {
            setValor1(valor1 + 2);
            setValor2(valor2 + 2);
        var novoItem = {
            mediaName: e.mediaName,
            mediaLink: e.mediaLink,
            isVideo: e.isVideo,
            mediaID: id
        }

        setArray([...array, novoItem] )
        setId(id+1)
        setPlacar(placar+1)
    }

    if(placar === escolhas.length){
        esconderPlacar=true
    }

    var elementosTela = escolhas.filter((e :iData) => {

        return e.mediaID === valor1 || e.mediaID === valor2
    })

    var elementosTela2 = array.filter((e) => {
        return e.mediaID === valor1 || e.mediaID === valor2
    })

    console.log(a)

    if(valor2 > escolhas.length){
        escondido=false
    }

    return(
        <section>
            <h1 className={`${esconderPlacar? "escondido_placar" : ""} placar`}>{`Rodada ${placar} / ${escolhas.length-1}`}</h1>
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
                        if(escolhas.length-1 === array.length){
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
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.mediaLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
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
                                    <Card name={e.nome} 
                                        image={e.link} 
                                        key={e.id} 
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


