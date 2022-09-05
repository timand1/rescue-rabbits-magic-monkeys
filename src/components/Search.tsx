// import { useNavigate } from 'react-router-dom';
import { Animal } from '../models/animal'
import { useState } from 'react';
import '../styles/_search.scss'
import animalList from '../animals.json'

interface SearchProps {
    searchAnimals: (searchParam: string) => void;
}

export default function Search(props: SearchProps) {  
    const [searchInput, setSearchInput] = useState<string>('')

    const handleSearch: (e:any) => void = (e:any) => {
        setSearchInput(e.target.value)
    }

    return (
        <div className='search-container'>
            <div className='search'>
                <input className='search-form' type="text" placeholder='Sök efter ras, ålder eller plats' onKeyUp={(e) => {handleSearch(e)}} />
                <button className='search-btn' onClick={() => props.searchAnimals(searchInput)}>SÖK</button>
            </div>

            
        </div>
        
       
    )
}


