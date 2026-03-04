import { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
        const exists = selectedTicked.find(t => t.id === tct.id);
        if (exists) {
            toast.info(`Ticket "${tct.title}" is already in Task Status!`);
            return;
        }

        setSelectedTicket([...selectedTicked, tct]);
        toast.success(`Ticket "${tct.title}" added to Task Status!`);
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