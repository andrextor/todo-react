
import '../styles/search.css'

const Search = ({ search, setSearch }) => {
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