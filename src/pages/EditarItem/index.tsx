import { useParams } from "react-router-dom";
import "./EditarItem.css";
import axios from "axios";
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";
import Button from "../../componentes/Button";
import api from "../../service/api";

export default function EditarItem() {

    const parametros = useParams();
    const [dadosItem, setDadosItem] = useState<iData[] | any> ([]);

    useEffect(() => {
        api.get(`/id?mediaID=${parametros.id}`)
        .then(resposta => {setDadosItem(resposta.data[0])})
    }, [parametros.id])


    const [video, setVideo] = useState(false);

    const setarVideo = () => {
        setDadosItem({
            mediaName: dadosItem.mediaName,
            mediaLink: dadosItem.mediaLink,
            isVideo: video
        })
        setVideo(true);
    }

    const setarImagem = () => {
        setDadosItem({
            mediaName: dadosItem.mediaName,
            mediaLink: dadosItem.mediaLink,
            isVideo: video
        })
        setVideo(false);
    }

    function editarLink(parametrosID, nomeItem, linkItem, temVideo){
        api.put(`/edit?mediaID=${parametrosID}&newMediaName=${nomeItem}&newMediaLink=${linkItem}&isVideo=${temVideo}`)
        alert("dados alterados com sucesso")
        window.location.href="/form"
    }

    const submitarForm = (event:any) => {
        event.preventDefault();
        if(video && dadosItem.mediaLink.length !== 11) {
            const filtro = new RegExp (/(\S{11})$/gm)
            const linkFiltrado = dadosItem.mediaLink.match(filtro)
            editarLink(parametros.id, dadosItem.mediaName, linkFiltrado, video)

        } else {
            editarLink(parametros.id, dadosItem.mediaName, dadosItem.mediaLink, video)
        }
    }

    return(
        <section className="section_editarItem">
            <div className="div_editarItem">
                <form className="div_editarItem" onSubmit={submitarForm}>
                    <h1>Formulário de edição</h1>
                    <label>Nome do item</label>
                    <input 
                        type="text"
                        value={dadosItem.mediaName}
                        required={true}
                        onChange={(e) => setDadosItem({
                            mediaName: e.target.value,
                            mediaLink: dadosItem.mediaLink,
                            isVideo: video
                        })}
                    ></input>
                    <label>Link do item</label>
                    <input 
                        value={dadosItem.mediaLink}
                        required={true}
                        onChange={(e) => setDadosItem({
                            mediaName: dadosItem.mediaName,
                            mediaLink: e.target.value,
                            isVideo: video
                        })}
                    ></input>
                    <div className="a">
                        <label>Video</label>
                        <input 
                            type="radio" 
                            name="ok"
                            className="radioInput" 
                            onClick={setarVideo}
                            required={true}
                        />
                        <label>Imagem</label>
                        <input 
                            type="radio" 
                            name="ok"
                            className="radioInput" 
                            onClick={setarImagem}
                            required={true}
                        />                       

                    </div>
                    <Button text="Editar" cor1={true}/>
                </form>
            </div>
        </section>
    )
}

