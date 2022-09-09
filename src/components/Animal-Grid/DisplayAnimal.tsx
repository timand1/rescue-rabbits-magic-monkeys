import { Animal } from '../../models/data';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Overlay from '../Overlay-Animal/Overlay';

interface DisplayAnimalProps {
	animal: Animal;
};

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, date, location } = props.animal;

    const [overlay, setOverlay] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);

    const adoptedList = useSelector((state: RootState) => state.adoptedList)

    const findAdopted: boolean = adoptedList.find(adopted => adopted.animalId === props.animal.animalId) !== undefined;

    const handleOverlay: () => void = () => {
        setOverlay(!overlay);
        if(showForm) {
            setShowForm(false);
        }
    }

    const handleForm: () => void = () => setShowForm(!showForm);

    return (
        <section className='card'>
            <figure style={{ backgroundImage: `url(${image})`}}>
            <p>{date}</p>
            </figure>
            <section className="text-container"> 
                <div className='card-headline'>
                    <h2>{name}</h2>    
                    {findAdopted && <span className='booked'>Bokad</span>} 
                </div>
                <div className='info-container'>
                    <p>{species}</p>
                    <div className="dot"></div>
                    <p>{age} år</p>
                    <div className="dot"></div>
                    <p>{gender}</p>
                    <div className="dot"></div>
                    <p>{location}</p>
                </div>
            <button className='btn-card' onClick={handleOverlay}>Läs Mer</button>
        </section>
            {overlay && 
                <Overlay animal={props.animal} showForm={showForm} handleForm={handleForm} handleOverlay={handleOverlay} />            
            }
        </section>
    )
};

export default DisplayAnimal;
