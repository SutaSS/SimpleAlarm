export class AudioPlayer {
  constructor() {
    this.audio = null;
  }

  play(customSound) {
    const sound = customSound || "assets/alarmAyam.wav";
    this.audio = new Audio(sound);
    this.audio.play();
  }

  stop() {
    if (this.audio) {
      this.audio.stop();
      this.audio.currentTime = 0;
    }
  }
}