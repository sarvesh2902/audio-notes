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

const ShareAudioHandles = ({ formData, respond, url }) => {
  console.log(url);
  const newUrl = `http://localhost:3000/shared/${url}`;
  return (
    <div className="my-6">
      <h1 className="flex justify-center font-medium text-lg">
        Share audio notes and timestamps summary via:{" "}
      </h1>
      <div className="flex flex-row justify-center mt-2">
        <div className="flex flex-row space-x-3">
          {/* Whatsapp handle */}

          <WhatsappShareButton
            url={newUrl}
            //             title={formData.map(
            //               (item) =>
            //                 `
            // Name: ${item.name}
            // Comment: ${item.comment}
            // Time Stamp: ${item.timestamp}
            // `
            //             )}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          <TwitterShareButton
            url={newUrl}
            //             title={formData.map(
            //               (item) =>
            //                 `
            // Name: ${item.name}
            // Comment: ${item.comment}
            // Time Stamp: ${item.timestamp}
            // `
            //             )}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <EmailShareButton
            url={newUrl}
            subject="Audio Notes timestamp summary"
            //             body={formData.map(
            //               (item) =>
            //                 `
            // Name: ${item.name}
            // Comment: ${item.comment}
            // Time Stamp: ${item.timestamp}
            // `
            //             )}
          >
            <EmailIcon size={40} round={true} />
          </EmailShareButton>

          <TelegramShareButton
            url={newUrl}
            //             title={formData.map(
            //               (item) =>
            //                 `
            // Name: ${item.name}
            // Comment: ${item.comment}
            // Time Stamp: ${item.timestamp}
            // `
            //             )}
          >
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareAudioHandles;
