import '../styles/_hero.scss';

export default function Hero() {  

    return (    
        <div className='hero-container'>
            <div className='hero'>                
                <figure className='hero-fig' style={{ backgroundImage: `url(https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg)`}}>
                    <article className='hero-article'>
                        <h1>Välkommen till Rescue Rabbits!</h1>
                        <p>En värld med djur utan plats är inte en värld att leva i. Rescue Rabbits är till för djuren i nöd att hitta ett för alltid hem hos dig.</p>
                    </article>            
                </figure>
            </div>           
            <div id='divider'></div>
        </div>   
    )
};


