import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

const projectPage = () => {
  const router = useRouter();
  const [file, setfile] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
  });

  const fileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setfile(i);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    console.log(formData);
    const formData2 = new FormData();
    formData2.append("projectName", formData.projectName);
    formData2.append("file", file);
    formData2.append(
      "email",
      JSON.parse(localStorage.getItem("userData")).email
    );
    await axios({
      method: "post",
      data: formData2,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: "http://localhost:8787/convert_video",
    })
      .then(function (res) {
        console.log(res);
        if (res.data.type === "success") {
          router.push(`/dashboard`);
          console.log("success");
          setIsLoading(false);
        } else if (res.data === "No User Exists") {
          console.log("not found");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleYoutubeLink = (req, res) => {
    router.push("/newYoutube");
  };

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
        <p className="text-center text-2xl font-bold mt-10">Upload Video</p>
        {/* <div className="flex items-center overflow-hidden h-96">
          <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
            <div className="relative group w-full h-64 flex justify-center items-center">
              <div className="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
              <input
                accept=".mp4"
                className="relative z-10 opacity-0 h-full w-full cursor-pointer"
                type="file"
                name="file"
                id="file"
                onChange={fileUpload}
                // required
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
                <div className="space-y-6 text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMfnFzfURm7u65cptRathlu6PJj5Yx9hkxw&usqp=CAU"
                    className="sm:w-40 w-32 m-auto"
                    alt="illustration"
                  />
                  <p className="text-gray-700 text-lg">
                    Drag and drop a file or{" "}
                    <label
                      htmlFor="file"
                      title="Upload a file"
                      className="relative z-20 cursor-pointer text-blue-500 hover:text-blue-600 block"
                    >
                      Upload a file
                    </label>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center my-10">
          <div className="w-96">
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              accept=".mp4"
              type="file"
              name="file"
              id="file"
              onChange={fileUpload}
              required
            />
            <div
              class="bg-white border-t-4 mt-3 border-primary-200 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex items-center">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-primary-200 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Compatible Video File - mp4</p>
                  {/* <p class="text-sm">
                    Make sure you know how these changes affect you.
                  </p> */}
                </div>
              </div>
            </div>
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
            onClick={handleYoutubeLink}
            type="button"
            className="w-96 text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Use YouTube Video
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

export default projectPage;
