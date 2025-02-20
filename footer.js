document.addEventListener("DOMContentLoaded", () => {
    //Put in Footer
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
    
    document.getElementById("current-year").innerHTML = new Date().getFullYear();
});
