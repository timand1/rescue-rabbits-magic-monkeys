import { Animal } from '../models/animal'
import { User } from '../models/user'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DisplayAnimalProps {
	animal: Animal;
    setChosenAnimal: (chosenAnimal: Animal) => void;
    setUser: any;
}

const DisplayAnimal = (props: DisplayAnimalProps) => {
    const { name, image, gender, age, species, breed, date, about, location, diseases, booked } = props.animal
    const {setUser, setChosenAnimal} = props;
    const navigate = useNavigate();

    const [overlay, setOverlay] = useState<boolean>(false)
    const [showForm, setShowForm] = useState<boolean>(false)

    const handleOverlay: () => void = () => {
        setOverlay(!overlay);
        if(showForm) {
            setShowForm(false)
        }
    }

    const handleForm: () => void = () => setShowForm(!showForm);

    const handleSubmit: (e:any) => void = (e:any) => {
        e.preventDefault();
        setChosenAnimal(props.animal.booked = true)
        navigate('/confirmed')
    }

    // Get user data
    const handleFullName: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, fullName: e.target.value}))
    }

    const handleEmail: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, email: e.target.value}))
    }

    const handleCity: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, city: e.target.value}))
    }

    const handleAdress: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, adress: e.target.value}))
    }

    const handleZipCode: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, zipcode: e.target.value}))
    }

    const handleAbout: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, about: e.target.value}))
    }

    const handleExtra: (e:any) => void = (e:any) => {
        setUser((prevUser: User) => ({...prevUser, extra: e.target.value}))
    }

    const buttonCSS : string = booked ? ' btn-booked' : ''

    return (
        <section className='card'>
            <figure style={{ backgroundImage: `url(${image})`}}>
            <p>{date}</p>
            </figure>
            <section className="text-container"> 

                <div className='card-headline'>
                    <h2>{name}</h2>    
                    {booked && <span className='booked'>Bokad</span>} 
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
                <section className='overlay'>
                    {!showForm &&
                        <section className='animal-container'>
                            <figure style={{ backgroundImage: `url(${image})`}}>
                                <div className='btn-close' onClick={handleOverlay}>
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
                                <button className={'btn' + buttonCSS} onClick={!booked ? handleForm : undefined}> {booked ? 'Bokad' : 'Intresseanmäl' }</button>
                            </div>
                        </section>
                    }
                    {showForm &&
                        <section className="form-container">
                                <div className="form-header">
                                    <h2>Form</h2>
                                    <div className='btn-close' onClick={handleOverlay}>
                                            <div></div>
                                            <div></div>
                                    </div>
                                </div>
                            <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                    <label htmlFor="fullName">Namn*</label>
                                    <input type="text" id='fullName' required onChange={(e) => handleFullName(e)}/>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="email">E-mail*</label>
                                    <input type="email" id='email' required onChange={(e) => handleEmail(e)}/>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="city">Stad*</label>
                                    <input type="text" id='city' required onChange={(e) => handleCity(e)}/>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="adress">Adress*</label>
                                    <input type="text" id='adress' required onChange={(e) => handleAdress(e)}/>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="zipcode">Postnummer*</label>
                                    <input type="number" id='zipcode' required placeholder='12345' min={10000} max={99999} onChange={(e) => handleZipCode(e)}/>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="about">Om dig</label>
                                    <textarea name="text" id="about" cols={30} rows={8} onChange={(e) => handleAbout(e)}></textarea>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="extra">Övrig information</label>
                                    <textarea name="text" id="extra" cols={30} rows={8} onChange={(e) => handleExtra(e)}></textarea>
                                </div>
                                
                                <button type="submit"  className='btn btn-form'>Skicka</button>
                            </form>
                        </section>
                    }                    
                </section>
            }

        </section>
    )
}

export default DisplayAnimal
