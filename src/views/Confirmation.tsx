import logo from '../assets/LOGO.png'

function Confirmation() {
    return (
        <article className="confirmation">
            <section>
                <h2>Tack för att du har räddat ett djur</h2>
                <figure style={{backgroundImage: `url(${animalImage})`}}></figure>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
}

export default Confirmation