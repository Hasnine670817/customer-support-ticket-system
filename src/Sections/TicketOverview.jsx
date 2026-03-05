import { useContext } from "react";
import boxShape from "../assets/images/box-shape.png"
import { AppContext } from "../Context/AppContext";

const TicketOverview = () => {

    const { selectedTicket, resolvedTickets } = useContext(AppContext);

    return (
        <section className="py-10 lg:py-14 xl:py-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] rounded-lg h-[150px] md:h-[250px] flex items-center justify-center flex-col relative z-10">
                        <img className="absolute w-full left-0 bottom-0 h-full -z-[1]" src={boxShape} alt="image" />
                        <h5 className="text-lg md:text-2xl font-normal text-white mb-4">In-Progress</h5>
                        <span className="text-4xl md:text-6xl font-semibold text-white">{selectedTicket.length}</span>
                    </div>
                    <div className="bg-[linear-gradient(90deg,_#54CF68_9.6%,_#00827A_92.23%)] rounded-lg h-[150px] md:h-[250px] flex items-center justify-center flex-col relative z-10">
                        <img className="absolute w-full left-0 bottom-0 h-full -z-[1]" src={boxShape} alt="image" />
                        <h5 className="text-lg md:text-2xl font-normal text-white mb-4">Resolved</h5>
                        <span className="text-4xl md:text-6xl font-semibold text-white">{resolvedTickets.length}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketOverview;