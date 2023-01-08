import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import axios from "axios";
import { useEffect } from "react";

const newYoutube = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const router = useRouter();
  const [formData, setFormData] = useState({
    videoId: "",
    projectName: "",
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
    setIsLoading(true);
    await axios({
      method: "post",
      data: {
        videoId: formData.videoId,
        projectName: formData.projectName,
        email: userData.email,
      },
      withCredentials: true,
      url: "http://localhost:8787/youtube/convert-mp3",
    })
      .then(function (res) {
        console.log(res);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
        // if (res.data.type === "success") {
        //   router.push(`/${formData.projectName}`);
        //   console.log("success");
        //   setIsLoading(false);
        // } else {
        //   console.log("not found");
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUploadVideoClick = (req, res) => {
    router.push("/new");
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout title="Project / AudioNotes">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-10">
          <div className="w-96">
            <label
              htmlFor="projectName"
              className="font-bold text-lg text-gray-900 block mb-2 dark:text-gray-300"
            >
              Enter Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Project Name"
              required
            />
          </div>
        </div>
        <p className="text-center text-2xl font-bold mt-10 mb-5">
          Use YouTube Video
        </p>
        <div className="flex justify-center mb-10">
          <div className="w-96">
            <label
              htmlFor="videoId"
              className="font-bold text-lg text-gray-900 block mb-2 dark:text-gray-300"
            >
              Enter YouTube Video ID:
            </label>
            <input
              type="text"
              id="videoId"
              name="videoId"
              value={formData.videoId}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Video ID"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-96 h-12 flex justify-center items-center text-md text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? (
              <ReactLoading
                type="bars"
                color="#ffffff"
                height={25}
                width={25}
              />
            ) : (
              "Convert to audio"
            )}
          </button>
        </div>

        <div className="inline-flex justify-center items-center w-full mt-10">
          <hr className="my-4 w-64 h-px bg-gray-900 border-0 dark:bg-gray-700" />
          <span className="absolute left-1/2 px-3 font-bold text-black text-2xl bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
            OR
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleUploadVideoClick}
            type="button"
            className="w-96 text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload Video
          </button>
        </div>

        {/* <div className="flex items-center">
            <div className="w-96">
              <label
                htmlFor="projectName"
                className="font-bold text-lg text-gray-900 block mb-2 dark:text-gray-300"
              >
                Enter URL:
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="URL"
                // required
              />
            </div>
          </div> */}
      </form>
    </Layout>
  );
};

export default newYoutube;
