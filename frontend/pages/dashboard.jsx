import React, { useEffect, useState } from "react";
import CreateProjBtn from "../components/CreateProjBtn";
import ProjectList from "../components/ProjectList";
import Layout from "../components/Layout";
import Link from "next/link";

const dashboard = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return userData ? (
    <Layout title="Dashboard">
      <CreateProjBtn />
      <h1 className="text-center font-bold text-3xl mb-10">
        Welcome <span>{userData.name}!</span>
      </h1>
      {userData.email && <ProjectList />}
    </Layout>
  ) : (
    <Link href="/login">Please login to continue</Link>
  );
};

export default dashboard;
