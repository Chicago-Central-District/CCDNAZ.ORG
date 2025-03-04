document.addEventListener("DOMContentLoaded", () => {
  addHeader();
});

function addHeader() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-goes-here").innerHTML = data;
      initDropdownContent(); // ✅ Runs after navbar is added
      initMobileMenuClose(); // ✅ Now runs AFTER menu exists
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

function initDropdownContent() {
  const dropdowns = document.querySelectorAll(".dropdown");

  document.addEventListener("click", function (event) {
    const target = event.target;
    const dropdown = target.closest(".dropdown");

    // ✅ If clicking outside any dropdown, close all dropdowns
    if (!dropdown) {
      dropdowns.forEach((element) => {
        element.classList.remove("dropdown--active");
      });
      return;
    }

    // ✅ If clicking inside a dropdown, check if it should be toggled
    const isClosing = dropdown.classList.contains("dropdown--active");

    dropdowns.forEach((element) => {
      element.classList.remove("dropdown--active");
    });

    // ✅ Only toggle if it was not already open
    if (!isClosing && target.closest(".dropbtn")) {
      dropdown.classList.add("dropdown--active");
    }
  });
}

// ✅ Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
  var menu = document.getElementById("nav-links");
  if (menu) {
    menu.classList.toggle("show-menu");
  }
}

// ✅ Close mobile nav when clicking outside of it
function initMobileMenuClose() {
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger"); // Ensure correct selector

    // ✅ Ensure elements exist before accessing properties
    if (!menu || !hamburger) return;

    // ✅ Check if menu is open & user clicks outside
    if (menu.classList.contains("show-menu") &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)) {
      menu.classList.remove("show-menu"); // ✅ Close menu
    }
  });
}

// Scroll Changes
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});