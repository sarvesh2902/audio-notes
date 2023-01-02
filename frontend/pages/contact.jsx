import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    await axios({
      method: "POST",
      url: "https://formspree.io/f/xyyvepoy",
      data: formData,
    })
      .then((response) => {
        console.log(response);
        alert("Successfully sent the message");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout title="Contact Us / AudioNotes">
      <div className="flex justify-center pt-10 mb-4">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <Image src={logo} width={150} height={150} alt="logo" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
              Contact Us
            </h3>{" "}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email"
                required
              />
            </div>{" "}
            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                rows={8}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
