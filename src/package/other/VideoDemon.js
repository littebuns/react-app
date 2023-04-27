import React from "react";

// This imports the functional component from the previous sample.
import VideoJS from "./Video";

const VideoDemon = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    controlBar: {
      children: [
        "playToggle",
        "currentTimeDisplay",
        "timeDivider",
        "durationDisplay",
        "progressControl",
        "fullscreenToggle",
        {
          name: "downloadButton",
          className: "vjs-download-button",
          tagName: "a",
          attributes: {
            href: "your-download-url",
            download: "file-name.mp4",
          },
          textContent: "Download",
        },
      ],
    },
    sources: [
      {
        src: "http://120.25.161.140:10067/业财核对操作视频.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
};

export default VideoDemon;
