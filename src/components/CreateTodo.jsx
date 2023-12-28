import '../styles/createTodo.css'


const CreateTodo = ({ setOpenModal, openModal }) => {

    const openModel = () => setOpenModal(state => !state);

    return (
        <button className='create' onClick={openModel} >+</button>
    )
}

export { CreateTodo }