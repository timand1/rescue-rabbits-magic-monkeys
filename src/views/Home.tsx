// import { useState } from 'react'

import AnimalList from './AnimalList'
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
}

export default Home