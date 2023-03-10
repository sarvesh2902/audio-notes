import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioAccordion from "../../components/AudioAccordion";
import Layout from "../../components/Layout";
import { Button, Modal } from "flowbite-react";
import { useState, useRef } from "react";
import ShareAudioHandles from "../../components/ShareAudioHandles";
import axios from "axios";
import fileDownload from "js-file-download";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const project = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const audioRef = useRef(null);
  const { asPath, pathname } = useRouter();
  console.log(asPath.substring(8)); // '/blog/xyz'

  const [respond, setRespond] = useState({});
  const [projectName, setProjectName] = useState("");
  const [filename, setFilename] = useState("");

  useEffect(() => {
    console.log("hello");
    setFilename(localStorage.getItem("filename"));
    if (asPath) {
      axios({
        method: "post",
        data: {
          url: asPath.substring(8),
        },
        withCredentials: true,
        url: "http://localhost:8787/audioplayer/provide-audio",
      })
        .then(function (res) {
          console.log(res);
          setRespond(res.data);
          setFormData(res.data.tags);

          return;
          router.push("/dashboard");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [asPath]);

  useEffect(() => {
    setProjectName(respond.projectName);
  }, [respond]);

  const [formData, setFormData] = useState([]);

  const handleAddNotes = async () => {
    audioRef.current.audio.current.pause();
    const timestamp = {
      min: Math.floor(audioRef.current.audio.current.currentTime / 60),
      sec: Math.floor(audioRef.current.audio.current.currentTime % 60),
    };

    let copy = formData.slice();
    copy.push({
      name: "Name of the timestamp",
      comment: "New comment",
      timestamp: `${timestamp.min}:${timestamp.sec}`,
    });

    setFormData(copy);

    await axios({
      method: "post",
      data: {
        tags: copy,
        url: asPath.substring(8),
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/crud-audiotag",
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDownload = async (url, filename) => {
    await axios
      .get("http://localhost:8787/audio/" + asPath.substring(8), {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const handlePlay = (timestamp) => {
    console.log(timestamp);
    const timestampSplit = timestamp.split(":");
    console.log(timestampSplit);

    const timestampInSec =
      parseInt(timestampSplit[0]) * 60 + parseInt(timestampSplit[1]);
    console.log(timestampInSec);
    audioRef.current.audio.current.currentTime = timestampInSec;
    audioRef.current.audio.current.play();
  };

  const handleDelete = async (index) => {
    console.log(index);
    let copy = formData.slice();
    copy.splice(index, 1);
    setFormData(copy);

    await axios({
      method: "post",
      data: {
        tags: copy,
        url: asPath.substring(8),
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/crud-audiotag",
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // edit function
  const handleEdit = async (index, editData) => {
    // console.log(index);
    let copy = formData.slice();
    copy[index].name = editData.name;
    copy[index].comment = editData.comment;
    // console.log(copy[index]);
    setFormData(copy);

    await axios({
      method: "post",
      data: {
        tags: copy,
        url: asPath.substring(8),
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/crud-audiotag",
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteProject = async () => {
    console.log("delete project");
    console.log(filename);

    await axios({
      method: "post",
      data: {
        url: asPath.substring(8),
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/delete-project",
    })
      .then(function (res) {
        console.log(res);
        router.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [modalState, setModalState] = useState(false);
  const closeModal = () => {
    setModalState(false);
  };
  const editText = (index) => {
    setEditIndex(index);
    setEditData(formData[index]);
    setModalState(true);
  };
  const handleChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleEditProject = async () => {
    console.log("edit project");
    console.log(asPath.substring(8));
    setModalState(true);
    console.log(projectName);

    await axios({
      method: "post",
      data: {
        url: asPath.substring(8),
        projectName: projectName,
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/edit-project",
    })
      .then(function (res) {
        console.log(res);
        // router.push(`/${asPath.substring(8)}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return userData ? (
    <Layout title="Project / Audio Notes">
      <div className="relative">
        <h1 className="text-black flex font-bold justify-center text-2xl mt-5">
          {projectName ? projectName : "Project Name"}
        </h1>

        <div className="flex justify-center my-10">
          <div className="w-1/2">
            <AudioPlayer
              ref={audioRef}
              src={`http://localhost:8787/audio/${asPath.substring(8)}`}
              defaultDuration=""
              // onPlay={e => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="my-auto mx-2">
            <Button
              outline={true}
              gradientDuoTone="cyanToBlue"
              onClick={() => {
                handleDownload(
                  "https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3",
                  "project1.mp3"
                );
              }}
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="inline-flex justify-center items-center w-full mt-10">
          <hr className="my-4 w-64 h-px bg-gray-900 border-0 dark:bg-gray-700" />
          <span className="absolute left-1/2 px-3 font-bold text-black text-2xl bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
            NOTES
          </span>
        </div>
        {formData.length ? (
          <AudioAccordion
            formData={formData}
            handlePlay={handlePlay}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            shared={true}
          />
        ) : (
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp"
              width={300}
              height={300}
            />
          </div>
        )}
      </div>
    </Layout>
  ) : (
    <Link href="/login">Please login to continue</Link>
  );
};

export default project;
