
import { useContext } from 'react';
import '../styles/search.css'
import { TodoContext } from '../TodoContext';

const Search = () => {

    const { search, setSearch } = useContext(TodoContext)

    return (
        <>
            <input
                className='search'
                type="search"
                id="search"
                placeholder="sacar al firu.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
}


export { Search };