document.addEventListener("DOMContentLoaded", () => {
    //Put in Navbar
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-goes-here").innerHTML = data;
    });
});



// Toggle the mobile menu when the hamburger icon is clicked
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to toggle dropdowns on click
    document.querySelectorAll(".dropdown > a").forEach(button => {
      button.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent default link behavior

          // Toggle the dropdown menu visibility
          const parent = this.closest(".dropdown");
          const dropdownContent = parent.querySelector(".dropdown-content");
          dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      });
  });
});

// Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
  var menu = document.getElementById("nav-links");
  menu.classList.toggle("show-menu");
}
