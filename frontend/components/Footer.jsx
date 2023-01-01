import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="bottom-0 left-0 z-20 p-4 w-full bg-primary-100 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-primary-300 sm:text-center dark:text-gray-400">
                    © 2022{" "}
                    <Link href="/">
                        <span className="hover:underline">AudioNotes™</span>
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-primary-300 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/about">
                            <span className="mr-4 hover:underline md:mr-6 ">
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/policy">
                            <span className="mr-4 hover:underline md:mr-6 ">
                                Privacy Policy
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/license">
                            <span className="mr-4 hover:underline md:mr-6 ">
                                Licensing
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="mr-4 hover:underline md:mr-6 ">
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
