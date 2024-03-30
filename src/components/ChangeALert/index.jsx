import { useStorageListener } from "./useStorageListener";
const ChangeAlert = ({ sincronized }) => {
    const { show, toogleShow } = useStorageListener(sincronized)
    if (show) {
        return <div>
            <p>Hubo Cambios</p>
            <button onClick={() => toogleShow(false)}>Cargar nueva information</button>
        </div>
    } else {
        return "No hay cambios"
    }

}

export { ChangeAlert }
