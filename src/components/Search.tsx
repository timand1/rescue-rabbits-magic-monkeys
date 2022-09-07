import { useState } from 'react';
import { Animal } from '../models/data';
import data from '../data/data.json';
import '../styles/_search.scss';

interface SearchProps {
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

    return (
        <div className='search-container'>
            <div className='search'>
                <input className='search-form' type="text" placeholder='Sök efter ras, ålder eller plats' onKeyUp={(e) => {handleSearch(e)}} />
                <button className='search-btn' onClick={() => searchType(searchInput)} >SÖK</button>
            </div>
            <button className='show-all' onClick={showAll}>ALLA DJUR</button>               
        </div>       
    )
};


