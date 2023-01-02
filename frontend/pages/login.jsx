import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      method: "post",
      data: {
        email: formData.email,
        password: formData.password,
      },
      withCredentials: true,
      url: "http://localhost:8787/auth/login",
    })
      .then(function (res) {
        console.log(res);
        const userData = {
          email: res.data.msg.email,
          name: res.data.msg.name,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        router.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });

    // setFormData({
    //     Username: "",
    //     Password: "",
    // });
  };

  return (
    <Layout title="Login / AudioNotes">
      <div className="flex justify-center pt-10 ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <Image src={logo} width={150} height={150} alt="logo" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <label
                htmlFor="email"
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
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                {/* <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="text-sm ml-3">
                                    <label
                                        htmlFor="remember"
                                        className="font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div> */}
              </div>

              <Link href="/forgot-password">
                <div className="text-sm text-blue-700 hover:underline transition-all ml-auto dark:text-blue-500">
                  Forgot Password?
                </div>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link href="/register">
                <span className="text-blue-700 hover:underline transition-all dark:text-blue-500">
                  Create an account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default login;
