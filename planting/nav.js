var nav = document.querySelector('nav');
var menu = document.getElementById('menu');
var ulold = document.getElementById('ul');
var ul = document.getElementById('ul2');

menu.onclick = () => {
        if(ul.style.display == 'none'){
            ul.style.display = 'flex';
        }
        else {
            ul.style.display = 'none';
            console.log("it works");
        }
}
setInterval(() => {
if(window.innerWidth > 1150){
    ul.style.display = 'none';
}
}, 1)



function toggleDropdown(e) {
    // Prevent default action if any
    e.preventDefault();

    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");

    // Close any open dropdowns if the click is outside the button
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Ensure the event object is passed properly when the event occurs
document.querySelector('.dropbtn').onclick = function(event) {
    toggleDropdown(event);
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


document.getElementById('close').addEventListener('click', () => {
    ul.style.display = 'none';
});

document.querySelector('.dropbtn').addEventListener('click', toggleDropdown());