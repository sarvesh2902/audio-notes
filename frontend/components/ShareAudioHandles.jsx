import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareAudioHandles = ({ formData }) => {
  return (
    <div className="flex flex-row justify-center mt-16 mb-10">
      <div className="flex flex-row space-x-3">
        {/* Whatsapp handle */}
        <WhatsappShareButton
          url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
          title={formData.map(
            (item) =>
              `Name: ${item.name}, Comment: ${item.comment}, Time Stamp: ${item.timestamp};`
          )}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <TwitterShareButton
          url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
          title={formData.map(
            (item) =>
              `Name: ${item.name}, Comment: ${item.comment}, Time Stamp: ${item.timestamp};`
          )}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <EmailShareButton
          url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
          subject="Audio Notes timestamp summary"
          body={formData.map(
            (item) =>
              `Name: ${item.name}, Comment: ${item.comment}, Time Stamp: ${item.timestamp};`
          )}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <TelegramShareButton
          url="https://res.cloudinary.com/sarveshp46/video/upload/v1672472551/Kalimba_ofzs7s.mp3"
          title={formData.map(
            (item) =>
              `Name: ${item.name}, Comment: ${item.comment}, Time Stamp: ${item.timestamp};`
          )}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareAudioHandles;
