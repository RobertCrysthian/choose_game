import { useEffect, useState } from 'react';
import Button from '../../componentes/Button';
import './Form.css';
import iData from '../../interfaces/iData/iData';
import { Link } from 'react-router-dom';
import api from '../../service/api'

export default function Form() {

    const [data, setData] = useState<iData[]>([]);
    const [itemName, setItemName] = useState('');
    const [itemLink, setItemLink] = useState<any>('');
    const [video, setVideo] = useState(false);


    useEffect(() => {
        api.get("/listall")
        .then(resposta => setData(resposta.data))
    }, [])


    function postarLink(nomeItem, linkItem, temVideo){
        api.post(`/new?mediaName=${nomeItem}&mediaLink=${linkItem}&isVideo=${temVideo}`, {})
            setItemName("")
            setItemLink("")    
    }

    const submit = () => {
        if(video === true){
            const filtro = new RegExp (/(\S{11})$/gm)
            const linkFiltrado = itemLink.match(filtro)
            postarLink(itemName, linkFiltrado, video)
        }else {
            postarLink(itemName, itemLink, video)
        } 
    }

        const deleteItem = (id:number) =>{       
            window.location.reload()
            api.delete(`/remove?mediaID=${id}`)
            .then(() => {
                const newItens = data.filter(item => item.mediaID !== id)
                setData([...newItens])
            })
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
                                <input type="radio" className="radioInput" name="ok" required={true} onClick={() => setVideo(true)}></input>
                                <label>Imagem</label>
                                <input type="radio" name="ok" className="radioInput" required={true} onClick={() => setVideo(false)}></input>
                            </div>
                            <div className="b">

                            </div>
                        </div>
                        <Button text="Enviar" cor1={true}/>
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
