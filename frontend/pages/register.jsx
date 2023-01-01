import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Layout from "../components/Layout";
import logo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";

const register = () => {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Password: "",
    });
    const handleChange = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            Name: "",
            Email: "",
            Password: "",
        });
    };

    return (
        <Layout>
            <div className="flex flex-col items-center px-6  mx-auto md:h-screen lg:py-10 bg-gray-50">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex justify-center">
                            <Image
                                src={logo}
                                width={150}
                                height={150}
                                alt="logo"
                            />
                        </div>
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 md:space-y-6"
                            action="localhost:8787/auth/register"
                            method="post"
                        >
                            <div>
                                <label
                                    htmlFor="Name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    value={formData.Name}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="Email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="Password"
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium text-gray-500"
                                    >
                                        I accept the{" "}
                                        <Link href="/policy">
                                            <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                Terms and Conditions
                                            </span>
                                        </Link>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-medium text-gray-500">
                                Already have an account?{" "}
                                <Link href="/login">
                                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Login here
                                    </span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default register;
