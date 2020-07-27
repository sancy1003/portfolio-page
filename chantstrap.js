"use strict";

const portfolioClassification = document.querySelectorAll(
  ".btn-portfolio"
);
const portfolioItemSort = document.querySelectorAll(".portfolio-item"),
skillContainer = document.querySelector(".info-skill-container"),
btnChangeSkill = document.querySelector(".btn-change-skill"),
btnChangeProfile = document.querySelector(".btn-change-profile");
let portfolioMode = 0;
let profileMode = 0;

function skillContainerMoveRight() {
  if(profileMode == 0 && window.screen.clientWidth > 1050) {
    skillContainer.style.transition = "none";
    skillContainer.style.left = skillContainer.clientWidth + "px";
    setTimeout(function () {
      skillContainer.style.transition = "";;
    }, 100);
  } else if(profileMode == 1 && window.screen.clientWidth > 1050) {
    skillContainer.style.left = "200px";
  }
}

function changeProfile() {
  if(profileMode == 0) {
    profileMode = 1;
    skillContainer.style.left = "";
    skillContainer.classList.remove("move-right");
    skillContainer.classList.add("move-left");
  } else {
    profileMode = 0;
    skillContainer.style.left = "";
    skillContainer.classList.remove("move-left");
    skillContainer.classList.add("move-right");
  }
}

function portfolioModeChange(sort) {
    for (let i = 0; i < portfolioClassification.length; i++) {
        if (portfolioClassification[i].innerText === sort.target.innerText) {
          if (portfolioMode !== sort.target.innerText) {
            portfolioClassification[portfolioMode].classList.remove("active");
            portfolioMode = i;
            changePortfolioBtn(i);
          }
        }
      }
  }
  
function changePortfolioBtn(i) {
    portfolioClassification[i].classList.add("active");
    sortPortfolioItem(i);
} 

function sortPortfolioItem(array) {
    if (portfolioClassification[array].innerText === "# All") {
      for (var i = 0; i < portfolioItemSort.length; i++) {
        let itemSort = portfolioItemSort[i];
        itemSort.style.display = "inline-block";
      }
    } else {
      for (var i = 0; i < portfolioItemSort.length; i++) {
        let itemSort = portfolioItemSort[i];
        let pfClass = portfolioClassification[array].innerText.substr(2);
        if (
          itemSort.classList.contains(
            `pf-${pfClass}`
          )
        ) {
          itemSort.style.display = "inline-block";
        } else {
          itemSort.style.display = "none";
        }
      }
    }
  }

function init() {
    for (var i = 0; i < portfolioClassification.length; i++) {
        portfolioClassification[i].addEventListener("click", (event) =>
        portfolioModeChange(event)
        );
    }
    skillContainerMoveRight();
    btnChangeSkill.addEventListener("click", changeProfile);
    btnChangeProfile.addEventListener("click", changeProfile);
    window.addEventListener("resize", skillContainerMoveRight);
}

init();