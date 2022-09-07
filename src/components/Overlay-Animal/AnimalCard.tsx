import { Animal, Adopted } from '../../models/data'

interface AnimalCardProps {
    animal: Animal;
    handleOverlay: () => void;
    handleForm: () => void;

    adoptedList: Adopted[]
}

export default function AnimalCard(props: AnimalCardProps) {
    const { name, image, gender, age, species, breed, date, about, location, diseases } = props.animal

    const findAdopted = props.adoptedList.find(adopted => adopted.animalId === props.animal.animalId)
    const buttonCSS : string = findAdopted ? ' btn-booked' : '';

    return (
        <section className='animal-container'>
            <figure style={{ backgroundImage: `url(${image})`}}>
                <div className='btn-close' onClick={props.handleOverlay}>
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
                <div>
                    <p className='sub-headline'>Sjukdomar : </p>
                    <p>{diseases}</p>
                </div>
                <button className={'btn' + buttonCSS} onClick={!findAdopted ? props.handleForm : undefined}> {findAdopted ? 'Bokad' : 'Intresseanmäl' }</button>
            </div>
        </section>
    )
}