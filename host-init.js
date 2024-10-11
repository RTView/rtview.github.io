import * as PixelStreamingWebSdk from "https://unpkg.com/@arcware-cloud/pixelstreaming-websdk@latest/index.esm.js";

let Application;

const { ArcwareInit } = PixelStreamingWebSdk;

const testInteraction = {
  type: 'interact',
  payload: {
    changematerial: '0'
  }
};

const initResult = new ArcwareInit(
  {
    shareId: "share-0739295d-e852-4408-901f-65b66fc8eae9"
  },
  {
    initialSettings: {
      StartVideoMuted: true,
      AutoConnect: true,
      AutoPlayVideo: true
    },
    settings: {
      infoButton: false,
      micButton: false,
      audioButton: false,
      fullscreenButton: false,
      settingsButton: false,
      connectionStrengthIcon: true
    },
  }
);

Application = initResult.Application;
Application.getApplicationResponse(
  (response) => console.log("ApplicationResponse", response)
);

setTimeout(() =>
  document
    .getElementById("video-container")
    .appendChild(Application.rootElement)
);

window.handleSendCommand = function(command) {
  if (Application) {
    Application.emitUIInteraction(command);
  }
};
