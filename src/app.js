import { AlarmUsecase } from "./usecase/alarmUsecase.js";
import { AudioPlayer } from "./infrastructure/audioPlayer.js";
import { getTimeValue, getSoundFile, setStatus, clearStatus, setImage} from "./presentation/ui.js";

const alarmUsecase = new AlarmUsecase(new AudioPlayer());
let isRinging = false;

setImage(false);
clearStatus();

document.getElementById("setAlarmBtn").addEventListener("click", () => {
  const time = getTimeValue();
  const sound = getSoundFile();

  if (!time) {
    setStatus("Waktu belum diatur");
    setImage(false);
    return;
  }

  alarmUsecase.setAlarm(time, sound);
  setStatus(`Alarm diset jam ${time}`);
  setImage(false);
  isRinging = false;
});

document.getElementById("deactivateBtn").addEventListener("click", () => {
  console.log("Tombol deactivate diklik");
  alarmUsecase.deactivateAlarm();
  clearStatus();
  setImage(false);
  isRinging = false;
});

setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  if (alarmUsecase.check(currentTime) && !isRinging) {
    setStatus("Alarm berbunyi!");
    setImage(true);

    alarmUsecase.audioPlayer.play(
      alarmUsecase.alarm.soundUrl
    );

    isRinging = true;
  }
}, 1000);
