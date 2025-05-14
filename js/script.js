// Function to validate the form
function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const destinationInput = document.getElementById("destination");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const destinationError = document.getElementById("destinationError");

  let isValid = true;

  // Validasi Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validasi Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validasi Destination
  if (destinationInput.value.trim() === "") {
    destinationError.textContent = "Destination is required";
    isValid = false;
  } else {
    destinationError.textContent = "";
  }

  if (isValid) {
    // Reset input dan error jika valid
    nameInput.value = "";
    emailInput.value = "";
    destinationInput.value = "";

    nameError.textContent = "";
    emailError.textContent = "";
    destinationError.textContent = "";

    alert("Form submitted successfully");
  }
}

// Function to slide text banner
let indexTextBanner = 0;

function nextTextBanner() {
  indexTextBanner += 1;
  showTextBanner();
}

function showTextBanner() {
  const textBannerList = document.getElementsByClassName("slide-text");

  // Check if indexTextBanner is greater than the length of the textBannerList
  if (indexTextBanner > textBannerList.length - 1) {
    indexTextBanner = 0;
  }

  // Hide banner with looping
  for (let i = 0; i < textBannerList.length; i++) {
    textBannerList[i].classList.remove("active");
  }

  // Show the banner
  textBannerList[indexTextBanner].classList.add("active");
}

showTextBanner();

// Set interval to change the banner every 5 seconds
setInterval(() => {
  nextTextBanner();
}, 5000);

// Function to slide testimonial
let indexTestimonialBanner = 0;

function nextTestimonialBanner() {
  indexTestimonialBanner += 1;
  showTestimonialBanner();
}

function showTestimonialBanner() {
  const testimonialBannerList = document.getElementsByClassName(
    "testimonial-container"
  );

  // Check if indexTestimonialBanner is greater than the length of the testimonialBannerList
  if (indexTestimonialBanner > testimonialBannerList.length - 1) {
    indexTestimonialBanner = 0;
  }

  // Hide banner with looping
  for (let i = 0; i < testimonialBannerList.length; i++) {
    testimonialBannerList[i].classList.remove("active");
  }

  // Show the banner
  testimonialBannerList[indexTestimonialBanner].classList.add("active");
}

showTestimonialBanner();

// Set interval to change the banner every 5 seconds
setInterval(() => {
  nextTestimonialBanner();
}, 5000);
