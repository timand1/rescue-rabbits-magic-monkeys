import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.png'

import '../styles/_nav.scss'


export default function Nav() {  

    const navigate = useNavigate();



    return (
        <div className='flex nav-container'>

            <nav className='flex nav'>


            <div className='flex nav-left'>
                <figure className='flex nav-logo' style={{ backgroundImage: `url(${logo})`}}></figure>
                <button className='nav-btn nav-home' onClick={() => navigate('/')}><h1>HEM</h1></button>  
            </div>

            <div className='flex nav-right'>
                <button className='nav-btn nav-donate' onClick={() => navigate('/Donate')}><h1>DONERA</h1></button>
                <button className='nav-btn nav-about' onClick={() => navigate('/About')}><h1>OM OSS</h1></button>  
            </div>
            
                              
                


            
            </nav>
                          
           
        </div>
    )
}


