// import '../styles/Confirmed.scss'
import { Animal } from '../models/animal'
import { User } from '../models/user'

interface ConfirmedProps {
    chosenAnimal: Animal | undefined;
    user: User;
  }
function Confirmed(props: ConfirmedProps) {
    console.log(props.user)
    console.log(props.chosenAnimal)

    return (
        <article className="confirmed">
            <h1>TACK</h1>
            <h2>För att du har räddat ett djur</h2>

        </article>
    )
}

export default Confirmed