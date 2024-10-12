const select = document.querySelector("#type");
const passwordInput = document.querySelectorAll(".password");
const providerPassowrd = document.querySelectorAll(".provider-password");
const companyIdInput = document.querySelector(".companyId");
const companyWebsite = document.querySelector(".website");
const account = document.querySelector(".account");

//////////////////////////////////////////////
//// Make the slider works with splide
try {
  const splideTrindsOne = new Splide(".trinds__slider--one", {
    type: "loop",
    perPage: 4, // Default for large screens
    perMove: 1, // Moves one slide at a time
    breakpoints: {
      // Bootstrap's medium screen size (768px and below)
      768: {
        perPage: 2, // Show 2 slides on medium screens
      },
      // Bootstrap's small screen size (576px and below)
      576: {
        perPage: 1, // Show 1 slide on smaller screens
      },
    },
  });

  splideTrindsOne.mount();

  const splideTrindsTwo = new Splide(".trinds__slider--two", {
    type: "loop",
    perPage: 4, // Default for large screens
    perMove: 1, // Moves one slide at a time
    breakpoints: {
      // Bootstrap's medium screen size (768px and below)
      768: {
        perPage: 2, // Show 2 slides on medium screens
      },
      // Bootstrap's small screen size (576px and below)
      576: {
        perPage: 1, // Show 1 slide on smaller screens
      },
    },
  });

  splideTrindsTwo.mount();

  const splideTrindsThree = new Splide(".trinds__slider--three", {
    type: "loop",
    perPage: 4, // Default for large screens
    perMove: 1, // Moves one slide at a time

    breakpoints: {
      // Bootstrap's medium screen size (768px and below)
      768: {
        perPage: 2, // Show 2 slides on medium screens
      },
      // Bootstrap's small screen size (576px and below)
      576: {
        perPage: 1, // Show 1 slide on smaller screens
      },
    },
  });

  splideTrindsThree.mount();

  const splideServicesOne = new Splide(".services__slider--one", {
    type: "loop",
    perPage: 5, // Default for large screens
    perMove: 1, // Moves one slide at a time

    breakpoints: {
      // Bootstrap's medium screen size (768px and below)
      768: {
        perPage: 2, // Show 2 slides on medium screens
      },
      // Bootstrap's small screen size (576px and below)
      576: {
        perPage: 1, // Show 1 slide on smaller screens
      },
    },
  });

  splideServicesOne.mount();

  var splidePro = new Splide(".progress", {
    pagination: false,
  });
  var bar = splidePro.root.querySelector(".my-slider-progress-bar");

  // Updates the bar width whenever the carousel moves:
  splidePro.on("mounted move", function () {
    var end = splidePro.Components.Controller.getEnd() + 1;
    var rate = Math.min((splidePro.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  splidePro.mount();

  var splide = new Splide(".hero__splide", {
    type: "loop",
    autoplay: true,
    interval: 2000,
    arrows: false,
    pagination: false,
    speed: 2000,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    direction: "ltr",
  });
  splide.mount();
  var splide = new Splide(".wedding__splide", {
    type: "loop",
    autoplay: true,
    interval: 2000,
    arrows: false,
    pagination: false,
    speed: 2000,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    direction: "ltr",
  });
  splide.mount();

  //////////////////////////////////////////////
  //// toggle overlay and progress box

  const btnStart = document.querySelector(".start__planning");
  const overlay = document.querySelector(".overlay");
  const overlayContent = document.querySelector(".overlay__content");
  const btnClose = document.querySelector(".close");
  const addPackage = document.querySelectorAll(".add__package");
  const arrangement = document.querySelector(".arrangemet");
  const btnCloseArrangement = document.querySelector(".close__arrangement");

  addPackage?.forEach((btn) => {
    btn.addEventListener("click", function () {
      overlay.classList.toggle("visually-hidden");
      arrangement.classList.toggle("visually-hidden");
    });
  });

  btnCloseArrangement?.addEventListener("click", function () {
    overlay.classList.toggle("visually-hidden");
    arrangement.classList.toggle("visually-hidden");
  });

  btnStart?.addEventListener("click", function () {
    overlay.classList.toggle("visually-hidden");
    overlayContent.classList.toggle("visually-hidden");
  });

  overlay?.addEventListener("click", function () {
    overlay.classList.toggle("visually-hidden");
    overlayContent.classList.add("visually-hidden");
    arrangement.classList.add("visually-hidden");
    settings.classList.remove("appear");
    supportContainer.classList.add("d-none");
  });

  btnClose?.addEventListener("click", function () {
    overlay.classList.toggle("visually-hidden");
    overlayContent.classList.toggle("visually-hidden");
  });

  //////////////////////////////////////////
  ///// progress budget and guests
  const rangeInput = document.getElementById("range");
  const circle = document.getElementById("circle");

  // Function to update the position of the circle element
  function updateCirclePosition() {
    const rangeValue = rangeInput.value;
    const max = rangeInput.max;
    const min = rangeInput.min;

    // Calculate the percentage of the current value relative to the max/min range
    const percentage = ((rangeValue - min) / (max - min)) * 100;

    // Update the content of the circle
    circle.textContent = rangeValue;

    // Move the circle element above the thumb
    const thumbOffset = (rangeInput.offsetWidth * percentage) / 100 - 15; // Center the circle
    circle.style.transform = `translateX(${thumbOffset}px)`;
  }

  // Update position on input change
  rangeInput?.addEventListener("change", updateCirclePosition);

  // Initial update when page loads
  updateCirclePosition();

  /////////////////////////////////////////
  ///// progress budget and guests
  const rangeInputTwo = document.querySelector(".range--2");
  const circleTwo = document.querySelector(".circle--2");

  // Function to update the position of the circleTwo element
  function updatecircleTwoPosition() {
    const rangeValue = rangeInputTwo.value;
    const max = rangeInputTwo.max;
    const min = rangeInputTwo.min;

    // Calculate the percentage of the current value relative to the max/min range
    const percentage = ((rangeValue - min) / (max - min)) * 100;

    // Update the content of the circleTwo
    circleTwo.textContent = rangeValue + "$";

    // Move the circleTwo element above the thumb
    const thumbOffset = (rangeInputTwo.offsetWidth * percentage) / 100 - 15; // Center the circleTwo
    circleTwo.style.transform = `translateX(${thumbOffset}px)`;
  }

  // Update position on input change
  rangeInputTwo?.addEventListener("change", updatecircleTwoPosition);

  // Initial update when page loads
  updatecircleTwoPosition();

  ////////////////////////////////////////
  //////// Conditionally show the main and search results and search empty

  const mainContent = document.querySelector(".main__content");
  const searchResults = document.querySelector(".search__results");
  const searchEmpty = document.querySelector(".search__empty");
  const searchProviders = document.querySelector(".search__providers");
  const btnProviders = document.querySelector(".btn__providers");
  const formNav = document.querySelector(".form__nav");
  const formNavInput = document.querySelector(".form__nav--input");
  const homeMain = document.querySelectorAll(".home__main");

  formNav?.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchValue = formNavInput.value;

    if (searchValue !== "") {
      searchResults.classList.remove("d-none");
      searchEmpty.classList.add("d-none");
      mainContent.classList.add("d-none");
      searchProviders.classList.add("d-none");
    } else if (searchValue === "") {
      searchResults.classList.add("d-none");
      searchEmpty.classList.remove("d-none");
      mainContent.classList.add("d-none");
      searchProviders.classList.add("d-none");
    }
  });

  btnProviders?.addEventListener("click", function () {
    searchProviders.classList.remove("d-none");
    searchResults.classList.add("d-none");
    searchEmpty.classList.add("d-none");
    mainContent.classList.add("d-none");
  });

  homeMain?.forEach((el) => {
    el.addEventListener("click", function () {
      searchResults.classList.add("d-none");
      searchEmpty.classList.add("d-none");
      mainContent.classList.remove("d-none");
      searchProviders.classList.add("d-none");
    });
  });

  ////////////////////////////////////////
  //// toggle vendours
  const vendours = document.querySelector(".vendours");

  vendours?.addEventListener("click", function (e) {
    if (!e.target.classList.contains("col")) return;
    e.target.classList.toggle("btn-primary");
  });

  const events = document.querySelectorAll(".events");
  events?.forEach((event) => {
    event?.addEventListener("click", function () {
      event?.classList.toggle("btn-primary-light");
    });
  });

  const hallContainer = document.querySelectorAll(".hall__container");
  const hallInputs = document.querySelectorAll(".hall__input");

  hallContainer?.forEach((hall) => {
    hall?.addEventListener("click", function (e) {
      if (!e.target.classList.contains("hall__input")) return;
      hallInputs.forEach((input) => {
        input.classList.remove("btn-primary");
      });
      e.target.classList.add("btn-primary");
    });
  });

  ////////////////////////////////////////
  //// settings toggle
  const settings = document.querySelector(".settings");
  const settingsBtn = document.querySelector(".settings__btn");
  const supportContainer = document.querySelector(".support");
  settingsBtn?.addEventListener("click", function () {
    settings.classList.toggle("appear");
    overlay.classList.remove("visually-hidden");
  });

  settings?.addEventListener("click", function (e) {
    if (e.target.classList.contains("settings__item")) {
      settings.classList.toggle("appear");
      overlay.classList.add("visually-hidden");
    } else if (
      e.target.closest(".support__content") ||
      e.target.closest(".support__btn")
    ) {
      supportContainer.classList.remove("d-none");
    } else {
      supportContainer.classList.add("d-none");
    }
  });

  ////////////////////////////////////////
  //// filters toggle
  const filterBtn = document.querySelectorAll(".filter__btn");
  console.log(filterBtn);
  const filters = document.querySelectorAll(".filters");

  filterBtn?.forEach((btn) => {
    btn.addEventListener("click", function () {
      filters.forEach((filter) => {
        filter.classList.toggle("visually-hidden");
      });
    });
  });
} catch (error) {
  console.log(error);
}

////////////////////////////////////////
//////// for sign up selection
select?.addEventListener("change", function (e) {
  const selected = e.target.value;

  if (selected == "Company providers") {
    passwordInput.forEach((input) => {
      input.classList.add("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.remove("d-none");
    });
    account.classList.remove("d-none");
    companyIdInput.classList.remove("d-none");
    companyWebsite.classList.remove("d-none");
  } else if (selected == "user") {
    passwordInput.forEach((input) => {
      input.classList.remove("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.add("d-none");
    });
    companyIdInput.classList.add("d-none");
    companyWebsite.classList.add("d-none");
    account.classList.add("d-none");
  } else {
    passwordInput.forEach((input) => {
      input.classList.add("d-none");
    });
    providerPassowrd.forEach((input) => {
      input.classList.remove("d-none");
    });
    companyIdInput.classList.add("d-none");
    companyWebsite.classList.add("d-none");
    account.classList.remove("d-none");
  }
});

//////////////////////////////////////////
/// // payment page
