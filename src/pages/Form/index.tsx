import { useEffect, useState } from 'react'
import Button from '../../componentes/Button'
import './Form.css'
import axios from 'axios'
import iData from '../../interfaces/iData/iData'
import { Link } from 'react-router-dom'


export default function Form(){


    const [data, setData] = useState<iData[]>([])
    const [itemName, setItemName] = useState('')
    const [itemLink, setItemLink] = useState('')
    const [video, setVideo] = useState(false)



    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(resposta => setData(resposta.data))
    }, [])


    const submit = (event : any) => {
        if(video && itemLink.length !== 11){
            event.preventDefault()
            alert("Por favor, clique no botão 'video' para converter o link. ")
        }else{
        axios.post('http://localhost:8080/itens', {
           nome: itemName,
           link: itemLink, 
           video: video
        })
        setItemName("")
        setItemLink("")
        } 
    }

        const deleteItem = (id :number) =>{
            axios.delete(`http://localhost:8080/itens/${id}`)
            .then(() => {
                const newItens = data.filter(item => item.id !== id)
                setData([...newItens])
            })
        }
   
        const adicionarVideo = () => {
            setVideo(true)
            setItemLink(itemLink.slice(-11))

    }
        const adicionarImagem = () => {
            setVideo(false)
        }



    
        return(
            <>
            <section className="section_form">
                <div className="form">
                    <h1>Crie um elemento</h1>
                    <form onSubmit={submit} className="form">
                        <label>Nome do item</label>
                        <input value={itemName} placeholder="Insira o nome do item" onChange={e => setItemName(e.target.value)}/>
                        <label>Link de imagem ou vídeo</label>
                        <input value={itemLink} placeholder="Insira o link do item" onChange={e => setItemLink(e.target.value)}/>
                        <div className="divs_checkbox">
                            <div className="a">
                                <label>Video</label>
                                <input type="radio" name="ok" onClick={adicionarVideo}></input>
                            </div>
                            <div className="b">
                                <label>Imagem</label>
                                <input type="radio" name="ok" onClick={adicionarImagem}></input>
                            </div>
                        </div>
                        <Button text="Enviar"/>
                    </form>
                </div>
            </section>

            <section className='section_list'>
                <div className="itens_list">
                    <table className="table__">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nome </td>
                                <td>Link </td>
                                <td>Tipo</td>
                                <td>Editar</td>
                                <td>Excluir</td>
                            </tr>
                         </thead>
                            <tbody>
                            {data.map((e) => {
                                return(
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.nome}</td>
                                        <td>{e.video? <a href={`https://www.youtube.com/watch?v=${e.link}`} target="_blank">Clique para ver</a> : <a href={e.link} target="_blank">Clique para ver</a>}</td>
                                        <td>{`${e.video? "Video" : "Imagem"}`}</td>
                                        <td className="editar"><Link className="editar" to={`/itens/${e.id}`}>Editar</Link></td>
                                        <td><a className="btn_erro" onClick={() => deleteItem(e.id)}>Apagar  </a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
            </>
        )
    }