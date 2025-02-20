document.addEventListener("DOMContentLoaded", () => {
    //Put in Navbar
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-goes-here").innerHTML = data;
    });
});



// Toggle the mobile menu when the hamburger icon is clicked
function toggleMenu() {
    var menu = document.getElementById("nav-links");
    menu.classList.toggle("show-menu");
}
