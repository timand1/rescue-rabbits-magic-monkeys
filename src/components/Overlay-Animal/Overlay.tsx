import { Animal, User, Adopted } from '../../models/data'
import AnimalCard from './AnimalCard'
import FormCard from './FormCard'

interface OverlayProps {
    animal: Animal;
    showForm: boolean;
    setUser: User;
    handleSubmit: (e:any) => void;
    handleOverlay: () => void;
    handleForm: () => void;
    user: User;
    handleAdopted: (animalId: number, userId: number) => void;
    adoptedList: Adopted[]
}

export default function Overlay(props: OverlayProps) {  

    return (
        <section className='overlay'>
            {!props.showForm && 
                <AnimalCard 
                    animal={props.animal} handleOverlay={props.handleOverlay} 
                    handleForm={props.handleForm} adoptedList={props.adoptedList} 
                />}
            {props.showForm && 
                <FormCard 
                    setUser={props.setUser} handleOverlay={props.handleOverlay} 
                    handleSubmit={props.handleSubmit} handleAdopted={props.handleAdopted}
                    user={props.user} animal={props.animal} 
                />}                    
        </section>
        
       
    )
}
