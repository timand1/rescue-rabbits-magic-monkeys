import { Animal, User } from '../models/data';
import '../styles/Confirmed.scss';
import logo from '../assets/LOGO.png';

interface ConfirmedProps {
    chosenAnimal: Animal | undefined;
    user: User;
  };
  
function Confirmed(props: ConfirmedProps) {
    const orderNum = props.user.userId + (Math.floor(Math.random() * 1000));

    return (
        <article className="confirmed">
            <h2>Tack för att du har räddat ett djur!</h2>
            <section>
                <img src={props.chosenAnimal?.image} alt="" />
                <p>{props.chosenAnimal?.name} är bokad till {props.user.fullName} och kan hämtas i våra lokaler i {props.chosenAnimal?.location}.</p>
                <p>Bekräftelsenummer - {orderNum} </p>
                <p>Bekräftelse skickad till - {props.user.email}</p>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
};

export default Confirmed;