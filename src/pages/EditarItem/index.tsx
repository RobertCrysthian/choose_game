import { useParams } from "react-router-dom";
import "./EditarItem.css";
import axios from "axios";
import { useEffect, useState } from "react";
import iData from "../../interfaces/iData/iData";
import Button from "../../componentes/Button";

export default function EditarItem() {

    const parametros = useParams();
    const [dadosItem, setDadosItem] = useState<iData[] | any> ([]);

    useEffect(() => { //Ainda não implementado na API
        axios.get(`http://localhost:8080/media/id?mediaID=${parametros.id}`)
        .then(resposta => {setDadosItem(resposta.data[0])})
    }, [parametros.id])


    //http://localhost:8080/media/new?mediaName=${itemName}&mediaLink=${itemLink}&isVideo=${video}

    const [video, setVideo] = useState(false);

    const setarVideo = () => {
        setDadosItem({
            mediaName: dadosItem.mediaName,
            mediaLink: dadosItem.mediaLink.slice(-11),
            isVideo: video
        })
        setVideo(true);
    }

    const setarImagem = () => {
        setDadosItem({
            mediaName: dadosItem.mediaName,
            mediaLink: dadosItem.mediaLink.slice(-11),
            isVideo: video
        })
        setVideo(false);
    }
    
    const submitarForm = (event:any) => {
        event.preventDefault();
        if(video && dadosItem.mediaLink.length !== 11) {
            alert("Por favor, clique no botão 'video' para converter o link. ")
        } else {
            axios.put(`http://localhost:8080/media/edit?mediaID=${parametros.id}&newMediaName=${dadosItem.mediaName}&newMediaLink=${dadosItem.mediaLink}&newMediaVideo=${false}/`)
            alert("Dados alterados com sucesso")
            window.location.href="/form"
        }
    }

    console.log(video)
    console.log(dadosItem)
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
                            onClick={setarVideo}
                            required={true}
                        />
                    </div>
                    <div className="b">
                        <label>Imagem</label>
                        <input 
                            type="radio" 
                            name="ok" 
                            onClick={setarImagem}
                            required={true}
                        />
                    </div>
                    <Button text="Editar"/>
                </form>
            </div>
        </section>
    )
}
