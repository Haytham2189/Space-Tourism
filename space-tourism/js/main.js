
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

const mobileNavClose = document.querySelector(".mobile-nav-close");

const navbarMenu = document.querySelector(".navbar-menu");

mobileNavToggle.addEventListener("click", () => {
  navbarMenu.classList.add("open");
});

mobileNavClose.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});


/*============================== Destination ==================*/

const destinationTabs =
  document.querySelectorAll(".destination__tab");

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

fetch("./data.json")
  .then(response => response.json())
  .then(data => {

    /* Initial state = Moon */
    updateDestination(data.destinations[0]);

    destinationTabs.forEach((tab) => {

      tab.addEventListener("click", () => {

        /* Active tab */
        destinationTabs.forEach((button) => {
          button.classList.remove("active");
        });

        tab.classList.add("active");

        /* Find destination */
        const selectedDestination =
          data.destinations.find(
            destination =>
              destination.name === tab.dataset.destination
          );

        updateDestination(selectedDestination);

      });

    });

  });