let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  // Supprimer toutes les options existantes de la liste déroulante
  voiceSelect.innerHTML = "";

  // Ajouter les nouvelles options pour chaque voix disponible
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;

  // Récupérer la voix sélectionnée dans la liste déroulante
  let selectedVoiceIndex = voiceSelect.selectedIndex;
  speech.voice = voices[selectedVoiceIndex];

  window.speechSynthesis.speak(speech);
});

function updateVoices() {
  voices = window.speechSynthesis.getVoices();

  // Afficher les voix disponibles dans la console
  voices.forEach((voice, i) => {
    console.log(voice.name, voice.lang);
  });
}
