document.addEventListener("DOMContentLoaded", function () {
    const frustrationInput = document.getElementById("frustrationInput");
    const submitBtn = document.getElementById("submitBtn");
    const messageContainer = document.getElementById("messageContainer");
    const message = document.getElementById("message");
    const timer = document.getElementById("timer");
    const motivationalMessage = document.getElementById("motivationalMessage");
    const container = document.querySelector(".container"); // Get the container div
    const audio = document.getElementById("audio");

    let countdown = 3; // Countdown time in seconds

    // Array of motivational messages
    const motivationalMessages = [
        "I can see that you're really upset/frustrated/angry.",
        "I'm really sorry to hear that you're going through this.",
        "It must be really tough for you right now.",
        "Do you want to talk more about what happened?",
        "Is there anything specific that's been bothering you?",
        "I understand why you'd feel that way.",
        "It's completely natural to be upset about this.",
        "How do you think this situation could be resolved?",
        "What do you think triggered these emotions?",
        "I'm here if you need to talk.",
        "You don't have to go through this alone.",
        "Take your time, I'm here to listen.",
        "I'm here to support you in any way I can.",
        "I'm sorry you're going through this, but I'm here for you.",
        "I can't imagine how hard this must be for you.",
        "Your feelings are important, and I'm here to listen.",
        "Tell me more about what's been going on.",
        "I appreciate you opening up to me.",
        "I'm not here to judge; I just want to understand.",
        "Let me know how I can support you.",
        "You have every right to feel the way you do.",
        "I'm sending you positive thoughts and virtual hugs.",
        "It's okay to feel this way, and it's okay to talk about it.",
        "We all have tough moments; you're not alone in this.",
        "I'm genuinely concerned about how you're feeling."
    ];

    submitBtn.addEventListener("click", function () {
        const userFrustration = frustrationInput.value.trim();
        
        if (userFrustration === "") {
            alert("Please type your frustration first!");
        } else {
            // Hide the container div.
            container.style.display = "none";

            // Play the audio sound effect.
            audio.play();

            // Display a random motivational message.
            const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
            motivationalMessage.innerText = motivationalMessages[randomIndex];
            motivationalMessage.style.display = "block";

            // Display the message for the submitted frustration.
            message.innerText = "Your frustration has been sent into the void!";
            messageContainer.style.display = "block";

            // Display the timer and update it every second.
            timer.style.display = "block";
            timer.innerText = `Message will disappear in ${countdown} ${countdown === 1 ? 'second' : 'seconds'}`;

            const countdownInterval = setInterval(function () {
                countdown--;

                // Update the timer text.
                timer.innerText = `Message will disappear in ${countdown} ${countdown === 1 ? 'second' : 'seconds'}`;

                if (countdown <= 0) {
                    // Clear the interval when the countdown reaches 0.
                    clearInterval(countdownInterval);
                    // Clear the timer text.
                    timer.style.display = "none";
                    // Clear the input field after submission.
                    frustrationInput.value = "";
                    // Show the container and hide the message and motivational message.
                    container.style.display = "block";
                    messageContainer.style.display = "none";
                    motivationalMessage.style.display = "none";
                    countdown = 3; // Reset the countdown for the next submission.
                }
            }, 1000); // Update every second.
        }
    });
});
