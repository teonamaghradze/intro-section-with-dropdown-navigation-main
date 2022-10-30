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

  arrowToggle();
});

company.addEventListener("click", () => {
  companyBox.classList.toggle("closed");
  arrowToggle("-company");
});

//DESKTOP

const desktopFeatures = document.querySelector(".feature-arrow");
const desktopCompany = document.querySelector(".company-arrow-desktop");
const desktopCompanyBox = document.querySelector(".company-box-desktop");
const desktopFeaturesBox = document.querySelector(".features-box-desktop");

desktopFeatures.addEventListener("click", () => {
  desktopFeaturesBox.classList.toggle("closed-desktop");

  arrowToggle("-features");
});

desktopCompany.addEventListener("click", () => {
  desktopCompanyBox.classList.toggle("closed-desktop");
  arrowToggle("-desktop");
});

function arrowToggle(classname = "") {
  open = !open;
  if (open === true) {
    document.querySelector(`.arrow-up${classname}`).style.display = "block";
    document.querySelector(`.arrow-down${classname}`).style.display = "none";
  } else {
    document.querySelector(`.arrow-up${classname}`).style.display = "none";
    document.querySelector(`.arrow-down${classname}`).style.display = "block";
  }
}
