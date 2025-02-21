document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const address = document.getElementById("modal-address");
    const phone = document.getElementById("modal-phone");
    const website = document.getElementById("modal-website");
    const closeButton = document.querySelector(".close");

    let churchData = []; // Store fetched data

    // Fetch church data from JSON
    fetch("churches.json")
        .then(response => response.json())
        .then(data => {
            churchData = data;
        })
        .catch(error => console.error("Error loading church data:", error));


    document.querySelectorAll(".mission-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page jump

            const churchName = this.getAttribute("data-name").trim();
            // const church = churchData[churchName];
            // console.log(church);
            console.log(churchData.churches); // Log the actual data to check its structure
            const church = churchData.churches.find(ch => ch.name === churchName);


            if (church) {
                title.textContent = church.name;
                address.textContent = church.address;
                phone.textContent = "Phone: " + church.phone;
                website.textContent = church.website;
                website.href = church.website;
                modal.style.display = "flex";
            }
        });
    });

    closeButton.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", event => {
        if (event.target === modal) modal.style.display = "none";
    });


});