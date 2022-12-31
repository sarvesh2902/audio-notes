import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <Layout title="About Us / AudioNotes">
            <Navbar />
            <h1 className="text-center">About Us</h1>
            <Footer />
        </Layout>
    );
};

export default About;
