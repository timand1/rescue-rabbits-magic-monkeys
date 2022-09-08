import { Animal, User } from '../../models/data'

interface FormCardProps {
    formCardProps : {
        setUser: any;
        handleSubmit: (e:any) => void;
        handleOverlay: () => void;
        user: User;
        animal: Animal;
        handleAdopted: (animalId: number, userId: number) => void;
    }
};

export default function FormCard(props: FormCardProps) {
    const {setUser, handleOverlay, handleSubmit, handleAdopted, animal, user} = props.formCardProps;

    const handleFormInput: (e:any) => void = (e:any) => {
        const {name, value } = e.target;
        setUser((prevUser: User) => ({...prevUser, [name]: value}));
    };

    return (
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
                <button type="submit" onClick={() => handleAdopted(animal.animalId, user.userId)} className='btn btn-form'>Skicka</button>
            </form>
        </section>
    )
};