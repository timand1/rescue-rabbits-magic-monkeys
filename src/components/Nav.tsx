import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.png'
import { useState } from 'react';

import '../styles/_nav.scss'

export default function Nav() { 
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState<boolean>(false)
    

    const handleMenu: () => void = () => {
        setShowMenu(!showMenu);
       
    }

    

    return (
        <div className='nav-container'>            
            <nav className='nav'>
                
                <div className='nav-left'>                
                    <figure className='flex nav-logo' style={{ backgroundImage: `url(${logo})`}}></figure>
                </div>
                <div className='mobile-container'>
                    <button className='mobile-menu-btn' onClick={handleMenu} >
                        <figure className='menu-fig'></figure>
                        <figure className='menu-fig'></figure>
                        <figure className='menu-fig'></figure>                        
                    </button>
                </div>
                {!showMenu &&
                <div className='nav-right' id='myLinks'>
                    <button className='nav-btn' onClick={() => navigate('/')}>HEM</button>
                    <div className='nav-fill'></div>              
                    <button className='nav-btn' onClick={() => scrollTo()}>VÅRA DJUR</button>
                    <button className='nav-btn' onClick={() => navigate('/About')}>OM OSS</button>  
                </div>
                }
            </nav>                       
        </div>
    )
}


