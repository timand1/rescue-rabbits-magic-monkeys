import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png'
import { useState } from 'react';
import {Animal} from '../models/animal'
import animalList from '../animals.json'

import '../styles/_navNew.scss'

interface NavProps {
    setAnimals: (animal: Animal[]) => void;
}

export default function Nav(props: NavProps) { 
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenu: () => void = () => {
        setMenuOpen(!menuOpen);
       
    }

    const changeUrl: () => void = () => {
        showAll()
        setMenuOpen(false)
    }

    const handleHome: () => void = () => {
        showAll()
        setMenuOpen(false)
        const root:any = document.querySelector('#root')
        root.scrollIntoView({
            behavior: 'smooth'
          });
    }
   const scrollToAnimals: () => void = () => {
    setMenuOpen(false)
    setTimeout(() => {
        const divider:any = document.querySelector('#divider')
        divider.scrollIntoView({
            behavior: 'smooth'
          });
    }, 100);
       
    }

    const handleLogo: () => void = () => {
        setMenuOpen(false)
        showAll()
        navigate('/')
        const root:any = document.querySelector('#root')
        root.scrollIntoView({
            behavior: 'smooth'
          });
    }

    const showAll: () => void = () => {
        props.setAnimals(animalList.animals) 
     }

    return (         
        <header>                
            <div className="logo-container">
                <img className='logo' onClick={(handleLogo)} src={logo} alt="img" />
                <h2>RESCUE RANGERS</h2>
            </div>
            <div className="menu-btn" onClick={handleMenu}>
                <span className={menuOpen ? 'menu-btn--top' : ''}></span>
                <span className={menuOpen ? 'menu-btn--mid' : ''}></span>
                <span className={menuOpen ? 'menu-btn--bottom' : ''}></span>
            </div>
            <nav className={menuOpen ? 'nav open' : 'nav'}>
                <ul className="link-container">
                    <NavLink className="link" to="/" onClick={handleHome} >HEM</NavLink >
                    <NavLink className="link" to="/" onClick={scrollToAnimals} >DJUREN</NavLink>
                    <NavLink className="link" to="/about"  onClick={changeUrl} >OM OSS</NavLink>
                </ul>
            </nav>      
        </header>
    )
}


