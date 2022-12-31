import React from "react";
import Head from "next/head";

const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/sarveshp46/image/upload/v1672468990/Untitled_design_3_1_f0ueoc.png"
                />
            </Head>
            <div className="">{children}</div>
        </>
    );
};

export default Layout;
