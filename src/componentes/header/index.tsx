import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    return(
        <section>
            <header className="header">
                <div className="div_logo">
                <div>
                    <Link className="link_logo" to="./">Logo vai Aqui</Link>
                </div>
                </div>
                <div className="div_botoes">
            </div>
                <section className="top-nav">
                    <input id="menu-toggle" type="checkbox" />
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    </label>
                    <ul className="menu">
                        <li><Link to="./">Home</Link></li>
                        <li><Link to="./form">Criar</Link></li>
                        <li><Link to="./ingame">Jogar</Link></li>
                        <li><Link to="./jogoscomunidade">Outros Jogos</Link></li>
                    </ul>
                </section>
            </header>
            <Outlet/>
        </section>
    )
}
