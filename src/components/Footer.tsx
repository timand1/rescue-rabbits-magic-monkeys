// import { useNavigate } from 'react-router-dom';


import '../styles/_footer.scss'


export default function Footer() {  

    // const navigate = useNavigate();



    return (
        <footer className=' flex footer-container'>
            <div className='flex footer'>
                <div>
                    <h2>Djurskyddet</h2>
                    <p>Djurberget, Djurskyddsvägen 15B </p>
                </div>
                <div>
                    <h2>Kontakta oss</h2>
                    <p>FAQ - Frågor och svar</p>
                    <p>Kundservice</p>
                </div>
                <div>
                    <h2>Om Rescue Rabbits</h2>
                    <p>Varför Rescue Rabbits?</p>
                    <p>Nyheter</p>
                </div>

                
            </div>




        </footer>
       
    )
}


