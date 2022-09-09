import '../styles/Confirmed.scss';
import logo from '../assets/LOGO.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function Confirmed() {    
    const user = useSelector((state: RootState) => state.user);
    const chosenAnimal = useSelector((state: RootState) => state.chosen);
    const orderNum = user.userId + (Math.floor(Math.random() * 1000));

    return (
        <article className="confirmed">
            <h2>Tack för att du har räddat ett djur!</h2>
            <section>
                <img src={chosenAnimal?.image} alt="" />
                <p><span className='confirmed-bold'>{chosenAnimal?.name}</span>, {chosenAnimal.species.toLowerCase()}, är nu bokad till <span className='confirmed-bold'>{user.fullName}</span></p>
                <p>Plats -  <span className='confirmed-bold'>{chosenAnimal?.location}</span></p>
                <p>Bekräftelsenummer - <span className='confirmed-bold'>{orderNum}</span> </p>
                <p>Bekräftelse skickad till - <span className='confirmed-bold'>{user.email}</span></p>
                <p>Vi kommer att höra av oss så fort vi har utfört våran analys om <span className='confirmed-bold'>{chosenAnimal?.name}</span> passar in hos er!</p>
                <figure style={{ backgroundImage: `url(${logo})` }}></figure>
            </section>
        </article>
    )
};

export default Confirmed;