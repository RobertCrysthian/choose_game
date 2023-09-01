import { useEffect, useState } from 'react'
import Button from '../../componentes/Button'
import './Form.css'
import axios from 'axios'
import { Button as ButtonMu, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import iData from '../../interfaces/iData/iData'


export default function Form(){


    const [data, setData] = useState<iData[]>([])
    const [itemName, setItemName] = useState('')
    const [itemLink, setItemLink] = useState('')
    const [video, setVideo] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/itens")
        .then(resposta => setData(resposta.data))
    }, [])

    const submit = (event?: any) => {
        event.preventDefault()
        
        axios.post('http://localhost:8080/itens', {
           nome: itemName,
           link: itemLink, 
           video: video
        })
        setItemName("")
        setItemLink("")
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

    console.log(video)
    console.log(itemLink)
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
                            <tr>
                                <td>ID</td>
                                <td>Nome </td>
                                <td>Link </td>
                                <td>Tipo</td>
                                <td>Excluir</td>
                            </tr>
                            {data.map((e) => {
                                return(
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.nome}</td>
                                        <td>{e.video? e.link : <a href={e.link} target="_blank">Teste</a>}</td>
                                        <td>{`${e.video? "Video" : "Imagem"}`}</td>
                                        <td><a className="btn_erro" onClick={() => deleteItem(e.id)}>Apagar  </a></td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            </section>
            </>
        )
    }