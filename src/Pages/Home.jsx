import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import TicketOverview from "../Sections/TicketOverview";
import TicketsSection from "../Sections/TicketsSection";

const Home = () => {

    const { loading } = useContext(AppContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-[#7E45EA]"></span>
            </div>
        );
    }

    return (
        <main>
            <TicketOverview></TicketOverview>
            <TicketsSection></TicketsSection>
        </main>
    );
};

export default Home;