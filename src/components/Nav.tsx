import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.png'

import '../styles/_nav.scss'


export default function Nav() { 
    const navigate = useNavigate();

    return (
        <div className='nav-container'>            
            <nav className='nav'>
                <div className='nav-left'>                
                    <figure className='flex nav-logo' style={{ backgroundImage: `url(${logo})`}}></figure>
                </div>

                <div className='nav-middle'>
                    <button className='nav-btn' onClick={() => navigate('/')}>HEM</button>
                </div>
                {/* <div className='nav-fill'>
                    
                </div> */}

                <div className='nav-right'>
                    <button className='nav-btn' onClick={() => scrollTo()}>DJUREN</button>
                    <button className='nav-btn' onClick={() => navigate('/Donate')}>DONERA</button>
                    <button className='nav-btn' onClick={() => navigate('/About')}>OM OSS</button>  
                </div>
            </nav>                       
        </div>
    )
}


