import { FaBars } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {

    const links = (
        <>
            <li>
                <Link to={"/"} className="text-[#000000E5] font-normal hover:text-[#632EE3]">Home</Link>
            </li>
            <li>
                <Link className="text-[#000000E5] font-normal hover:text-[#632EE3]">FAQ</Link>
            </li>
            <li>
                <Link className="text-[#000000E5] font-normal hover:text-[#632EE3]">Changelog</Link>
            </li>
            <li>
                <Link className="text-[#000000E5] font-normal hover:text-[#632EE3]">Blog</Link>
            </li>
            <li>
                <Link className="text-[#000000E5] font-normal hover:text-[#632EE3]">Download</Link>
            </li>
            <li>
                <Link className="text-[#000000E5] font-normal hover:text-[#632EE3]">Contact</Link>
            </li>
            <li>
                <Link className="py-2.5 font-semibold px-4 flex items-center gap-2.5 bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] text-white rounded-sm hover:opacity-80 justify-center lg:justify-start mt-3 lg:mt-0"><FiPlus /> New Ticket</Link>
            </li>
        </>
    )

    return (
        <header className="bg-white border-b border-[#E9E9E9] py-3 lg:py-4">
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-[#130B2D]">CS — Ticket System</h2>
                    <ul className="text-sm xl:text-base hidden lg:flex items-center gap-6 xl:gap-8">
                        {links}
                    </ul>
                    <div className="drawer block w-auto lg:hidden">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content text-end">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-1" className="btn p-0 border-0 bg-transparent text-base"><FaBars /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                {links}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;