import { Animal, Adopted, User } from '../../models/data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from '../Overlay-Animal/Overlay';

interface DisplayAnimalProps {
	animal: Animal;
    setChosenAnimal: (chosenAnimal: Animal) => void;
    setUser: any;
    user: User;
    handleAdopted: (animalId: number, userId: number) => void;
    adoptedList: Adopted[];
};

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, date, location } = props.animal;
    const {setUser, setChosenAnimal, animal} = props;
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
        setUser((prevUser: User) => ({...prevUser, userId: (Math.random() * 100)}));
        setChosenAnimal(props.animal);
        navigate('/confirmed');
    }


    const findAdopted = props.adoptedList.find(adopted => adopted.animalId === animal.animalId);

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
                <Overlay 
                    animal={animal} setUser={setUser} 
                    showForm={showForm} handleForm={handleForm} 
                    handleOverlay={handleOverlay} handleSubmit={handleSubmit} 
                    user={props.user} handleAdopted={props.handleAdopted}
                    adoptedList={props.adoptedList}
                />            
            }

        </section>
    )
};

export default DisplayAnimal;
