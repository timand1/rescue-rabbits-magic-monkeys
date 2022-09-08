import { Animal, Adopted, User } from '../../models/data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from '../Overlay-Animal/Overlay';

interface DisplayAnimalProps {
	animal: Animal;
    displayAnimalObj: {
        setChosenAnimal: (chosenAnimal: Animal) => void;
        setUser: any;
        user: User;
        handleAdopted: (animalId: number, userId: number) => void;
        adoptedList: Adopted[];
    }
};

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, date, location } = props.animal;
    const { user, setUser, setChosenAnimal, adoptedList, handleAdopted } = props.displayAnimalObj;

    const navigate = useNavigate();

    const [overlay, setOverlay] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleOverlay: () => void = () => {
        setOverlay(!overlay);
        if(showForm) {
            setShowForm(false);
        }
    }

    const handleForm: () => void = () => setShowForm(!showForm);

    const handleSubmit: (e:any) => void = (e:any) => {
        e.preventDefault();
        setUser((prevUser: User) => ({...prevUser, userId: (Math.floor(Math.random() * 100))}));
        console.log(user)
        setChosenAnimal(props.animal);
        navigate('/confirmed');
    }


    const findAdopted: boolean = adoptedList.find(adopted => adopted.animalId === props.animal.animalId) !== undefined;

    interface OverlayProps {
        animal: Animal;
        showForm: boolean;
        setUser: User;
        handleSubmit: (e:any) => void;
        handleOverlay: () => void;
        handleForm: () => void;
        user: User;
        handleAdopted: (animalId: number, userId: number) => void;
        adoptedList: Adopted[];
    };

    const overlayProps: OverlayProps = {
        animal: props.animal,
        showForm: showForm,
        setUser: user,
        handleSubmit: handleSubmit,
        handleOverlay: handleOverlay,
        handleForm: handleForm,
        user: user,
        handleAdopted: handleAdopted,
        adoptedList: adoptedList
    }

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
                <Overlay overlayProps={overlayProps} />            
            }
        </section>
    )
};

export default DisplayAnimal;
