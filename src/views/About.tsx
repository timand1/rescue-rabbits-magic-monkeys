import '../styles/About.scss'

function About() {

    return (

            <article className="about">
                <h1>OM OSS</h1>
                <section>
                    <p>Vårt mål är .... 
                        <br /> <br />Webbappen ska presentera alla djur väntar på en ny ägare. 
                    Det behöver finnas en lista, där man kan se många, samt en vy där man kan titta närmare på ett djur. 
                    Man ska även kunna söka. Om användaren vill adoptera ett djur, ska det finnas ett formulär för att samla in relevant information. Djur som blivit "bokade" ska förstås inte gå att boka igen, men de kan fortfarande visas i listan</p>
                </section>
                <figure className='logo'></figure>
            </article>

    )
}

export default About