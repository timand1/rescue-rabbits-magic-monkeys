import { useState } from 'react';
import { Animal } from '../models/data';
import data from '../data/data.json'
import '../styles/_search.scss'

interface SearchProps {
    setAnimals: (animal: Animal[]) => void;
    searchAnimals: (searchParam: string) => void;
    searchMultiple: (searchParam: string) => void;
}

export default function Search(props: SearchProps) {  
    const [searchInput, setSearchInput] = useState<string>('')
// fixa sök
    const handleSearch: (e:any) => void = (e:any) => {
        const value : string = e.target.value
        setSearchInput(value)
        if(e.key === 'Enter' && searchInput.length >= 1) {
            if(value.length > 0) {
                if(value.length > 5 && value.includes(' ')) {
                    props.searchMultiple(searchInput)
                } else {
                    props.searchAnimals(searchInput)
                }
            }
        }
    }

    const showAll: () => void = () => {
        props.setAnimals(data.animals) 
     }    
     const preventRefresh: (e:any) => void = (e:any) => {        
        e.preventDefault();
    }

    return (
        <form className='search-container' onSubmit={preventRefresh}>
            <div className='search'>
                <input className='search-form' type="text" placeholder='Sök efter ras, ålder eller plats' onKeyUp={(e) => {handleSearch(e)}} />
                <input className='cancel-search' type="reset" onClick={showAll} value="&#128473;" />
                <button className='search-btn' onClick={(e) => props.searchAnimals(searchInput)}>SÖK</button>
            </div>
                          
        </form>
        
       
    )
}


