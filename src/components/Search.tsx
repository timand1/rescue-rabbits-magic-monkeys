import { useState } from 'react';
import { Animal } from '../models/data';
import data from '../data/data.json';
import '../styles/_search.scss';
import animalList from '../data/data.json'

interface SearchProps {
    animals: Animal[];
    setAnimals: (animal: Animal[]) => void;
    searchAnimals: (searchParam: string) => void;
    searchMultiple: (searchParam: string) => void;
};

export default function Search(props: SearchProps) {  
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearch: (e:any) => void = (e:any) => {
        const value : string = e.target.value;
        if(value.length > 0) {
            setSearchInput(value);
            if(e.key === 'Enter' && searchInput.length >= 1) {
                searchType(value);
            }
        }
    }

    const searchType: (searchInput: string) => void = (searchInput : string) => {
        if(searchInput.length > 5 && searchInput.includes(' ')) {
            props.searchMultiple(searchInput);
        } else {
            props.searchAnimals(searchInput);
        }
    };    

    const showAll: () => void = () => {

        props.setAnimals(data.animals);
    };    
    
    const preventRefresh: (e:any) => void = (e:any) => {        
        e.preventDefault();
    }

    let resetSearch: boolean = false;

    if(animalList.animals.length > props.animals.length) {
        resetSearch = true;
    }

    return (
        <form className='search-container' onSubmit={preventRefresh}>
            <div className='search'>
                <input className='search-form' type="text" placeholder='Sök efter ras, ålder eller plats' onKeyUp={(e) => {handleSearch(e)}} />
                {resetSearch &&
                    <input className='cancel-search' type="reset" onClick={showAll} value="&#128473;" />

                }
                <button className='search-btn' onClick={(e) => props.searchAnimals(searchInput)}>SÖK</button>
            </div>                          
        </form>       
    )
};


