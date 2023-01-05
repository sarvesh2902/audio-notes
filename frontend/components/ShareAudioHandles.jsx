import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareAudioHandles = () => {
  return (
    <div className="flex flex-row justify-center mt-16 mb-10">
      <div className="flex flex-row space-x-3">
        {/* Whatsapp handle */}
        <WhatsappShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        {/* FacebookHandle  */}
        <FacebookShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <TwitterShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <EmailShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <FacebookMessengerShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <FacebookMessengerIcon size={40} round={true} />
        </FacebookMessengerShareButton>

        <TelegramShareButton url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3">
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareAudioHandles;
