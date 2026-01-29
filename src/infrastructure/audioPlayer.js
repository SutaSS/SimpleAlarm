export class AudioPlayer {
  constructor() {
    this.audio = null;
  }

  play(customSound) {
    const sound = customSound || "assets/alarmAyam.wav";
    this.audio = new Audio(sound);
    this.audio.loop = false;
    this.audio.play();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }
}