import '../styles/About.scss';
import  logo  from '../assets/LOGO.png';
import { useSelector } from 'react-redux'
import { RootState } from '../store';
function About() {
    const adoptedList = useSelector((state: RootState) => state.adoptedList)
    console.log(adoptedList)
    return (
        <article className="about">
            <h1>OM OSS</h1>
            <section>
                <h2>Vårt mål är .... </h2>
                <p>Webbappen ska presentera alla djur väntar på en ny ägare. 
                Det behöver finnas en lista, där man kan se många, samt en vy där man kan titta närmare på ett djur. 
                Man ska även kunna söka. Om användaren vill adoptera ett djur, ska det finnas ett formulär för att samla in relevant information. Djur som blivit "bokade" ska förstås inte gå att boka igen, men de kan fortfarande visas i listan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum neque eum sequi, tempora nesciunt ullam dolorum quasi vitae, in molestias impedit similique. Atque neque molestiae numquam odit facere reprehenderit?</p>
                <p className='quote'>Protect, rescue, adopt, repeat - Felix 2022</p>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
};

export default About;