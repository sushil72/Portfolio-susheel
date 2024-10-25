import aws from "../assets/images/aws.png";
import react from "../assets/images/react1.png";
import spring from "../assets/images/springboot.png";

const Services = () => {
    return (
        <div className="bg-slate-950 py-14 text-center" id="services">
            <div>
                <h1 className="text-4xl font-semibold  text-white">My services</h1>
            </div>

            <div className="flex flex-col lg:flex-row py-16 mt-6 px-4 lg:px-14 gap-12">
                <div className="border px-6 lg:px-10 py-10 lg:py-16 rounded-3xl shadow-sm bg-gray-600 w-full lg:w-2/6 shadow-stone-200 transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center">
                        <img src={react} alt="React Development" className="max-w-20" />
                    </div>
                    <h2 className="text-2xl py-5 text-gray-100 font-semibold">React Development</h2>
                    <p className="text-justify text-gray-200">I specialize in React development, creating dynamic, high-performance web applications that offer exceptional user experiences. With a strong foundation in modern JavaScript and React, I build responsive and scalable web applications. My services include custom web application development, API integration, performance optimization, and ensuring cross-device compatibility. Let's collaborate to transform your ideas into interactive and efficient web applications.</p>
                </div>

                <div className="border px-6 lg:px-10 py-10 lg:py-14 rounded-3xl shadow-sm bg-gray-600 w-full lg:w-2/6 shadow-stone-200 transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center">
                        <img src={spring} alt="Spring Development" className="max-w-20" />
                    </div>
                    <h2 className="text-2xl py-5 font-semibold text-gray-100">Spring Development</h2>
                    <p className="text-justify text-gray-200">I specialize in backend development using Spring Boot, creating robust, scalable, and secure server-side applications. With expertise in Java and the Spring ecosystem, I build efficient RESTful APIs, manage relational and NoSQL databases, and implement comprehensive security measures. My services include performance optimization, seamless integration with frontend systems, and deployment.</p>
                </div>

                <div className="border px-6 lg:px-10 py-10 lg:py-16 rounded-3xl shadow-sm bg-gray-600 w-full lg:w-2/6 shadow-stone-200 transition-transform duration-300 hover:scale-105">
                    <div className="flex justify-center">
                        <img src={aws} alt="AWS Cloud Deployment" className="max-w-20" />
                    </div>
                    <h2 className="text-2xl py-5 font-semibold text-gray-100">Deployment on AWS Cloud</h2>
                    <p className="text-justify text-gray-200">I specialize in deploying applications on AWS Cloud, ensuring your web applications are scalable, reliable, and secure. With extensive experience in AWS services like EC2, S3, RDS, and Lambda, I manage the full deployment process, from configuring infrastructure to optimizing performance and ensuring high availability. Let's work together to leverage the power of AWS Cloud for your application deployment needs.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
