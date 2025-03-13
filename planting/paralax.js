
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 850) {
        const outerDiv = document.querySelector('#left');
        const innerDiv = document.querySelector('#left-inner');
            
        window.addEventListener('scroll', () => {
            // Get the top position of the outer div relative to the viewport
            const outerRect = outerDiv.getBoundingClientRect();
            const innerHeight = innerDiv.offsetHeight;

            // Get the scroll position of the window
            const scrollTop = window.scrollY;

            // Calculate the distances
            const distanceFromTop = outerRect.top + scrollTop;
            const viewportHeight = window.innerHeight;

            // Conditions for changing the position of innerDiv
            if (scrollTop < window.innerHeight*(0.65+0.4)) {
            // Set to relative when less than 100vh from the top of the page
            outerDiv.style.alignContent = 'flex-start';
            innerDiv.style.position = 'relative';
            innerDiv.style.top = '0px'; // Reset top value
            innerDiv.style.bottom = ''; // Clear any bottom value
            } else if (scrollTop > window.innerHeight*(0.65+0.4) && scrollTop < window.innerHeight*(1.9+0.4)) {
            // Set to fixed when between 100vh and 300vh from the top of the page
            innerDiv.style.position = 'fixed';
            innerDiv.style.top = '50px'; // Keep it 10px from the top of the viewport
            innerDiv.style.bottom = ''; // Clear any bottom value
            } else {
            // Set to absolute and position at the bottom of the outer-div when past 300vh from the top of the page
            innerDiv.style.position = 'relative';
            innerDiv.style.top = ''; // Clear any top value
            innerDiv.style.bottom = '10px'; // Set to 10px from the bottom of the outer-div
            outerDiv.style.alignContent = 'flex-end';
            }
        });        
        
        if (window.innerWidth > 1075) {
            const outerDiv = document.querySelector('#left');
            const innerDiv = document.querySelector('#left-inner');

            window.addEventListener('scroll', () => {
                // Get the top position of the outer div relative to the viewport
                const outerRect = outerDiv.getBoundingClientRect();
                const innerHeight = innerDiv.offsetHeight;

                // Get the scroll position of the window
                const scrollTop = window.scrollY;

                // Calculate the distances
                const distanceFromTop = outerRect.top + scrollTop;
                const viewportHeight = window.innerHeight;

                // Conditions for changing the position of innerDiv
                if (scrollTop < window.innerHeight*(0.8+0.4)) {
                // Set to relative when less than 100vh from the top of the page
                outerDiv.style.alignContent = 'flex-start';
                innerDiv.style.position = 'relative';
                innerDiv.style.top = '0px'; // Reset top value
                innerDiv.style.bottom = ''; // Clear any bottom value
                } else if (scrollTop > window.innerHeight*(0.8+0.4) && scrollTop < window.innerHeight*(1.8+0.4)) {
                // Set to fixed when between 100vh and 300vh from the top of the page
                innerDiv.style.position = 'fixed';
                innerDiv.style.top = '50px'; // Keep it 10px from the top of the viewport
                innerDiv.style.bottom = ''; // Clear any bottom value
                } else {
                // Set to absolute and position at the bottom of the outer-div when past 300vh from the top of the page
                innerDiv.style.position = 'relative';
                innerDiv.style.top = ''; // Clear any top value
                innerDiv.style.bottom = '10px'; // Set to 10px from the bottom of the outer-div
                outerDiv.style.alignContent = 'flex-end';
                }
            });     
        }   

        if (window.innerWidth > 1250) {
            const outerDiv = document.querySelector('#left');
            const innerDiv = document.querySelector('#left-inner');

            window.addEventListener('scroll', () => {
                // Get the top position of the outer div relative to the viewport
                const outerRect = outerDiv.getBoundingClientRect();
                const innerHeight = innerDiv.offsetHeight;

                // Get the scroll position of the window
                const scrollTop = window.scrollY;

                // Calculate the distances
                const distanceFromTop = outerRect.top + scrollTop;
                const viewportHeight = window.innerHeight;

                // Conditions for changing the position of innerDiv
                if (scrollTop < (window.innerHeight*1.3)) {
                // Set to relative when less than 100vh from the top of the page
                outerDiv.style.alignContent = 'flex-start';
                innerDiv.style.position = 'relative';
                innerDiv.style.top = '0px'; // Reset top value
                innerDiv.style.bottom = ''; // Clear any bottom value
                } else if (scrollTop > (window.innerHeight*1.3) && scrollTop < (window.innerHeight*(2.25))) {
                // Set to fixed when between 100vh and 300vh from the top of the page
                innerDiv.style.position = 'fixed';
                innerDiv.style.top = '50px'; // Keep it 10px from the top of the viewport
                innerDiv.style.bottom = ''; // Clear any bottom value
                } else {
                // Set to absolute and position at the bottom of the outer-div when past 300vh from the top of the page
                innerDiv.style.position = 'relative';
                innerDiv.style.top = ''; // Clear any top value
                innerDiv.style.bottom = '10px'; // Set to 10px from the bottom of the outer-div
                outerDiv.style.alignContent = 'flex-end';
                }
            });     
        }   
    }

});
