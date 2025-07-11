let hunger = 0;
let boredom = 0;
let sleepiness = 0;

function updateMood() {
  const mood = document.getElementById("petMood");
  if (hunger > 5 || boredom > 5 || sleepiness > 5) {
    mood.textContent = "Mood: 😢 Sad";
  } else {
    mood.textContent = "Mood: 😊 Happy";
  }
}

function feedPet() {
  hunger = Math.max(0, hunger - 2);
  alert("You fed NeoPet!");
  updateMood();
}

function playWithPet() {
  boredom = Math.max(0, boredom - 2);
  alert("You played with NeoPet!");
  updateMood();
}

function putToSleep() {
  sleepiness = Math.max(0, sleepiness - 2);
  alert("NeoPet took a nap!");
  updateMood();
}

// Increase needs every 15 seconds
setInterval(() => {
  hunger++;
  boredom++;
  sleepiness++;
  updateMood();
}, 15000);
