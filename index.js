// script.js

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


// HEART BUTTON
document.querySelectorAll(".heart").forEach(button => {

  button.addEventListener("click", function () {

    this.classList.toggle("liked");

    if (this.classList.contains("liked")) {
      this.innerHTML = "♥";
    } else {
      this.innerHTML = "♡";
    }

  });

});


// PACKAGE FILTER
const filterButtons = document.querySelectorAll(".filter");
const packageCards = document.querySelectorAll(".package-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    packageCards.forEach(card => {

      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});


// SEARCH
function searchPackages() {

  const destination =
    document.getElementById("destinationSelect").value;

  const budget =
    document.getElementById("budgetSelect").value;

  let visible = 0;

  packageCards.forEach(card => {

    const category = card.dataset.category;
    const price = Number(card.dataset.price);

    const destinationMatch =
      destination === "all" ||
      category === destination;

    const budgetMatch =
      budget === "all" ||
      price <= Number(budget);

    if (destinationMatch && budgetMatch) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }

  });

  document
    .getElementById("packages")
    .scrollIntoView({ behavior: "smooth" });

  if (visible === 0) {
    setTimeout(() => {
      alert("No packages found for your selected destination and budget.");
    }, 500);
  }

}


// BOOK TRIP
function bookTrip(packageName) {

  const modal = document.getElementById("contactModal");

  modal.classList.add("show");

  const heading = modal.querySelector("h2");

  heading.innerHTML =
    `Plan your <span style="color:#087f8c">${packageName}</span> trip ✈️`;

}


// OPEN CONTACT
function openContact() {

  document
    .getElementById("contactModal")
    .classList.add("show");

}


// CLOSE CONTACT
function closeContact() {

  document
    .getElementById("contactModal")
    .classList.remove("show");

}


// CLOSE MODAL OUTSIDE
document
  .getElementById("contactModal")
  .addEventListener("click", function(e) {

    if (e.target === this) {
      closeContact();
    }

  });


// FORM SUBMIT
document
  .getElementById("tripForm")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
      "Thank you! Your trip enquiry has been submitted successfully. 🌍✈️"
    );

    this.reset();

    closeContact();

  });


// ESCAPE KEY
document.addEventListener("keydown", function(e) {

  if (e.key === "Escape") {
    closeContact();
  }

});