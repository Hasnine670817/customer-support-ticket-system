import { Children, createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedTicked, setSelectedTicket] = useState([]);

    useEffect(() => {
        fetch('/Tickets.json')
            .then(res => res.json())
            .then(data => {
                setTicket(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    const handleTicket = (tct) => {
        console.log(tct);
        setSelectedTicket([...selectedTicked, tct])
    }

    const value = {
        ticket,
        loading,
        handleTicket,
        selectedTicked
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;