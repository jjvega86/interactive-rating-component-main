// TODO: Add event listeners and events for choosing rating and submitting

let ratings = document.getElementsByClassName("rating");
let submitBtn = document.querySelector(".submit-rating");

function setActiveState(e) {
  removeActiveStates();
  let rating = document.querySelector(`#${e.target.id}`);
  rating.className += " rating-active";
}

function removeActiveStates() {
  let updatedRatings = document.getElementsByClassName(`rating`);
  for (let i = 0; i < updatedRatings.length; i++) {
    if (updatedRatings[i].className.includes("rating-active")) {
      updatedRatings[i].className = "rating circular-bg";
      break;
    }
  }
}

function submitRating(e) {
  let ratingState = document.querySelector(".rating-state");
  let thankYouState = document.querySelector(".thank-you-state");
  let finalRating = document.querySelector(".rating-active");
  if (!finalRating) return;
  let ratingPill = document.querySelector("#final-rating");
  ratingPill.textContent = finalRating.textContent;
  ratingState.style.display = "none";
  thankYouState.style.display = "block";
}

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", setActiveState);
}

submitBtn.addEventListener("click", submitRating);
