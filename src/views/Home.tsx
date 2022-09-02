// import { useState } from 'react'

import AnimalList from './AnimalList'
import '../App.scss';
import Hero from '../components/Hero';
function Home() {
  

  return (
    <div className="Home">
      {/* router */}
      <Hero/>
      <AnimalList />
    </div>
  )
}

export default Home