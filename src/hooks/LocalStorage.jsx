import { useEffect, useState } from "react";


const useLocalStorage = (itemName, initialValue) => {
    const [items, setItems] = useState(initialValue);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        try {

            const itemsFromStorage = window.localStorage.getItem(itemName)

            if (!itemsFromStorage || itemsFromStorage === 'undefined') {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                setItems(JSON.stringify(initialValue))
                return
            }

            setItems(JSON.parse(itemsFromStorage))
            setloading(false)
        } catch (error) {
            console.log(error)
            setError(true)
        }

    }, [setItems])

    const saveTodos = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItems(newItems)
    }

    return [items, saveTodos, loading, error]
}

export { useLocalStorage }