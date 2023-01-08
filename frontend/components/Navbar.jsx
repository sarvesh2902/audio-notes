import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleLogout = () => {
    if (data) {
      localStorage.removeItem("userData");
      router.push("/login");
    } else {
      router.push("/login");
    }
  };
  return (
    <div>
      <nav className="bg-primary-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 text-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <div className="flex items-center">
              <Image src={logo} width={50} height={50} alt="logo" />
              <span className="ml-6 self-center text-xl font-bold whitespace-nowrap dark:text-white">
                Audio Notes
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/">
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-lg font-medium md:text-white md:p-0 dark:text-white md:hover:text-primary-100 transition-all"
                    aria-current="page"
                  >
                    Home
                  </div>
                </Link>
              </li>{" "}
              <li>
                <Link href="/dashboard">
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-lg font-medium md:text-white md:p-0 dark:text-white md:hover:text-primary-100 transition-all"
                    aria-current="page"
                  >
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-lg font-medium md:text-white md:p-0 dark:text-white md:hover:text-primary-100 transition-all"
                    aria-current="page"
                  >
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-lg font-medium md:text-white md:p-0 dark:text-white md:hover:text-primary-100 transition-all"
                    aria-current="page"
                  >
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-lg font-medium md:text-white md:p-0 dark:text-white md:hover:text-primary-100 transition-all"
                    aria-current="page"
                  >
                    {data ? "Logout" : "Login"}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
