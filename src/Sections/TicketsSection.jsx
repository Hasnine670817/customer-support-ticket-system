import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { IoCalendarClearOutline } from "react-icons/io5";

const TicketsSection = () => {

    const { handleTicket, ticket, selectedTicked } = useContext(AppContext);
    // console.log(ticket);

    return (
        <section className="pb-10 md:pb-20">
            <div className="container-custom">
                <div className="grid xl:grid-cols-[auto_360px] gap-8">
                    <div>
                        <h4 className="text-xl lg:text-2xl font-semibold text-[#34485A] mb-4">Customer Tickets</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-4 2xl:gap-6">
                            {ticket.map(t => (
                                <div 
                                    key={t.id}
                                    className="bg-white px-4 py-5 rounded-sm [box-shadow:0px_4px_16px_0px_#00000014] hover:shadow-md transition cursor-pointer" 
                                    onClick={() => handleTicket(t)}
                                >

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-3">
                                        <h5 className="text-sm lg:text-lg xl:text-base 2xl:text-lg font-semibold text-gray-800 max-w-[65%] truncate">
                                            {t.title}
                                        </h5>

                                        {/* Status Badge */}
                                        <span className={`lg:px-3 px-2 py-0.5 lg:py-1 xl:px-2 2xl:px-3 flex gap-1.5 items-center text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full font-medium
                                                ${t.status === "Open" && "bg-[#B9F8CF] text-green-700 open"}
                                                ${t.status === "In Progress" && "bg-[#F8F3B9] text-yellow-700 in-progress"}
                                                ${t.status === "Closed" && "bg-gray-200 text-gray-700"}
                                            `}>
                                            <span className={`w-2 h-2 lg:w-3 lg:h-3 xl:w-2 xl:h-2 2xl:w-3 2xl:h-3 rounded-full 
                                                ${t.status === "Open" && "bg-[#02A53B]"}
                                                ${t.status === "In Progress" && "bg-[#FEBB0C]"}
                                            `}></span>
                                            <span>
                                                {t.status}
                                            </span>
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-xs lg:text-sm mb-4 line-clamp-2">
                                        {t.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="sm:flex md:block lg:flex xl:flex-wrap xl:gap-2 justify-between items-center text-sm text-gray-500">

                                        <div className="flex justify-start items-center gap-4">
                                            <span className="font-medium text-[#627382] text-xs lg:text-sm xl:text-xs 2xl:text-sm">
                                                #{t.id}
                                            </span>

                                            <span className={`font-semibold text-xs lg:text-sm xl:text-xs 2xl:text-sm
                                                ${t.priority === "High" && "text-red-600"}
                                                ${t.priority === "Medium" && "text-yellow-600"}
                                                ${t.priority === "Low" && "text-green-600"}
                                            `}>
                                                {t.priority.toUpperCase()} PRIORITY
                                            </span>
                                        </div>

                                        <div className="flex justify-start items-center gap-3 text-xs lg:text-sm xl:text-xs 2xl:text-sm mt-2 sm:mt-0 md:mt-2 lg:mt-0">
                                            <span>{t.customer}</span>
                                            <span className="flex items-center gap-2"><IoCalendarClearOutline className="text-lg" /> {t.createdAt}</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="mb-6 md:mb-10">
                            <h4 className="text-xl lg:text-2xl font-semibold text-[#34485A] mb-2 md:mb-4">Task Status</h4>
                            <div className="flex flex-col gap-4">
                                {selectedTicked.length > 0 ? (
                                    selectedTicked.map(t => (
                                        <div 
                                            key={t.id} 
                                            className="bg-white rounded-sm p-4 [box-shadow:0px_4px_16px_0px_#00000014]"
                                        >
                                            <h5 className="text-sm lg:text-lg xl:text-base 2xl:text-lg font-semibold text-gray-800 truncate mb-3">
                                                {t.title}
                                            </h5>
                                            <button type="button" className="w-full text-center btn bg-[#02A53B] rounded-sm text-white font-semibold text-base h-[43px] border-0 hover:bg-[#066627]">Complete</button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm md:text-base text-[#627382]">Select a ticket to add to Task Status</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl lg:text-2xl font-semibold text-[#34485A] mb-2 md:mb-4">Resolved Task</h4>
                            <p className="text-sm md:text-base text-[#627382]">No resolved tasks yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketsSection;
