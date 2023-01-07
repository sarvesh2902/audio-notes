import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioAccordion from "../components/AudioAccordion";
import Layout from "../components/Layout";
import { Button } from "flowbite-react";
import { useState, useRef } from "react";
import ShareAudioHandles from "../components/ShareAudioHandles";
import axios from "axios";
import fileDownload from "js-file-download";
// import 'tw-elements'
// import "./project.scss"

const project = () => {
  const audioRef = useRef(null);

  const [formData, setFormData] = useState([
    {
      name: "Name 1",
      comment: "Comment 1",
      timestamp: "5:10",
    },
    {
      name: "Name 2",
      comment: "Comment 2",
      timestamp: "0:1",
    },
    {
      name: "Name 3",
      comment: "Comment 3",
      timestamp: "3:34",
    },
    {
      name: "Name 4",
      comment: "Comment 4",
      timestamp: "2:56",
    },
  ]);

  const handleAddNotes = () => {
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
  };

  const handleDownload = async (url, filename) => {
    await axios
      .get(url, {
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

  const handleDelete = (index) => {
    console.log(index);
    let copy = formData.slice();
    copy.splice(index, 1);
    setFormData(copy);
  };

  // edit function
  const handleEdit = (index, editData) => {
    // console.log(index);
    let copy = formData.slice();
    copy[index].name = editData.name;
    copy[index].comment = editData.comment;
    // console.log(copy[index]);
    setFormData(copy);
  };
  return (
    <Layout title="Project / Audio Notes">
      <h1 className="text-black flex font-bold justify-center text-2xl mt-5">
        Project Name
      </h1>
      <div className="flex justify-center my-10">
        <div className="w-1/2">
          <AudioPlayer
            ref={audioRef}
            src="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
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

      <div className="inline-flex justify-center items-center w-full mt-5">
        <hr className="my-8 w-64 h-px bg-gray-900 border-0 dark:bg-gray-700" />
        <span className="absolute left-1/2 px-3 font-bold text-black text-2xl bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
          NOTES
        </span>
      </div>
      <AudioAccordion
        formData={formData}
        handlePlay={handlePlay}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <ShareAudioHandles formData={formData} />
    </Layout>
  );
};

export default project;
