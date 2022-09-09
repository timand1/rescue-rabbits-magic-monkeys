import { Animal } from '../../models/data';
import AnimalCard from './AnimalCard';
import FormCard from './FormCard';

interface OverlayProps {
    animal: Animal;
    showForm: boolean;
    handleOverlay: () => void;
    handleForm: () => void;
};

export default function Overlay(props: OverlayProps) {  
    const {animal, handleOverlay, handleForm } = props;

    return (
        <section className='overlay'>
            {!props.showForm && 
                <AnimalCard animal={animal} handleOverlay={handleOverlay} handleForm={handleForm} />}
            {props.showForm && 
                <FormCard animal={animal} handleOverlay={props.handleOverlay}/>}                    
        </section>
    )
};
