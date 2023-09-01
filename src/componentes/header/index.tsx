import './Header.css'
import { Link, Outlet } from 'react-router-dom'

export default function Header(){
    return(
        <section>
            <header className="header">
                <div className="div_logo">
                    <h1>Logo vai Aqui</h1>
                </div>
                <div className="div_botoes">
                    <Link to="./">Home</Link>
                    <Link to="./form">Criar</Link>
                    <Link to="./ingame">Jogar</Link>
                </div>
            </header>
            <Outlet/>
        </section>
    )
}