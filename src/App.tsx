import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Confirmed from './views/Confirmed';
import Footer from './components/Footer';

function App() {  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Confirmed' element={ <Confirmed /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
