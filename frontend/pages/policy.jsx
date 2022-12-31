import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
    return (
        <Layout title="Privacy Policy / AudioNotes">
            <Navbar />
            <h1 className="text-center">Privacy Policy</h1>
            <Footer />
        </Layout>
    );
};

export default PrivacyPolicy;
