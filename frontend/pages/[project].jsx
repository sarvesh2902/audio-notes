import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Layout from "../components/Layout";
// import "./project.scss"

const project = () => {
  return (
    <Layout title="Project / Audio Notes">
      <div className="flex justify-center">
        <div className="w-96 ">
          <AudioPlayer
            src="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
            defaultDuration=""
            // onPlay={e => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </Layout>
  );
};

export default project;
