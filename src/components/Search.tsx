import { useState } from 'react';
import '../styles/_search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { actions as animalActions } from '../features/animalReducer';
import jsonData from '../data/data.json';

export default function Search() {  
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearch: (e:any) => void = (e:any) => {
        const value : string = e.target.value
            setSearchInput(value);
            if(e.key === 'Enter' && searchInput.length >= 1) {
                searchType(value);
            }
    };

    const searchType: (searchInput: string) => void = (searchInput : string) => {
        if(searchInput.length > 0) {
            const searchLowerCase = searchInput.toLowerCase();
            if(searchInput.length > 5 && searchInput.includes(' ')) {
                dispatch(animalActions.multipleSearchAnimals(searchLowerCase));
            } else {
                dispatch(animalActions.singleSearchAnimals(searchLowerCase));
            }
        } else { return }
    };    

    const showAll: () => void = () => {
        dispatch(animalActions.allAnimals());
        setSearchInput('');
    };    
    
    const preventRefresh: (e:any) => void = (e:any) => {        
        e.preventDefault();        
    }

    const animalList = useSelector((state: RootState) => state.animals);
    
    let resetSearch: boolean = false;

    if(animalList.length < jsonData.animals.length) {
        resetSearch = true;
    }

    return (
        <form className='search-container' onSubmit={preventRefresh}>
            <div className='search'>
                <input className='search-form' type="text" placeholder='Sök efter ras, ålder eller plats' value={searchInput} onChange={(e) => {handleSearch(e)}} />
                {resetSearch &&
                    <input className='cancel-search' type="reset" onClick={showAll} value="X" />
                }
                <button className='search-btn' onClick={(e) => searchType(searchInput)}>SÖK</button>
            </div>                          
        </form>       
    )
};


