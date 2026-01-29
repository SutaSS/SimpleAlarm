import { Alarm } from "../domain/alarm.js";

export class AlarmUsecase {
  constructor(audioPlayer) {
    this.alarm = null;
    this.audioPlayer = audioPlayer;
  }

  setAlarm(time, soundUrl) {
    this.alarm = new Alarm(time, soundUrl);
  }

  check(currentTime) {
    if (this.alarm && this.alarm.shouldRing(currentTime)) {
      this.audioPlayer.play(this.alarm.soundUrl);
      return true;
    }
    return false;
  }

  deactivateAlarm() {
    if (this.alarm) {
        this.alarm.deactivate();
        this.audioPlayer.stop();
        this.alarm = null;
    }
  }
}
