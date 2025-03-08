document.addEventListener("DOMContentLoaded", function () {
    let allChurches = [];

    fetch("churches.json")
        .then(response => response.json())
        .then(data => {
            allChurches = data.churches;
            initializeMissionAreas(data)
        })
        .catch(error => console.error("Error loading data:", error));


function initializeMissionAreas(churches) {
    const buttonContainer = document.getElementById("button-container");

    const searchBar = document.getElementById("search-bar");

    const missionContainer = document.getElementById("mission-container");

    // Get unique mission areas from the JSON data
    // const missionAreas = [...new Set(churches.churches.map(church => church.mission_area))];

    const missionAreas = [
        {
          abbreviation: 'n/nw',
          name: 'North/NorthWest Mission Area',
          leader: 'Michael Parenti',
          imageUrl: 'images/ma-leaders/Michael+Parenti+Headshot.png',
          areaImageUrl: 'images/ccd-regions/CCD+North-Northwest+Full.png'
        },
        {
          abbreviation: 'c',
          name: 'Chicago Mission Area',
          leader: 'Dave Scott',
          imageUrl: 'images/ma-leaders/Dave+Scott+Headshot.png',
          areaImageUrl: 'images/ccd-regions/CCD+Chicago+Full.png'
        },
        {
          abbreviation: 's/sw',
          name: 'South/Southwest Mission Area',
          leader: 'Jared Richey',
          imageUrl: 'images/ma-leaders/Jared+Richey+Headshot.png',
          areaImageUrl: 'images/ccd-regions/CCD+South-Southwest+Full.png'
        },
        {
          abbreviation: 'ce',
          name: 'Central Mission Area',
          leader: 'Ken Bushey',
          imageUrl: 'images/ma-leaders/Ken+Bushey+Headshot.png',
          areaImageUrl: 'images/ccd-regions/CCD+Central+Full.png'
        },
        {
          abbreviation: 's',
          name: 'Southern Mission Area',
          leader: 'Dave Anderson',
          imageUrl: 'images/ma-leaders/Dave+Anderson+Headshot.jpg',
          areaImageUrl: 'images/ccd-regions/CCD+Southern+Full.png'
        },
        {
          abbreviation: 'h/l',
          name: 'Hispanic Churches',
          leader: 'Edy De Leon',
          leader2: 'Jose Alfaro',
          imageUrl: 'images/ma-leaders/Edy+De+Leon+Headshot.jpg',
          imageUrl2: 'images/ma-leaders/Jose+Alfaro+Headshot.jpg',
          areaImageUrl: 'images/ccd-regions/CCD+Chicago+Full.png'
        },
        {
          abbreviation: 'm',
          name: 'Multi-language Churches',
          leader: 'Paul & Linda Bold',
          imageUrl: 'images/ma-leaders/Paul+Bold+Headshot.jpg',
          areaImageUrl: 'images/ccd-regions/CCD+Chicago+Full.png'
        }
      ];
    const order = ["n/nw", "c", "s/sw", "ce", "s", "h/l", "m"];
    const missionAreaPrettyNames = ["North/NorthWest Mission Area", "Chicago Mission Area", "South/Southwest Mission Area", "Central Mission Area", "Southern Mission Area", "Hispanic Churches", "Multi-language Churches"];
    const missionAreaMap = {
        "n/nw": "North/NorthWest Mission Area",
        "c": "Chicago Mission Area",
        "s/sw": "South/Southwest Mission Area",
        "ce": "Central Mission Area",
        "s": "Southern Mission Area",
        "h/l": "Hispanic Churches",
        "m": "Multi-language Churches"
      };

    const sortedMissionAreas = missionAreas.sort((a, b) => 
        order.indexOf(a.abbreviation) - order.indexOf(b.abbreviation)
    );
    

        // Generate buttons with the **pretty names**
        sortedMissionAreas.forEach(area => {
            const prettyName = area.name; // Get the full name
            console.log(`<button>${prettyName}</button>`); // Replace with actual DOM manipulation
        });


    // Create buttons for each mission area
    sortedMissionAreas.forEach(area => {
        const button = document.createElement("button");
        button.classList.add("mission-button");
        button.textContent = area.name.toUpperCase(); // Display mission area name in uppercase
        button.addEventListener("click", () => {
            searchBar.value = "";
            document.getElementById("info-container").style.display = "flex";
            displayChurches(allChurches, area.abbreviation);
            displayMissionAreaInfo(area);
        });
        buttonContainer.appendChild(button);
    });

    // Display churches from the first mission area by default
    if (missionAreas.length > 0) {
        displayChurches(allChurches, sortedMissionAreas[0].abbreviation);
        displayMissionAreaInfo(sortedMissionAreas[0]);
    }

    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();
        const filteredChurches = allChurches.filter(church =>
            church.name.toLowerCase().includes(searchText) ||
            church.address.toLowerCase().includes(searchText)
        );

        // searchBar.value ? document.getElementById("info-container").style.display = "none" : document.getElementById("info-container").style.display = "flex";
        // displayChurches(filteredChurches, null); // Pass null to display all results

        if (searchText.trim() === "") {
            document.getElementById("info-container").style.display = "flex";
            // missionContainer.innerHTML = ""; // Hide churches when search is empty
            displayChurches(allChurches, sortedMissionAreas[0].abbreviation);
        } else {
            document.getElementById("info-container").style.display = "none";
            displayChurches(filteredChurches, null); // Show only filtered churches
        }
    });
}

function displayChurches(churches, selectedMission) {
    const missionContainer = document.getElementById("mission-container");
    missionContainer.innerHTML = ""; // Clear previous content

    // const filteredChurches = churches.churches.filter(church => church.mission_area === selectedMission);

    const filteredChurches = selectedMission
            ? churches.filter(church => church.mission_area === selectedMission)
            : churches;

    if (filteredChurches.length === 0) {
        // Display "No results found" message if no churches match the filter
        missionContainer.innerHTML = "<p>Sorry. No results found.</p>";
    } else {
        filteredChurches.forEach(church => {
            const churchDiv = document.createElement("div");
            churchDiv.classList.add("mission-item");

            churchDiv.innerHTML = `
                <div class="mission-text">
                    <h2>${church.name}</h2>
                    <p><strong>Address:</strong> ${church.address}</p>
                    <p><strong>Phone:</strong> <a href="tel:${church.phone}">${church.phone}</a></p>
                    <p><strong>Website:</strong> <a href="${church.website}" target="_blank">${church.website}</a></p>
                </div>
            `;

            missionContainer.appendChild(churchDiv);
        });
    }
}

function displayMissionAreaInfo(area) {
    const infoContainer = document.getElementById('info-container');

    let secondLeaderImage = area.leader2 ? `<img src="${area.imageUrl2}" alt="${area.leader2}" width="100" height="100">` : "";
    let secondLeaderText = area.leader2 ? `<h3>Leader: ${area.leader2}</h3>` : "";

    infoContainer.innerHTML = `
    <div id="p1">  
        <img src="${area.imageUrl}" alt="${area.leader}" width="100" height="100">
        ${secondLeaderImage}
    </div>
    <div id="p2">
        <h2>${area.name}</h2>
        <h3>Leader: ${area.leader}</h3>
        ${secondLeaderText}
    </div>
    <div id="p3">
        <img src="${area.areaImageUrl}">
    </div>
    `;
}

});