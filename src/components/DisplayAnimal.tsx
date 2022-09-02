import { Animal } from '../models/animal'

interface DisplayAnimalProps {
	animal: Animal;
    // handleClick : (name:any) => void;
}

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, breed, date, about, location, diseases, booked } = props.animal

    return (
        <section className='card'>
            <figure style={{ backgroundImage: `url(${image})`}}>
            <p>{date}</p>
            </figure>
            <section className="text-container">   

                <div className='card-headline'>
                    <h2>{name}</h2>    
                    {booked && <span className='booked'>Bokad</span>} 
                </div>

                {/* <p>{about}</p> */}
                <div>
                    <p className='sub-headline'>Djursort : </p>
                    <p>{species}</p>
                </div>
                <div>
                    <p className='sub-headline'>Kön : </p>
                    <p>{gender}</p>
                </div>
                <div>
                    <p className='sub-headline'>Ras : </p>
                    <p>{breed}</p>
                </div>
                <div>
                    <p className='sub-headline'>Ålder : </p>
                    <p>{age} år</p>
                </div>
                <div>
                    <p className='sub-headline'>Plats : </p>
                    <p>{location}</p>
                </div>                
            </section>
            <button className='btn-card'>Läs Mer</button>
        </section>
    )
}

export default DisplayAnimal
