export class Alarm {
  constructor(time, soundUrl = null) {
    this.time = time; // "HH:MM"
    this.soundUrl = soundUrl;
    this.active = true;
  }

  shouldRing(currentTime) {
    return this.active && this.time === currentTime;
  }

  deactivate() {
    this.active = false;
  }
}

