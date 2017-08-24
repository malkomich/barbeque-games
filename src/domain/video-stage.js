export default class VideoStage {

  constructor(videoId, secondToPause, options) {
    this.videoId = videoId;
    this.secondToPause = secondToPause;
    this.options = options;
    this.options.sort(() => 0.5 - Math.random());
  }

}
