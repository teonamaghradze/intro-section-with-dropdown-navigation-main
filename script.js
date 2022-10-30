"use strict";

const iconX = document.querySelector(".icon-close-menu");
const iconMenuMobile = document.querySelector(".icon-menu");

const menuExpanded = document.querySelector(".feature-company-careers-about");

const features = document.querySelector(".features-arrow");
const featuresBox = document.querySelector(".features-box");
const company = document.querySelector(".company-arrow");
const companyBox = document.querySelector(".company-box");

const sideNav = document.querySelector(".feature-company-careers-about");

let open = false;

//MOBILE
iconMenuMobile.addEventListener("click", () => {
  menuExpanded.style.display = "block";
});

iconX.addEventListener("click", () => {
  menuExpanded.style.display = "none";
});

features.addEventListener("click", () => {
  featuresBox.classList.toggle("closed");
  open = !open;
  if (open === true) {
    document.querySelector(".arrow-up").style.display = "block";
    document.querySelector(".arrow-down").style.display = "none";
  } else {
    document.querySelector(".arrow-up").style.display = "none";
    document.querySelector(".arrow-down").style.display = "block";
  }
});

company.addEventListener("click", () => {
  companyBox.classList.toggle("closed");
  open = !open;

  if (open === true) {
    document.querySelector(".arrow-up-company").style.display = "block";
    document.querySelector(".arrow-down-company").style.display = "none";
  } else {
    document.querySelector(".arrow-up-company").style.display = "none";
    document.querySelector(".arrow-down-company").style.display = "block";
  }
});

//DESKTOP

const desktopFeatures = document.querySelector(".feature-arrow");
const desktopCompany = document.querySelector(".company-arrow-desktop");
const desktopCompanyBox = document.querySelector(".company-box-desktop");
const desktopFeaturesBox = document.querySelector(".features-box-desktop");

desktopFeatures.addEventListener("click", () => {
  desktopFeaturesBox.classList.toggle("closed-desktop");

  open = !open;
  if (open === true) {
    document.querySelector(".arrow-up-features").style.display = "block";
    document.querySelector(".arrow-down-features").style.display = "none";
  } else {
    document.querySelector(".arrow-up-features").style.display = "none";
    document.querySelector(".arrow-down-features").style.display = "block";
  }
});

desktopCompany.addEventListener("click", () => {
  desktopCompanyBox.classList.toggle("closed-desktop");

  open = !open;
  if (open === true) {
    document.querySelector(".arrow-up-desktop").style.display = "block";
    document.querySelector(".arrow-down-desktop").style.display = "none";
  } else {
    document.querySelector(".arrow-up-desktop").style.display = "none";
    document.querySelector(".arrow-down-desktop").style.display = "block";
  }
});
