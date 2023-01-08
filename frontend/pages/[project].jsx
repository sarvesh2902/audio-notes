import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioAccordion from "../components/AudioAccordion";
import Layout from "../components/Layout";
import { Button, Modal } from "flowbite-react";
import { useState, useRef } from "react";
import ShareAudioHandles from "../components/ShareAudioHandles";
import axios from "axios";
import fileDownload from "js-file-download";
import { useRouter } from "next/router";
import Image from "next/image";

// import 'tw-elements'
// import "./project.scss"

const project = () => {
  const audioRef = useRef(null);
  const router = useRouter();
  const { asPath, pathname } = useRouter();
  console.log(asPath); // '/blog/xyz'

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
          url: asPath.substring(1),
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
        url: asPath.substring(1),
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
      .get("http://localhost:8787/audio" + asPath, {
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
        url: asPath.substring(1),
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
        url: asPath.substring(1),
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
        url: asPath.substring(1),
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
    console.log(asPath.substring(1));
    setModalState(true);
    console.log(projectName);

    await axios({
      method: "post",
      data: {
        url: asPath.substring(1),
        projectName: projectName,
      },
      withCredentials: true,
      url: "http://localhost:8787/audioplayer/edit-project",
    })
      .then(function (res) {
        console.log(res);
        // router.push(`/${asPath.substring(1)}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return asPath ? (
    <Layout title="Project / Audio Notes">
      <div className="relative">
        <h1 className="text-black flex font-bold justify-center text-2xl mt-5">
          {projectName ? projectName : "Project Name"}
        </h1>
        <div className="absolute -top-3 right-0 flex">
          <Button
            outline={true}
            gradientDuoTone="cyanToBlue"
            onClick={handleEditProject}
            className="mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Button>
          <React.Fragment>
            <Modal show={modalState} onClose={closeModal}>
              <Modal.Header>Edit Project Name</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={projectName}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Project Name"
                      required
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* accept button  */}
                <Button
                  onClick={() => {
                    handleEditProject();
                    closeModal();
                  }}
                >
                  Save changes
                </Button>
                {/* close button  */}
                <Button color="gray" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
          <Button
            outline={true}
            gradientDuoTone="cyanToBlue"
            onClick={handleDeleteProject}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Button>
        </div>
        <div className="flex justify-center my-10">
          <div className="w-1/2">
            <AudioPlayer
              ref={audioRef}
              src={
                 `http://localhost:8787/audio${asPath}`
              }
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
          <div className="my-auto mx-2">
            <Button
              outline={true}
              gradientDuoTone="cyanToBlue"
              onClick={handleAddNotes}
            >
              Add Notes
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
                  d="M12 4.5v15m7.5-7.5h-15"
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

        <ShareAudioHandles
          formData={formData}
          respond={respond}
          url={asPath.substring(1)}
        />
      </div>
    </Layout>
  ) : (
    <div>loading...</div>
  );
};

export default project;
