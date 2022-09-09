import AnimalList from '../components/Animal-Grid/AnimalList';
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';

function Home() { 

  return (
    <div className="home">
      <Hero/>
      <AnimalList />
    </div>
  )
};

export default Home;