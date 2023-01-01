import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";

const projectPage = () => {
    const [formData, setFormData] = useState({
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
        // await axios({
        //     method: "post",
        //     data: {
        //         username: formData.username,
        //         password: formData.password,
        //     },
        //     withCredentials: true,
        //     url: "http://localhost:8000/login",
        // })
        //     .then(function (res) {
        //         console.log(res);
        //         if (res.data === "Successfully Authenticated") {
        //             // navigate("/dashboard");
        //             console.log("success");
        //         } else if (res.data === "No User Exists") {
        //             // navigate("/register");
        //             console.log("not found");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        // setFormData({
        //     Username: "",
        //     Password: "",
        // });
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
                <div className="flex items-center overflow-hidden h-96">
                    <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
                        <div className="relative group w-full h-64 flex justify-center items-center">
                            <div className="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
                            <input
                                accept=".jpg, .jpeg .png, .svg, .webp"
                                className="relative z-10 opacity-0 h-full w-full cursor-pointer"
                                type="file"
                                name="bgfile"
                                id="bgfile"
                                required
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
                                            htmlFor="bgfile"
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
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-96 text-white bg-primary-200 hover:bg-primary-300 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Convert to audio
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default projectPage;