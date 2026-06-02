/* ==================================================
   NAVBAR
================================================== */

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavClose = document.querySelector(".mobile-nav-close");
const navbarMenu = document.querySelector(".navbar-menu");

if (mobileNavToggle && mobileNavClose && navbarMenu) {

  mobileNavToggle.addEventListener("click", () => {
    navbarMenu.classList.add("open");
  });

  mobileNavClose.addEventListener("click", () => {
    navbarMenu.classList.remove("open");
  });

}



/* ==================================================
   LOAD DATA
================================================== */

async function loadData() {

  const response =
    await fetch("./data.json");

  const data =
    await response.json();

  initDestination(data);
  initCrew(data);
  initTechnology(data);
}

loadData();



/* ==================================================
   DESTINATION
================================================== */

function initDestination(data) {

  const destinationTabs =
    document.querySelectorAll(".destination__tab");

  if (destinationTabs.length === 0) return;

  const destinationImage =
    document.querySelector("#destination-image");

  const destinationName =
    document.querySelector("#destination-name");

  const destinationDescription =
    document.querySelector("#destination-description");

  const destinationDistance =
    document.querySelector("#destination-distance");

  const destinationTravel =
    document.querySelector("#destination-travel");

  function updateDestination(destination) {

    destinationName.textContent =
      destination.name;

    destinationDescription.textContent =
      destination.description;

    destinationDistance.textContent =
      destination.distance;

    destinationTravel.textContent =
      destination.travel;

    destinationImage.src =
      destination.images.png;

    destinationImage.alt =
      destination.name;
  }

  updateDestination(data.destinations[0]);

  destinationTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      destinationTabs.forEach((button) => {
        button.classList.remove("active");
      });

      tab.classList.add("active");

      const selectedDestination =
        data.destinations.find(
          destination =>
            destination.name ===
            tab.dataset.destination
        );

      updateDestination(selectedDestination);

    });

  });

}



/* ==================================================
   CREW
================================================== */

function initCrew(data) {

  const crewDots =
    document.querySelectorAll(".crew__dot");

  if (crewDots.length === 0) return;

  const crewImage =
    document.querySelector("#crew-image");

  const crewRole =
    document.querySelector("#crew-role");

  const crewName =
    document.querySelector("#crew-name");

  const crewBio =
    document.querySelector("#crew-bio");

  function updateCrew(member) {

    crewRole.textContent =
      member.role;

    crewName.textContent =
      member.name;

    crewBio.textContent =
      member.bio;

    crewImage.src =
      member.images.png;

    crewImage.alt =
      member.name;
  }

  updateCrew(data.crew[0]);

  crewDots.forEach((dot) => {

    dot.addEventListener("click", () => {

      crewDots.forEach((button) => {
        button.classList.remove("active");
      });

      dot.classList.add("active");

      const selectedCrew =
        data.crew.find(
          member =>
            member.name ===
            dot.dataset.crew
        );

      updateCrew(selectedCrew);

    });

  });

}



/* ==================================================
   TECHNOLOGY
================================================== */

function initTechnology(data) {

  const technologyTabs =
    document.querySelectorAll(".technology__tab");

  if (technologyTabs.length === 0) return;

  const technologySubtitle =
    document.querySelector("#technology-subtitle");

  const technologyName =
    document.querySelector("#technology-name");

  const technologyDescription =
    document.querySelector("#technology-description");

  const technologyImage =
    document.querySelector("#technology-image");

  function updateTechnology(technology) {

    technologySubtitle.textContent =
      "The terminology...";

    technologyName.textContent =
      technology.name;

    technologyDescription.textContent =
      technology.description;

    technologyImage.src =
      technology.images.portrait;

    technologyImage.alt =
      technology.name;
  }

  updateTechnology(data.technology[0]);

  technologyTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      technologyTabs.forEach((button) => {
        button.classList.remove("active");
      });

      tab.classList.add("active");

      const selectedTechnology =
        data.technology.find(
          technology =>
            technology.name ===
            tab.dataset.technology
        );

      updateTechnology(selectedTechnology);

    });

  });

}