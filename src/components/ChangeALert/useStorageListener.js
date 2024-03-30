import { useState } from "react"

const useStorageListener = (sincronized) => {
    const [storageChange, setStorageChaged] = useState(false);


    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("cambiando-.-");
            setStorageChaged(true)
        }
    })

    const toogleShow = () => {
        sincronized()
        setStorageChaged(false)
    }

    return {
        show : { storageChange },
        toogleShow: { toogleShow }
    }
}


export { useStorageListener }