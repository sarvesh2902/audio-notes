import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/sarveshp46/image/upload/v1672472504/logo_o2ub38.png"
                />
            </Head>
            <Navbar />
            <div className="min-h-[87vh]">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
