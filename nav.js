const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });


    
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navbarLinks = document.getElementById("navbar-links");
    
        menuToggle.addEventListener("click", function () {
            navbarLinks.classList.toggle("show");
        });
    });
    
    