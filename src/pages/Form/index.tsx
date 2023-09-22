import { useEffect, useState } from 'react';
import Button from '../../componentes/Button';
import './Form.css';
import axios from 'axios';
import iData from '../../interfaces/iData/iData';
import { Link } from 'react-router-dom';

export default function Form() {

    const [data, setData] = useState<iData[]>([]);
    const [itemName, setItemName] = useState('');
    const [itemLink, setItemLink] = useState('');
    const [video, setVideo] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/media/listall")
        .then(resposta => setData(resposta.data))
    }, [])

    const submit = (event:any) => {
        if(video && itemLink.length !== 11){
            event.preventDefault()
            alert("Por favor, clique no botão 'video' para converter o link. ")
        }else{
        axios.post(`http://localhost:8080/media/new?mediaName=${itemName}&mediaLink=${itemLink}&isVideo=${video}`, {})
        setItemName("")
        setItemLink("")
        } 
    }

        const deleteItem = (id:number) =>{       
            window.location. reload()
            axios.delete(`http://localhost:8080/media/remove?mediaID=${id}`)
            .then(() => {
                const newItens = data.filter(item => item.mediaID !== id)
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

        console.log(data);

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
                                <input type="radio" name="ok" required={true} onClick={adicionarVideo}></input>
                            </div>
                            <div className="b">
                                <label>Imagem</label>
                                <input type="radio" name="ok" required={true} onClick={adicionarImagem}></input>
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
                                    <tr key={e.mediaID}>
                                        <td>{e.mediaName}</td>
                                        <td>{e.isVideo ? <a href={`https://www.youtube.com/watch?v=${e.mediaLink}`} target="_blank" rel="noreferrer">Clique para ver</a> : <a href={e.mediaLink} target="_blank" rel="noreferrer">Clique para ver</a>}</td>
                                        <td>{`${e.isVideo? "Video" : "Imagem"}`}</td>
                                        <td className="editar"><Link className="editar" to={`/itens/${e.mediaID}`}>Editar</Link></td>
                                        <td><button className="btn_erro" onClick={() => deleteItem(e.mediaID)}>Apagar  </button></td>
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
