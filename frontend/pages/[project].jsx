import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioAccordion from "../components/AudioAccordion";
import Layout from "../components/Layout";
import { Button } from "flowbite-react";
// import 'tw-elements'
// import "./project.scss"

const project = () => {
  return (
    <Layout title="Project / Audio Notes">
      <h1 className="text-black flex font-bold justify-center text-2xl mt-5">
        Audio Player
      </h1>
      <div className="flex justify-center my-10">
        <div className="w-96 ">
          <AudioPlayer
            src="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
            defaultDuration=""
            // onPlay={e => console.log("onPlay")}
            // other props here
          />
        </div>
        <div className="my-auto ml-20">
          <Button outline={true} gradientDuoTone="cyanToBlue">
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
      
      <div class="inline-flex justify-center items-center w-full">
    <hr class="my-8 w-64 h-px bg-gray-900 border-0 dark:bg-gray-700"/>
    <span class="absolute left-1/2 px-3 font-bold text-black text-2xl bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">NOTES</span>
</div>
      <AudioAccordion />
    </Layout>
  );
};

export default project;
