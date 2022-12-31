TweenMax.to(".full-page-layer", 1, {
  scaleX: 1,
  delay: 0,
  opacity: 1,
  ease: Power2.easeInOut,
});
TweenMax.to(".hero-section-img", 1, {
  scaleY: 1,
  delay: 0,
  opacity: 1,
  ease: Power2.easeInOut,
});
TweenMax.to(".landing-page-layer-1 ", 1, {
  scaleY: 0,
  delay: 0.1,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.to(".landing-page-layer-2", 1, {
  scaleY: 0,
  delay: 0.1,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.to(".Landing-page-policy", 1, {
  scaleY: 1,
  delay: 0,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.to("#contact", 1, {
  scaleX: 1,
  delay: 0,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.to(".containers", 1, {
  scaleX: 1,
  delay: 0,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.to(".cont-info", 1, {
  scaleX: 1,
  delay: 0.2,
  opacity: 1,
  ease: Power2.easeInOut,
});

TweenMax.from(".cont-info-head h2", 1, {
  y: "-30",
  opacity: 1,
  ease: Power2.easeInOut,
  delay: 0.3,
});
TweenMax.from(".column-left p", 1, {
  y: "-30",
  opacity: 0,
  ease: Power2.easeInOut,
  delay: 0.3,
});

//carousel





//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "profile-image-1.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image: "profile-image-4.png",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;











var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});