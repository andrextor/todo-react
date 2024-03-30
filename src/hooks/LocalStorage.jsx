import { useEffect, useState } from "react";


const useLocalStorage = (itemName = null, initialValue = null) => {
    const initial = initialValue ?? [];
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [todos, setItems] = useState(initial);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const itemsFromStorage = window.localStorage.getItem(itemName)

            if (!itemsFromStorage || itemsFromStorage === 'undefined') {
                localStorage.setItem(itemName, JSON.stringify(initial));
                setItems(JSON.stringify(initial))
                return
            }

            setItems(JSON.parse(itemsFromStorage))
            setloading(false)
            setSincronizedItem(true)
        } catch (error) {
            console.log(error)
            setError(true)
        }

    }, [sincronizedItem])

    const saveTodos = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItems(newItems)
    }

    const sincronizeItem = () => {
        setloading(true);
        setSincronizedItem(false)

    }

    return [todos, saveTodos, loading, error, sincronizeItem]
}

export { useLocalStorage }