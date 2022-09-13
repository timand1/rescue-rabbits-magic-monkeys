import { Animal } from '../../models/data';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface AnimalCardProps {
    animal: Animal;
    handleOverlay: () => void;
    handleForm: () => void;
};

export default function AnimalCard(props: AnimalCardProps) {
    const { name, image, gender, age, species, breed, date, about, location, diseases, vaccinationer, children } = props.animal;

    const adoptedList = useSelector((state: RootState) => state.adoptedList)
    const findAdopted: boolean = adoptedList.find(adopted => adopted.animalId === props.animal.animalId) !== undefined;
    const buttonCSS : string = findAdopted ? ' btn-booked' : '';

    return (
        <section className='animal-container'>
            <figure style={{ backgroundImage: `url(${image})`}}>
                <div className='btn-close' onClick={props.handleOverlay}>
                    <div></div>
                    <div></div>
                </div>
                <p>&#x1F4C5; {date}</p>
            </figure>
            <div className="animal-info">
                <h2>{name}<span>, {species}</span></h2>
                <p>{about}</p>
                <div>
                    <p className='sub-headline'>Kön : </p>
                    <p>{gender}</p>
                </div>
                <div>
                    <p className='sub-headline'>Ålder : </p>
                    <p>{age} år</p>
                </div>
                <div>
                    <p className='sub-headline'>Ras : </p>
                    <p>{breed}</p>
                </div>
                <div>
                    <p className='sub-headline'>Plats : </p>
                    <p>{location}</p>
                </div>
                <div>
                    <p className='sub-headline'>Vaccin : </p>
                    <p>{vaccinationer}</p>
                </div>
                <div>
                    <p className='sub-headline'>Sjukdomar : </p>
                    <p>{diseases}</p>
                </div>
                <div>
                    <p className='sub-headline'>Barnvänlig : </p>
                    <p>{children}</p>
                </div>
                <button className={'btn' + buttonCSS} onClick={!findAdopted ? props.handleForm : undefined}> {findAdopted ? 'Bokad' : 'Adoptera' }</button>
            </div>
        </section>
    )
};