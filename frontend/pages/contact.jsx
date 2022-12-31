import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <Layout title="Contact Us / AudioNotes">
            <Navbar />
            <h1 className="text-center">Contact Us</h1>
            <Footer />
        </Layout>
    );
};

export default Contact;
