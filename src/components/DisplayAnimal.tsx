import { Animal } from '../models/animal'
import {useState} from 'react';

interface DisplayAnimalProps {
	animal: Animal;
    // overlay: boolean
    // handleOverlay : () => void;
}

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, breed, date, about, location, diseases, booked } = props.animal

    const [overlay, setOverlay] = useState<boolean>(false)
    const [showForm, setShowForm] = useState<boolean>(false)


    const handleOverlay: () => void = () => {
        setOverlay(!overlay);
        if(showForm) {
            setShowForm(false)
        }
    }
    const handleForm: () => void = () => setShowForm(!showForm);

    const buttonCSS : string = booked ? ' btn-booked' : ''

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
                <ul className='info-container'>
                    <li>{species}</li>
                    <li>{age} år</li>
                    <li>{gender}</li>
                    <li>{location}</li>
                </ul>
            <button className='btn-card' onClick={handleOverlay}>Läs Mer</button>
            </section>
            {overlay && 
                <section className='overlay'>
                    {!showForm &&
                        <section className='animal-container'>
                            <figure style={{ backgroundImage: `url(${image})`}}>
                                <div className='btn-close' onClick={handleOverlay}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>{date}</p>
                            </figure>
                            <div className="animal-info">
                                <h2>{name}</h2>
                                <p>{about}</p>
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
                                <button className={'btn' + buttonCSS} onClick={!booked ? handleForm : undefined}> {booked ? 'Bokad' : 'Intresseanmäl' }</button>
                            </div>
                        </section>
                    }
                    {showForm &&
                        <section>
                            <h2>Form</h2>
                            <div className='btn-close' onClick={handleOverlay}>
                                    <div></div>
                                    <div></div>
                                </div>
                        </section>
                    }                    
                </section>
            }

        </section>
    )
}

export default DisplayAnimal
