// import { useNavigate } from 'react-router-dom';

import '../styles/_nav.scss'

export default function Nav() {  

    // const navigate = useNavigate();

{/* <button className='' onClick={() => navigate('/home')}>HEM</button> */}

    return (
        <div>
            <nav>
                <button className='nav-btn'>HEM</button>
                <button className=''>VÅRA DJUR</button>
                <button className=''>DONERA</button>
                <button className=''>OM OSS</button>            
            </nav>
        </div>
    )
}


