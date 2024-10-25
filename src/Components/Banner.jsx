import bannerImage from "../assets/images/photo.png";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { Link } from 'react-scroll';
const Banner = () => {
    const [text] = useTypewriter({
        words: ['Java Developer', 'React Developer', 'Spring Boot', 'Backend Developer'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
    });

    return (
        <div className="flex flex-col md:flex-row bg-slate-900 text-white py-10 px-4 items-center relative">
            <div className="w-full flex lg:justify-center md:justify-start mt-10 justify-center ">
                <div className="mt-10 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl mt-4 uppercase">Hay!, I'm</h2>
                    <h2 className="text-3xl md:text-5xl mt-3 font-semibold uppercase">Susheel Kumar</h2>
                    <h2 className="text-2xl md:text-4xl mt-2 font-medium text-red-500 uppercase">
                        I'm a <span className="inline-block uppercase">{text}<Cursor cursorStyle='/>' /></span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        As a Full Stack Java Developer, I bring extensive experience in designing<br />
                        and building robust, scalable web applications. My expertise spans<br />
                        both front-end and back-end development, enabling me to deliver<br />
                        comprehensive, end-to-end solutions.
                    </p>

                    <div className="mt-4 flex justify-center md:justify-start space-x-4 md:space-x-7">
                        <a href="" className="bg-gray-300 w-10 md:w-14 py-2 text-black rounded-full flex justify-center transition-transform duration-300 hover:scale-105">
                            <i className="fa-brands fa-instagram text-3xl md:text-4xl hover:bg-gray-200"></i>
                        </a>
                        <a href="" className="bg-gray-300 w-10 md:w-14 py-2 text-black rounded-full flex justify-center transition-transform duration-300 hover:scale-105">
                            <i className="fa-brands fa-facebook text-3xl md:text-4xl"></i>
                        </a>
                        <a href="" className="bg-gray-300 w-10 md:w-14 py-2 text-black rounded-full flex justify-center transition-transform duration-300 hover:scale-105">
                            <i className="fa-brands fa-github text-3xl md:text-4xl hover:bg-gray-200"></i>
                        </a>
                        <a href="" className="bg-gray-300 w-10 md:w-14 py-2 text-black rounded-full flex justify-center transition-transform duration-300 hover:scale-105">
                            <i className="fa-brands fa-linkedin text-3xl md:text-4xl hover:bg-gray-200"></i>
                        </a>
                    </div>

                    <div className="mt-9 flex justify-center md:justify-start cursor-pointer">
                        <Link to="contacts" smooth={true} duration={500}>
                            <a className="bg-red-500 px-4 py-2 md:px-4 md:py-4 hover:bg-slate-800 hover:border transition duration-300 ease-in-out font-semibold text-white rounded-full">
                                GET IN TOUCH <span className="text-xl md:text-2xl"> →</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center py-8 mt-10 md:mt-0 ">
                <img className="  w-2/3 md:w-auto absolute top-16 shadow-xl" src={bannerImage} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
