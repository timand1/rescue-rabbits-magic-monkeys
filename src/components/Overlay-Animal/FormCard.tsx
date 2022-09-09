import { Animal, Adopted, User } from '../../models/data';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { actions as userActions } from '../../features/userReducer'
import { actions as chosenActions } from '../../features/chosenReducer'
import { actions as adoptedActions } from '../../features/adoptedReducer'

interface FormCardProps {
    animal: Animal;
    handleOverlay: () => void;
};

export default function FormCard(props:FormCardProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<User>({fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: '', userId: 0});

    const handleFormInput: (e:any) => void = (e:any) => {
        const {name, value } = e.target;
        setNewUser((prevUser: User) => ({...prevUser,[name]: value}));   
    };

    const handleSubmit: (e:any) => void = (e:any) => {
        e.preventDefault();        
        dispatch(chosenActions.choseAnimal(props.animal));
        setNewUser((prevUser: User) => ({...prevUser, userId: Math.floor(Math.random() * 1000)})); 
        dispatch(userActions.addUser(newUser));
        navigate('/confirmed');
    };

    const handleAdopted = (animalId: number, userId: number) => {
        let adopted: Adopted = {
            userId: userId,
            animalId: animalId
        };
        dispatch(adoptedActions.addAdopted(adopted));
  };

    return (
        <section className="form-container">
            <div className="form-header">
                <h2>Form</h2>
                <div className='btn-close' onClick={props.handleOverlay}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="fullName">Namn*</label>
                    <input type="text" id='fullName' name='fullName' required onChange={(e) => handleFormInput(e)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail*</label>
                    <input type="email" id='email' name='email' required onChange={(e) => handleFormInput(e)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="city">Stad*</label>
                    <input type="text" id='city' name='city' required onChange={(e) => handleFormInput(e)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="adress">Adress*</label>
                    <input type="text" id='adress' name='adress' required onChange={(e) => handleFormInput(e)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="zipcode">Postnummer*</label>
                    <input type="number" id='zipcode' name='zipcode' required placeholder='12345' min={10000} max={99999} onChange={(e) => handleFormInput(e)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="about">Om dig</label>
                    <textarea name="about" id="about" cols={30} rows={8} onChange={(e) => handleFormInput(e)}></textarea>
                </div>
                <div className="input-container">
                    <label htmlFor="extra">Övrig information</label>
                    <textarea name="extra" id="extra"  cols={30} rows={8} onChange={(e) => handleFormInput(e)}></textarea>
                </div>            
                <button type="submit" onClick={() => handleAdopted(props.animal.animalId, newUser.userId)} className='btn btn-form'>Skicka</button>
            </form>
        </section>
    )
};