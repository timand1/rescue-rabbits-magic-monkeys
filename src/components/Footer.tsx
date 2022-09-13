import '../styles/_footer.scss';
import { useNavigate } from 'react-router-dom';

export default function Footer() {  

    const navigate = useNavigate()
    const changeUrl: () => void = () => {
        const root:any = document.querySelector('#root');
        root.scrollIntoView({
            behavior: 'smooth'
          });

          navigate('/about')
    };
    

    return (
        <footer className='footer-container'>
            <div className='flex footer'>
                <div className='footer-box'>
                    <h2 className='footer-header '>Djurskyddet</h2>
                    <p className='footer-info'>Djurberget, Djurskyddsvägen 15B </p>
                </div>
                <div className='footer-box'>
                    <h2 className='footer-header'>Kontakta oss</h2>
                    <p className='footer-info'>FAQ - Frågor och svar</p>
                    <p className='footer-info'>Kundservice</p>
                </div>
                <div className='footer-box'>
                    <h2 className='footer-header' onClick={changeUrl} >Om Rescue Rabbits</h2>
                    <p className='footer-info'>Varför Rescue Rabbits?</p>
                    <p className='footer-info'>Nyheter</p>
                </div>
            </div>
        </footer>       
    )
};


