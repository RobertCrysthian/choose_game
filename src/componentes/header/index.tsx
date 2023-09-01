import './Header.css'
import { Outlet } from 'react-router-dom'

export default function Header(){
    return(
        <section>
            <header className="header_">
                <p></p>
            </header>
            <Outlet/>
        </section>
    )
}