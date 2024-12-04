import React from "react";
import photo from "../assets/images/p3.png";
const ContactForm = () => {
  return (
    <div
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center py-20 "
      id="contacts"
    >
      <div className="bg-slate-800 rounded-lg shadow-lg p-10 md:flex md:space-x-10  w-9/12">
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={photo} // Replace with your image path
            alt="Contact Person"
            className="rounded-lg w-9/12  h-1/2  object-cover mb-4 md:mb-0 border bg-slate-950"
          />
          <div className=" mt-10">
            <p>WRITE AN E-MAIL</p>
            <a
              href={`mailto:sushilrohidas0@gmail.com`}
              className="text-red-400"
            >
              sushilrohidas0@gmail.com
            </a>
            <p className="mt-4">CALL US</p>
            <a href={`tel:+918652166584`} className="text-red-400">
              +91 8652166584
            </a>
          </div>
          <div className="flex gap-4 mt-4 justify-start items-center px-1 py-3  w-1/2">
            <a
              href="https://www.linkedin.com/in/susheel-kumar-rohidas-755b07261/"
              className="text-blue-400 bg-blue-100  hover:bg-slate-600 transition border rounded-full px-4 py-3"
            >
              <i className="fab fa-linkedin text-2xl px-1 bg"></i>
            </a>
            <a
              href="https://www.instagram.com/sushil_rohidas/"
              className="text-pink-500 bg-pink-100 hover:bg-slate-600 transition border rounded-full px-4 py-3 "
            >
              <i className="fab fa-instagram text-2xl "></i>
            </a>
            <a
              target="_blank"
              href="https://wa.me/8652166584?text=Hello How can I help you?"
              className="text-green-400 bg-green-100 hover:bg-slate-600 transition border rounded-full px-4 py-3"
            >
              <i className="fab fa-whatsapp text-2xl "></i>
            </a>
          </div>
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold">Let's Discuss Your Project</h2>
          <p className="text-gray-400 mt-2">
            Always available for freelancing if the right project comes along,
            feel free to contact me.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-6 space-y-4"
          >
            {/* Replace with your Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="99499e54-0baf-450f-a8c3-615526f88ee8"
            />

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-200">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="Name *"
                  name="name"
                  className="w-full bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-200">YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  className="w-full bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-200">SUBJECT</label>
              <input
                type="text"
                placeholder="Subject *"
                name="subject"
                className="w-full bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-200">YOUR MESSAGE</label>
              <textarea
                placeholder="Your message *"
                name="message"
                rows="5"
                className="w-full bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
