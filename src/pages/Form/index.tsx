import { useState } from 'react'
import Button from '../../componentes/Button'
import './Form.css'
import axios from 'axios'


export default function Form(){

    const [itemName, setItemName] = useState('')
    const [itemLink, setItemLink] = useState('')


    const submit = (event?: any) => {
        event.preventDefault()
        
        axios.post('http://localhost:8080/itens', {
           nome: itemName,
           link: itemLink, 
        })
        setItemName("")
        setItemLink("")
    }

        return(
            <section className="section_form">
                <div className="form">
                    <h1>Crie um elemento</h1>

                    <form onSubmit={submit} className="form">
                        <label>Nome do item</label>
                        <input value={itemName} onChange={e => setItemName(e.target.value)}/>
                        <label>Link de imagem ou vídeo</label>
                        <input value={itemLink} onChange={e => setItemLink(e.target.value)}/>
                        <Button text="Enviar" blue={true}/>
                    </form>
                </div>
            </section>
        )
    }