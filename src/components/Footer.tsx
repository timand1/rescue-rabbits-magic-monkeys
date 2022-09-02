// import { useNavigate } from 'react-router-dom';


import '../styles/_footer.scss'


export default function Footer() {  

    // const navigate = useNavigate();



    return (
        <footer className=' flex footer-container'>
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
                    <h2 className='footer-header'>Om Rescue Rabbits</h2>
                    <p className='footer-info'>Varför Rescue Rabbits?</p>
                    <p className='footer-info'>Nyheter</p>
                </div>

                
            </div>




        </footer>
       
    )
}


