// import '../styles/Confirmed.scss'
import { Animal } from '../models/animal'
import { User } from '../models/user'
import '../styles/Confirmed.scss'
import logo from '../assets/LOGO.png'

interface ConfirmedProps {
    chosenAnimal: Animal | undefined;
    user: User;
  }
function Confirmed(props: ConfirmedProps) {
    console.log(props)
    console.log(props.user)
    console.log(props.chosenAnimal)

    return (
        <article className="confirmed">
            <h2>Tack för att du har räddat ett djur!</h2>
            <section>
                <img src={props.chosenAnimal?.image} alt="" />
                <p>{props.chosenAnimal?.name} är bokad till {props.user.fullName} och kan hämtas i våra lokaler i {props.chosenAnimal?.location}.</p>
                <p>Bekräftelsenummer - genereras i databas?</p>
                <p>Bekräftelse skickad till - {props.user.email}</p>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
}

export default Confirmed