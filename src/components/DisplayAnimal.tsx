import { Animal } from '../models/animal'

interface Props {
	animal: Animal;
    // handleClick : (name:any) => void;
}

const DisplayAnimal = (props: Props) => {
    const { name, image, gender, age, species, breed, date, why, location, diseases, booked } = props.animal
    console.log(image)
    return (
        <section className='animals'>
            <p>{name}</p>
            <img src={image} alt="" />
            <p>{species}</p>
        </section>
    )
}

export default DisplayAnimal
