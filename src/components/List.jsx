import '../styles/list.css'

const List = ({ children }) => {
    return (
        <ul className='list'>{children}</ul>
    );
}


export { List }