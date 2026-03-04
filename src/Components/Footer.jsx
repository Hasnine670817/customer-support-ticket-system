import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="pt-10 xl:pt-20 pb-0 bg-black">
            <div className="container-custom">
                <div className="footer gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                    <nav className="gap-3 md:gap-4">
                        <h4 className="footer-title text-lg xl:text-2xl font-bold text-white opacity-100 normal-case mb-0">CS — Ticket System</h4>
                        <p className="text-sm 2xl:text-base font-normal text-[#A1A1AA] max-w-[350px]">A smart and reliable ticket management solution that helps businesses organize, prioritize, and resolve customer issues faster.</p>
                    </nav>
                    <nav className="gap-3 md:gap-4 md:ps-10 xl:ps-20">
                        <h6 className="footer-title text-white text-base md:text-lg xl:text-xl font-medium opacity-100 normal-case mb-0">Company</h6>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">About us</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Our Mission</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Contact Saled</a>
                    </nav>
                    <nav className="gap-3 md:gap-4 xl:ps-10">
                        <h6 className="footer-title text-white text-base md:text-lg xl:text-xl font-medium opacity-100 normal-case mb-0">Services</h6>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Products & Services</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Customer Stories</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Download Apps</a>
                    </nav>
                    <nav className="gap-3 md:gap-4 xl:ps-8">
                        <h6 className="footer-title text-white text-base md:text-lg xl:text-xl font-medium opacity-100 normal-case mb-0">Information</h6>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Privacy Policy</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Terms & Conditions</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA]">Join Us</a>
                    </nav>
                    <nav className="gap-3 md:gap-4">
                        <h6 className="footer-title text-white text-base md:text-lg xl:text-xl font-medium opacity-100 normal-case mb-0">Social Links</h6>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA] opacity-100 flex items-center gap-2"><FaSquareXTwitter className="text-white text-lg" /> @CS — Ticket System</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA] opacity-100 flex items-center gap-2"><FaLinkedin className="text-white text-lg" /> @CS — Ticket System</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA] opacity-100 flex items-center gap-2"><FaFacebookSquare className="text-white text-lg" /> @CS — Ticket System</a>
                        <a className="link link-hover text-sm 2xl:text-base font-normal text-[#A1A1AA] opacity-100 flex items-center gap-2"><ImMail className="text-white text-lg" /> support@cst.com</a>
                    </nav>
                </div>

                <div className="border-t border-[#E5E7EB]/20 py-4 md:py-7 mt-10 md:mt-20 text-center text-xs md:text-base text-[#FAFAFA] font-normal">
                    © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;