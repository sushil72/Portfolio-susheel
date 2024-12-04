import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import resumePdf from "../assets/Resume/Susheel_Resume.pdf";
const Navbar = () => {
  const [brandName] = useState("Susheel Kumar ");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [actionButton] = useState({
    title: "Resume",
    link: resumePdf, // Set the link to the resume PDF
  });

  const handleDownload = () => {
    window.open(actionButton.link, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      } else {
        // setIsMenuOpen(true);
      }
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex z-10 bg-slate-950 text-white fixed justify-between py-4 px-6 border-b items-center font-semibold shadow-lg w-full">
        <div className="flex items-center gap-4">
          <img className="w-8 rounded-full px-1" src={logo} alt="Logo" />
          <h2 className="text-3xl uppercase">{brandName}</h2>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  !isMenuOpen
                    ? "M4 6h16M4 12h16m-7 6h7"
                    : "M6 18L18 6M6 6l12 12"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center gap-4 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul
            className={`flex flex-col md:flex-row gap-4 ${
              isMenuOpen &&
              "bg-slate-950 absolute top-20 right-0 text-center w-[11rem] p-5"
            }`}
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className={`hidden md:block`}>
          <button
            onClick={() => window.open(actionButton.link, "_blank")}
            className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 font-semibold shadow-lg"
          >
            {actionButton.title}
          </button>
        </div>

        {/* Action Button for Small Screens */}
        <div
          className={`block md:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <button
            onClick={handleDownload}
            className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 font-semibold shadow-lg w-full"
          >
            {actionButton.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
