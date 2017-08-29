export class VideoStage {

  constructor(videoId, secondToPause, options) {
    this.videoId = videoId;
    this.secondToPause = secondToPause;
    this.options = options;
    this.options.sort(() => 0.5 - Math.random());
  }

}

export const VideoState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  VIDEO_CUED: 5,
};
