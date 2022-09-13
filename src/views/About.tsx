import '../styles/About.scss';
import  logo  from '../assets/LOGO.png';
import  animalPic from '/hero.jpg'

function About() {

    return (
        <article className="about">
            <h1>OM OSS</h1>
            <section>
                <h2>Rescue Rabbits </h2>
                <p>Rescue Rabbits mål är att alla djur överallt ska få ha ett bra liv utan våld, sjukdomar och hunger.</p>
                <p>Vi räddar djur i nöd för att sedan para ihop djuren med en ny familj där de kan leva lyckliga livet ut med mycket kärlek.</p>
                <p>Våran analys för att para ihop djur och person är väldigt genomgående för att båda parter ska bli nöjda.</p>
                <img className='about-image' src={animalPic} alt="dog" />
                <p className='quote'>Protect, rescue, adopt, repeat - Felix 2022</p>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
};

export default About;