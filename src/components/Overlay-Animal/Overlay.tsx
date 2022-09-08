import { Animal, User, Adopted } from '../../models/data';
import AnimalCard from './AnimalCard';
import FormCard from './FormCard';

interface OverlayProps {
    overlayProps : {
        animal: Animal;
        showForm: boolean;
        setUser: User;
        handleSubmit: (e:any) => void;
        handleOverlay: () => void;
        handleForm: () => void;
        user: User;
        handleAdopted: (animalId: number, userId: number) => void;
        adoptedList: Adopted[];
    }
};

export default function Overlay(props: OverlayProps) {  
    const {animal, user, setUser, handleSubmit, handleOverlay, handleForm, adoptedList, handleAdopted } = props.overlayProps;

    interface FormCardProps {
        animal: Animal;
        user: User;
        setUser: any;
        handleSubmit: (e:any) => void;
        handleOverlay: () => void;
        handleAdopted: (animalId: number, userId: number) => void;
    };

    const formCardProps: FormCardProps = {
        animal: animal,
        user: user,
        setUser: user,
        handleSubmit: handleSubmit,
        handleOverlay: handleOverlay,
        handleAdopted: handleAdopted,
    }

    return (
        <section className='overlay'>
            {!props.overlayProps.showForm && 
                <AnimalCard 
                    animal={animal} handleOverlay={handleOverlay} 
                    handleForm={handleForm} adoptedList={adoptedList} 
                />}
            {props.overlayProps.showForm && 
                <FormCard formCardProps={formCardProps} />}                    
        </section>
        
       
    )
};
