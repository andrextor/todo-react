import { withStorageListener } from "./WithStorageListener";
const ChangeAlert = ({ show, toogleShow }) => {
    if (show) {
        return <div>
            <p>Hubo Cambios</p>
            <button onClick={() => toogleShow(false)}>Cargar nueva information</button>
        </div>
    } else {
        return "No hay cambios"
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
