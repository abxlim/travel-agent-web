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

// Testimonial
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
