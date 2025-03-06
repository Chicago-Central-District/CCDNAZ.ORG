fetch('churches.json')
  .then(response => response.json()) 
  .then(data => {
    console.log('Data received:', data);

    // Extract the "churches" array
    const churches = data.churches;

    if (!Array.isArray(churches)) {
      throw new Error("Expected 'churches' to be an array!");
    }

    const container = document.getElementById('data-container');

    churches.forEach(church => {
      const panel = document.createElement('div');
      panel.classList.add('panel');

      panel.innerHTML = `
        <h2 class="panel-title">${church.name}</h2>
        <hr>
        <p class="panel-content">${church.address}</p>
        <p class="panel-content">${church.phone}</p>
        <a href="${church.website}" target="_blank">
          <p class="panel-content">${church.website}</p>
        </a>
      `;

      container.appendChild(panel);


    // Add click event to show modal when the panel is clicked
    panel.addEventListener('click', () => {
        // Set modal content
        document.getElementById('modal-title').textContent = church.name;
        document.getElementById('modal-address').textContent = church.address;
        document.getElementById('modal-phone').textContent = church.phone;
         // Only set website in the modal if it exists
         const modalWebsiteLink = document.getElementById('modal-website');
         if (church.website) {
           modalWebsiteLink.style.display = 'block';
           modalWebsiteLink.href = church.website;
           modalWebsiteLink.textContent = 'Visit Website';
         } else {
           modalWebsiteLink.style.display = 'none';
         }

        // Show modal
        document.getElementById('modal').style.display = 'flex';
      });
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

    // Close the modal when the user clicks the close button
    document.getElementById('close-modal').addEventListener('click', () => {
      document.getElementById('modal').style.display = 'none';
    });

    // Close the modal if the user clicks anywhere outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
      }
    });


    //Searching
    document.getElementById("searchInput").addEventListener("input", function() {
      let filter = this.value.toLowerCase();
      let panels = document.querySelectorAll(".panel");
  
      panels.forEach(panel => {
          let text = panel.innerText.toLowerCase();
          if (text.includes(filter)) {
              panel.style.display = "block"; // Show matching panels
          } else {
              panel.style.display = "none"; // Hide non-matching panels
          }
      });
  });
  