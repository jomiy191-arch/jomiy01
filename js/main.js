// Burger menu toggle
const burger = document.querySelector(".burger");
const headerList = document.querySelector(".header-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerList.classList.toggle("active");
});

// Counter animation
const counters = document.querySelectorAll(".about-list li h1 .num");
const speed = 200; // animation speed

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.parentElement.dataset.target || +counter.textContent;
    const count = +counter.innerText;

    const increment = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  }
  updateCount();
});

// Newsletter form alert
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  newsletterForm.reset();
});

// Contact form alert
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
  contactForm.reset();
});
