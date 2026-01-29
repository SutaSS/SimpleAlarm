export function getTimeValue() {
  return document.getElementById("timeInput").value;
}

export function getSoundFile() {
  const file = document.getElementById("soundInput").files[0];
  return file ? URL.createObjectURL(file) : null;
}

export function setImage(isHatched) {
  const imageContainer = document.getElementById("alarmImage");
  
  if (!imageContainer) {
    console.error("alarmImage element tidak ditemukan!");
    return;
  }
  
  console.log("setImage dipanggil dengan isHatched:", isHatched);
  
  if (isHatched) {
    imageContainer.innerHTML = '<img src="./assets/Ayam.png" alt="Ayam" class="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain animate-bounce" />';
  } else {
    imageContainer.innerHTML = '<img src="./assets/Telur.png" alt="Telur" class="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain animate-wiggle" />';
  }
}

export function setStatus(text) {
  const now = new Date();
  const currentDate = now.toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentTime = now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  document.getElementById("status").innerText = `${text}\n${currentDate}, ${currentTime}`;
}
export function clearStatus() {
  const now = new Date();
  const currentDate = now.toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentTime = now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  document.getElementById("status").innerText = `Waktu belum diatur\n${currentDate}, ${currentTime}`;
}

export function showDeactivateButton() {
  document.getElementById("setAlarmBtn").classList.add("hidden");
  document.getElementById("deactivateBtn").classList.remove("hidden");
}

export function showSetAlarmButton() {
  document.getElementById("setAlarmBtn").classList.remove("hidden");
  document.getElementById("deactivateBtn").classList.add("hidden");
}