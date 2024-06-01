import { getTrendingShows } from "./getTrendingShows.js";

const carouselDisplay = document.querySelector(".image-carousel-display");
const img = carouselDisplay.querySelector("img");
const title = carouselDisplay.querySelector(".title");
const watchBtn = carouselDisplay.querySelector(".watch-btn");
const nextBtn = carouselDisplay.querySelector(".next-btn");
const prevBtn = carouselDisplay.querySelector(".previous-btn");

let curIndex = 0;
let swapTime = 5000;
let prevTimeOutId = null;

const shows = getTrendingShows();

displayShowInfo(curIndex);

nextBtn.addEventListener("click", () => {
  showNext();
});
prevBtn.addEventListener("click", () => {
  showPrevious();
});

function showNext() {
  curIndex++;
  if (curIndex > shows.length - 1) curIndex = 0;
  displayShowInfo(curIndex);
}
function showPrevious() {
  curIndex--;
  if (curIndex < 0) curIndex = shows.length - 1;
  displayShowInfo(curIndex);
}

function displayShowInfo(index) {
  img.src = shows[index].getImage();
  title.textContent = shows[index].getName();
  watchBtn.addEventListener("click", () => {
    window.open(shows[index].getWatchLink(), "_black");
  });
  if (prevTimeOutId) {
    clearTimeout(prevTimeOutId);
  }
  prevTimeOutId = setTimeout(() => {
    showNext();
  }, 5000);
}
