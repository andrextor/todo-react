import '../styles/list.css'

const List = (props) => {
    const render = props.children ?? props.render;
    return (
        <section className='TodoList-container' >
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.todos?.length) && props.onEmpty()}
            {(!props.loading && !props.searchedTodos()?.length && props.search) && props.onEmptySearchResults(props.search)}
            {props.searchedTodos()?.map(render)}
        </section >
    );
}


export { List }