document.addEventListener("DOMContentLoaded", () => {
    //Put in Footer
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    }).then(() => {
      document.getElementById("current-year").innerHTML = new Date().getFullYear();
    })
});
