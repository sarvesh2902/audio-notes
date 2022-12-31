import React from "react";
import CreateProjBtn from "../components/CreateProjBtn";
import ProjectList from "../components/ProjectList";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const dashboard = () => {
    return (
        <div>
            <Layout title="Dashboard">
                <Navbar />
                <CreateProjBtn />
                <ProjectList />
                <Footer />
            </Layout>
        </div>
    );
};

export default dashboard;
