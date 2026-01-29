import { AlarmUsecase } from "./usecase/alarmUsecase.js";
import { AudioPlayer } from "./infrastructure/audioPlayer.js";
import { getTimeValue, getSoundFile, setStatus, clearStatus} from "./presentation/ui.js";

const alarmUsecase = new AlarmUsecase(new AudioPlayer());

document.getElementById("setAlarmBtn").addEventListener("click", () => {
  const time = getTimeValue();
  const sound = getSoundFile();

  if (!time) {
    clearStatus();
    return;
  }

  alarmUsecase.setAlarm(time, sound);
  setStatus(`Alarm diset jam ${time}`);
});

document.getElementById("deactivateBtn").addEventListener("click", () => {
  alarmUsecase.deactivateAlarm();
  clearStatus();
});

setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  if (alarmUsecase.check(currentTime)) {
    setStatus("Alarm berbunyi!");
  }
}, 1000);
