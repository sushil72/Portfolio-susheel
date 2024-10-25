import html from "../assets/skillImages/html.png";
import css from "../assets/skillImages/css-3.png";
import js from "../assets/skillImages/js.png";
import git from "../assets/skillImages/social.png";
import tailwind from "../assets/skillImages/tailwind.svg";
import react from "../assets/images/react1.png";
import springboot from "../assets/images/spring.png";
import mysql from "../assets/skillImages/MySQL.png";
import postman from "../assets/skillImages/Postman.png";
import docker from "../assets/skillImages/Docker.png";
import intellij from "../assets/skillImages/Intellij.png";
import vscode from "../assets/skillImages/vscode.png";
import java from "../assets/skillImages/java.png";
import PostgresSQL from "../assets/skillImages/PostgreSQL.png";
import hibernate from "../assets/skillImages/hibernate.png";
import eclipse from "../assets/skillImages/eclipse.png";
import tomcat from "../assets/skillImages/tomcat.png";
import aws from "../assets/images/aws.png";

const Experties = () => {
    return (
        <div className="bg-slate-900 py-14 text-center" id="skills">
            <div>
                <h1 className="text-4xl font-semibold  text-white">My Experties</h1>
            </div>
            <div className="flex flex-col lg:justify-center lg:flex-row gap-5">
                <div className="w-full lg:w-1/2 md:w-11/12  mt-16 py-6 mx-4 lg:ml-10 rounded-3xl border bg-slate-800">
                    <h1 className="text-white text-2xl"><span className="text-4xl font-semibold">M</span>y tech Stack</h1>
                    <p className="text-gray-300 py-8 text-justify px-4 lg:px-16 text-base md:text-lg">
                        I am a versatile and passionate developer with a strong foundation in both frontend and backend technologies. My expertise spans across various modern web development frameworks and tools. On the frontend, I excel in creating dynamic and responsive web applications using React, HTML, CSS, and JavaScript. I am proficient in using Tailwind CSS for efficient and stylish UI design. For backend development, I specialize in building robust and scalable server-side applications with Spring Boot, ensuring seamless integration with databases like MySQL, PostgreSQL, and MongoDB. I am also skilled in deploying applications on AWS Cloud, leveraging services such as EC2, S3, and Lambda to deliver high-performance solutions. Additionally, I have experience with version control systems like Git and CI/CD tools like Jenkins and GitHub Actions. My comprehensive skill set enables me to handle full-stack development projects with confidence and precision, delivering exceptional results tailored to meet your business needs.
                    </p>
                </div>


                <div className="w-full lg:w-1/3 mt-16 mr-4 lg:mr-10 flex flex-wrap gap-4 justify-center p-8">
                    {/* Skill icons */}
                    {[
                        { src: html, alt: "HTML", class: "w-16 lg:w-20 animate-zoom-in-out" },
                        { src: css, alt: "CSS", class: "w-16 lg:w-20 animate-zoom-in-out" },
                        { src: js, alt: "JavaScript", class: "w-12 lg:w-16 animate-zoom-in-out" },
                        { src: react, alt: "React", class: "w-16 lg:w-20 animate-rotate-slow" },
                        { src: tailwind, alt: "Tailwind", class: "w-12 lg:w-16 animate-wind" },
                        { src: git, alt: "Git", class: "w-12 lg:w-16 animate-shake-slow" },
                        { src: "", alt: "GitHub", class: "text-6xl text-white animate-bob-slow" }, // GitHub icon (font-awesome)
                        { src: java, alt: "Java", class: "w-12 lg:w-16 animate-bob-slow" },
                        { src: hibernate, alt: "Hibernate", class: "w-12 lg:w-16 animate-pulse" },
                        { src: springboot, alt: "Spring Boot", class: "w-12 lg:w-16 animate-wind" },
                        { src: intellij, alt: "IntelliJ IDEA", class: "w-12 lg:w-16 animate-zoom-in-out" },
                        { src: vscode, alt: "VS Code", class: "w-12 lg:w-16 animate-zoom-in-out" },
                        { src: mysql, alt: "MySQL", class: "w-12 lg:w-16 animate-bounce" },
                        { src: PostgresSQL, alt: "PostgreSQL", class: "w-12 lg:w-16 animate-zoom-in-out" },
                        { src: postman, alt: "Postman", class: "w-20 lg:w-28 animate-bob-slow" },
                        { src: docker, alt: "Docker", class: "w-12 lg:w-16 animate-bob-slow" },
                        { src: eclipse, alt: "Eclipse", class: "w-12 lg:w-16 bg-gray-300 rounded-full animate-bob-slow" },
                        { src: tomcat, alt: "Tomcat", class: "w-12 lg:w-16 bg-yellow-600 rounded-full animate-pulse" },
                        { src: aws, alt: "AWS", class: "w-12 lg:w-16 rounded-full animate-bob-slow" },
                    ].map((icon, index) => (
                        <div key={index} className="flex justify-center items-center">
                            {icon.src ? (
                                <img src={icon.src} alt={icon.alt} className={icon.class} />
                            ) : (
                                <i className={`fa-brands fa-github ${icon.class}`}></i>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Experties;
