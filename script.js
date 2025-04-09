document.addEventListener("DOMContentLoaded", function() {
    // === START BUTTON REDIRECT === 
    const startButton = document.getElementById("start");
    if (startButton) {
        startButton.addEventListener("click", function() {
            window.location.href = "audio.html";    // Redirect to Audio page
        });
    }

    function adjustFullScreenContainer() {
        // Get the actual height of the nav bar
        const navBar = document.querySelector('nav');
        const navHeight = navBar.offsetHeight;
        
        // Get the full-screen container
        const fullScreenContainer = document.querySelector('.full-screen-container');
        
        // Set the height and top position based on the actual nav height
        if (fullScreenContainer) {
            fullScreenContainer.style.height = `calc(100vh - ${navHeight}px)`;
            fullScreenContainer.style.top = `${navHeight}px`;
        }
    }

    // Run the function immediately
    adjustFullScreenContainer();

    // Run when the window is resized
    window.addEventListener('resize', adjustFullScreenContainer);

    // Also run when images and other resources finish loading
    window.addEventListener('load', adjustFullScreenContainer);

    // === Audio & Vinyl Animation Control ===
    const audioPlayer = document.querySelector("audio");
    const vinyl = document.getElementById("vinyl");
    const endButtons = document.getElementById("end-buttons");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const backButton = document.getElementById("back-button");

    if (audioPlayer && vinyl) {
        // Start spinning vinyl when audio plays
        audioPlayer.addEventListener("play", function() {            
            vinyl.classList.add("spin");
            endButtons.classList.add("hidden");     // Hide buttons while audio plays
            
        });

        // Stop spinning vinyl when audio pauses
        audioPlayer.addEventListener("pause", function() {            
            vinyl.classList.remove("spin"); 
            
        });

        // Stop spinning and show buttons when audio ends
        audioPlayer.addEventListener("ended", function() {
            vinyl.classList.remove("spin");
            if (endButtons) endButtons.classList.remove("hidden");  // Show ending options
            if (backButton) backButton.classList.remove("hidden");  // Show BACK button
        });
    }
    // === End Buttons Redirect ===
    option1.addEventListener("click", function() {
        window.location.href = "page1.html"; 
    });

    option2.addEventListener("click", function() {
        window.location.href = "page2.html"; 
    });
    
});
