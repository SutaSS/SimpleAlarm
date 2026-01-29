export function getTimeValue() {
  return document.getElementById("timeInput").value;
}

export function getSoundFile() {
  const file = document.getElementById("soundInput").files[0];
  return file ? URL.createObjectURL(file) : null;
}

export function setImage(isHatched) {
  const imageContainer = document.getElementById("alarmImage");
  
  if (!imageContainer) return;
  
  if (isHatched) {
    // Alarm berbunyi - Telur menetas jadi Ayam
    imageContainer.innerHTML = '<img src="Ayam.png" alt="Ayam" class="w-32 h-32 object-contain animate-bounce" />';
  } else {
    // Belum alarm - Tampilkan telur dengan animasi goyang
    imageContainer.innerHTML = '<img src="Telur.png" alt="Telur" class="w-32 h-32 object-contain animate-wiggle" />';
  }
}

export function setStatus(text) {
  document.getElementById("status").innerText = text;
}
export function clearStatus() {
  document.getElementById("status").innerText = "Waktu belum diatur";
}