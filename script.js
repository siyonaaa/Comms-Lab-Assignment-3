document.addEventListener("DOMContentLoaded", function() {
    // === START BUTTON REDIRECT === 
    const startButton = document.getElementById("start");
    if (startButton) {
        startButton.addEventListener("click", function() {
            window.location.href = "audio.html";    // Redirect to Audio page
        });
    }

    // === Audio & Vinyl Animation Control ===
    const audioPlayer = document.querySelector("audio");
    const vinyl = document.getElementById("vinyl");
    const endButtons = document.getElementById("end-buttons");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");


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
            endButtons.classList.remove("hidden");  // Show ending options
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
