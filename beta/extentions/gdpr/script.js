document.addEventListener("DOMContentLoaded", function () {
    const frustrationInput = document.getElementById("frustrationInput");
    const submitBtn = document.getElementById("submitBtn");
    const messageContainer = document.getElementById("messageContainer");
    const message = document.getElementById("message");
    const timer = document.getElementById("timer");
    const motivationalMessage = document.getElementById("motivationalMessage");
    const container = document.querySelector(".container");
    const audio = document.getElementById("audio");
    const saveToArchiveCheckbox = document.getElementById("saveToArchive");
    const viewArchivesBtn = document.getElementById("viewArchivesBtn");

    let countdown = 3;

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
            container.style.display = "none";
            audio.play();
            const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
            motivationalMessage.innerText = motivationalMessages[randomIndex];
            motivationalMessage.style.display = "block";
            message.innerText = "Your frustration has been sent into the void!";
            messageContainer.style.display = "block";

            if (saveToArchiveCheckbox.checked) {
                saveRantToArchive(userFrustration); // Save the typed message to localStorage
            }

            timer.style.display = "block";
            timer.innerText = `${countdown} ${countdown === 1 ? '' : ''}`;

            const countdownInterval = setInterval(function () {
                countdown--;

                timer.innerText = `${countdown} ${countdown === 1 ? '' : ''}`;

                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    timer.style.display = "none";
                    frustrationInput.value = "";
                    container.style.display = "block";
                    messageContainer.style.display = "none";
                    motivationalMessage.style.display = "none";
                    countdown = 3;
                }
            }, 1000);
        }
    });

    function saveRantToArchive(rantText) {
        const existingRants = JSON.parse(localStorage.getItem("rants")) || [];
        existingRants.push({ text: rantText, timestamp: new Date().toISOString() });
        localStorage.setItem("rants", JSON.stringify(existingRants));
    }

    viewArchivesBtn.addEventListener("click", function () {
        window.location.href = "archives.html";
        
        // Retrieve archived rants from localStorage
        const archivedRants = JSON.parse(localStorage.getItem("rants")) || [];

        if (archivedRants.length > 0) {
            // Create a dialog to display archived rants
            const archivesDialog = document.createElement("div");
            archivesDialog.id = "archivesDialog";
            archivesDialog.style.background = "white";
            archivesDialog.style.padding = "10px";
            archivesDialog.style.border = "1px solid #ccc";
            archivesDialog.style.overflow = "scroll";
            archivesDialog.style.height = "300px"; // Set the desired height

            // Create an unordered list to display archived rants
            const ul = document.createElement("ul");

            // Loop through archived rants and create list items for each
            archivedRants.forEach(function (rant) {
                const listItem = document.createElement("li");

                // Format the timestamp to display date and time
                const timestamp = new Date(rant.timestamp);
                const formattedDate = timestamp.toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                });
                const formattedTime = timestamp.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true, // Use 12-hour time format
                });

                // Create a string with the formatted date and time
                const dateTimeString = `${formattedDate}, ${formattedTime}`;

                listItem.textContent = `${dateTimeString}: ${rant.text}`;
                ul.appendChild(listItem);
            });

            // Add the list to the dialog
            archivesDialog.appendChild(ul);

            // Append the dialog to the popup.html body
            document.body.appendChild(archivesDialog);
        } else {
            alert("No archived rants found.");
        }
    });
});
