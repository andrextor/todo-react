import { useState } from "react"


const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener(props) {

        const [storageChange, setStorageChaged] = useState(false);


        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log("cambiando-.-");
                setStorageChaged(true)
            }
        })

        const toogleShow = () => {
            props.sincronize()
            setStorageChaged(false)
        }

        return <WrappedComponent
            show={storageChange}
            toogleShow={toogleShow}
        />
    }
}


export { withStorageListener }