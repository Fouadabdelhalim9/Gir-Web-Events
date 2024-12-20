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
    drag: false, // Disable drag
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
  const rangeInputs = document.querySelectorAll(".form-range");

  // const circle = document.getElementById("circle");

  // Function to update the position of the circle element
  function updateCirclePosition(e) {
    console.log("the range changed");
    const rangeWrapper = e.target.closest(".range-wrapper");

    const circle = rangeWrapper.querySelector(".circle");

    const rangeValue = e.target.value;
    const max = e.target.max;
    const min = e.target.min;

    // Calculate the percentage of the current value relative to the max/min range
    const percentage = ((rangeValue - min) / (max - min)) * 100;

    // Update the content of the circle
    //circle.textContent = rangeValue;

    // Move the circle element above the thumb
    const thumbOffset = ((e.target.offsetWidth - 20) * percentage) / 100; // Center the circle
    circle.style.transform = `translateX(${thumbOffset}px)`;
  }
  rangeInputs?.forEach((rangeInput) => {
    // Update position on input change
    rangeInput?.addEventListener("input", updateCirclePosition);

    // Initial update when page loads
    // updateCirclePosition(rangeInput);
  });

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











// fouad 
document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;

  // Function to show/hide steps
  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.style.display = (index === stepIndex) ? 'block' : 'none';
    });

    // Hide/Show navigation buttons
    if (stepIndex === 0) {
      document.getElementById('prev-btn').style.display = 'none';
    } else {
      document.getElementById('prev-btn').style.display = 'inline-block';
    }

    if (stepIndex === steps.length - 1) {
      document.getElementById('next-btn').style.display = 'none';
      document.getElementById('submit-btn').style.display = 'inline-block';
    } else {
      document.getElementById('next-btn').style.display = 'inline-block';
      document.getElementById('submit-btn').style.display = 'none';
    }
  }

  // Show the first step initially
  showStep(currentStep);

  // Handle Next button click
  document.getElementById('next-btn').addEventListener('click', function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  // Handle Previous button click
  document.getElementById('prev-btn').addEventListener('click', function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  // Handle Form submission
  document.getElementById('stepper-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form Submitted Successfully!');
    // Handle form data here (e.g., AJAX request to server)
  });
});
