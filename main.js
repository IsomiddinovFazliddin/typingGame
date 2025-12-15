const title = document.querySelector(".title");
const inputText = document.querySelector(".inputText");
const time = document.querySelector(".time");
const modal = document.querySelector(".modal");
const score = document.querySelector(".score");
const hightScore = document.querySelector(".hightScore");
const select = document.querySelector("select");

const results = document.querySelector(".results");

const words = [
  "apple",
  "book",
  "car",
  "dog",
  "egg",
  "family",
  "game",
  "house",
  "idea",
  "job",
  "key",
  "light",
  "money",
  "name",
  "orange",
  "people",
  "queen",
  "road",
  "school",
  "time",
  "umbrella",
  "voice",
  "water",
  "xray",
  "youth",
  "zoo",
  "chair",
  "table",
  "window",
  "phone",
  "computer",
  "mouse",
  "keyboard",
  "screen",
  "city",
  "country",
  "village",
  "river",
  "mountain",
  "lake",
  "music",
  "movie",
  "song",
  "camera",
  "photo",
  "friend",
  "brother",
  "sister",
  "mother",
  "father",
  "teacher",
  "student",
  "office",
  "market",
  "store",
  "food",
  "bread",
  "milk",
  "coffee",
  "tea",
  "shirt",
  "pants",
  "shoes",
  "jacket",
  "hat",
  "sun",
  "moon",
  "star",
  "cloud",
  "rain",
  "snow",
  "wind",
  "weather",
  "summer",
  "winter",
  "spring",
  "autumn",
  "carpet",
  "floor",
  "wall",
  "door",
  "garden",
  "flower",
  "tree",
  "leaf",
  "animal",
  "bird",
  "fish",
  "horse",
  "cow",
  "street",
  "bridge",
  "park",
  "hotel",
  "airport",
  "bus",
  "train",
  "plane",
  "ticket",
  "map",
];

let number = 8;
let level = localStorage.getItem("level")
  ? localStorage.getItem("level")
  : "easy";
select.value = level;

let scoreText = 0;

let hightScoreNumber = localStorage.getItem("hightScore")
  ? localStorage.getItem("hightScore")
  : 0;

const writeWords = () => {
  title.textContent = words[Math.floor(Math.random() * words.length)];
};
writeWords();

time.textContent = number;
hightScore.textContent = hightScoreNumber;

inputText.addEventListener("input", () => {
  if (inputText.value == title.textContent) {
    inputText.value = "";
    scoreText++;
    score.textContent = scoreText;
    writeWords();
    if (level == "easy") {
      number += 5;
      time.innerHTML = `${number} <span>+5</span>`;
    } else if (level == "normal") {
      number += 3;
      time.innerHTML = `${number} <span>+3</span>`;
    } else if (level == "hard") {
      number += 1;
      time.innerHTML = `${number} <span>+1</span>`;
    }
  }
});

setInterval(() => {
  if (number > 0) {
    number--;
    time.textContent = number;
  } else {
    clearInterval();
    modal.classList.add("active");
    hightScore.textContent = scoreText;
    if (hightScoreNumber < scoreText) {
      hightScoreNumber = scoreText;
    }
    localStorage.setItem("hightScore", hightScoreNumber);
    results.textContent = scoreText;
  }
}, 1000);

select.addEventListener("change", (e) => {
  level = e.target.value;
  localStorage.setItem("level", level);
});
