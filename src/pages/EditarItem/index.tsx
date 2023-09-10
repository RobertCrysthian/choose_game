import { useParams } from "react-router-dom"
import "./EditarItem.css"
import axios from "axios"
import { useEffect, useState } from "react"
import iData from "../../interfaces/iData/iData"
import Button from "../../componentes/Button"

export default function EditarItem(){

    const parametros = useParams()

    const [dadosItem, setDadosItem] = useState<iData[] | any> ([])

    useEffect(() => { //Não implementado ainda na API
        axios.get(`http://localhost:8080/itens/${parametros.id}`)
        .then(resposta => {setDadosItem(resposta.data)})
    }, [])


    const [video, setVideo] = useState(false)

    const setarImagem = () => {
        setVideo(false)
    }
    const setarVideo = () => {
        setVideo(true)
        setDadosItem({
            nome: dadosItem.nome,
            link: dadosItem.link.slice(-11),
            video: dadosItem.video
        })
    }



    const submitarForm = (event : any) => {
        event.preventDefault()
        if(video && dadosItem.link.length !== 11){
            alert("Por favor, clique no botão 'video' para converter o link. ")
        }
        else{
            axios.put(`http://localhost:8080/itens/${parametros.id}`, {
                nome: dadosItem.nome,
                link: dadosItem.link,
                video: video
            })
            alert("Dados alterados com sucesso")
            window.location.href="/form"}
    }

    console.log(video)

    return(
        <section className="section_editarItem">
            <div className="div_editarItem">
                <form className="div_editarItem" onSubmit={submitarForm}>
                    <h1>Formulário de edição</h1>
                    <label>Nome do item</label>
                    <input 
                        type="text"
                        value={dadosItem.nome}
                        required={true}
                        onChange={(e) => setDadosItem({
                            nome: e.target.value,
                            link: dadosItem.link,
                            video: dadosItem.video
                        })}
                    ></input>
                    <label>Link do item</label>
                    <input 
                        value={dadosItem.link}
                        required={true}
                        onChange={(e) => setDadosItem({
                            nome: dadosItem.nome,
                            link: e.target.value,
                            video: dadosItem.video
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