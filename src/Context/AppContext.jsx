import { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedTicket, setSelectedTicket] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

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
        const exists = selectedTicket.find(t => t.id === tct.id);
        if (exists) {
            toast.info(`Ticket "${tct.title}" is already in Task Status!`);
            return;
        }

        setSelectedTicket([...selectedTicket, tct]);
        toast.success(`Ticket "${tct.title}" added to Task Status!`);
    }

    const handleCompleteBtn = (cmt) => {
        const updatedSelected = selectedTicket.filter(t => t.id !== cmt.id);
        setSelectedTicket(updatedSelected);

        setResolvedTickets([...resolvedTickets, cmt])

        const updatedTickets = ticket.filter(t => t.id !== cmt.id);
        setTicket(updatedTickets);

        toast.success(`Ticket "${cmt.title}" resolved!`);
    }

    const value = {
        ticket,
        loading,
        handleTicket,
        selectedTicket,
        handleCompleteBtn,
        resolvedTickets
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;