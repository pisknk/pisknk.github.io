document.addEventListener("DOMContentLoaded", function () {
    const archivesList = document.getElementById("archivesList");
    const backButton = document.getElementById("backToPopup");

    // Function to display archived rants
    function displayArchives() {
        const archivedRants = JSON.parse(localStorage.getItem("rants")) || [];

        // Loop through archived rants and create list items for each
        archivedRants.forEach(function (rant, index) {
            const listItem = document.createElement("li");
            const deleteButton = document.createElement("button"); // Create a delete button
            deleteButton.classList.add("delete-button"); // Add the "delete-button" class

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

            // Create list item content with date-time and rant text
            listItem.innerHTML = `
            <div class="date-time">${dateTimeString}:</div>
            <div class="rant-text">${rant.text}</div>
            `;

            // Apply styles to the list item
            listItem.style.width = "23.125rem";
            listItem.style.height = "auto";
            listItem.style.flexShrink = "0";
            listItem.style.background = "#FFF";
            listItem.style.backdropFilter = "blur(6.5px)";
            listItem.style.marginBottom = "1rem";
            listItem.style.padding = "1rem";

            // Style the rant text
            const rantText = listItem.querySelector('.rant-text'); 
            rantText.style.fontFamily = 'Inter, sans-serif'; 
            rantText.style.lineHeight = '1.5'; 
            rantText.style.color = '#171717';
            rantText.style.marginTop = '0.7rem'; 

            // Apply styles to the delete button
            deleteButton.style.backgroundColor = "#F00";
            deleteButton.style.color = "#fff";
            deleteButton.style.border = "none";
            deleteButton.style.padding = "5px 10px";
            deleteButton.style.marginLeft = "0px";
            deleteButton.style.marginTop = "20px";
            deleteButton.style.cursor = "pointer";

            // Set a data attribute to store the index of the rant
            deleteButton.setAttribute("data-index", index);
            deleteButton.textContent = "Delete"; // Text for the delete button
            deleteButton.addEventListener("click", function () {
                // Call a function to delete the rant with the specified index
                deleteRant(index);
            });

            // Append the delete button to the list item
            listItem.appendChild(deleteButton);

            // Append the list item to the archives list
            archivesList.appendChild(listItem);
        });
    }

    // Function to delete a rant by index
    function deleteRant(index) {
        const archivedRants = JSON.parse(localStorage.getItem("rants")) || [];

        if (index >= 0 && index < archivedRants.length) {
            // Remove the rant with the specified index from the array
            archivedRants.splice(index, 1);

            // Update the localStorage with the modified array
            localStorage.setItem("rants", JSON.stringify(archivedRants));

            // Remove the deleted item from the DOM
            const listItem = archivesList.querySelectorAll("li")[index];
            listItem.remove();
        }
    }

    // Add an event listener to the "Back" button
    backButton.addEventListener("click", function () {
        // You can specify what should happen when the button is clicked here.
        // For example, to go back to the previous page:
        window.history.back();
    });

    // Call the function to display the archived rants when the page loads
    displayArchives();
});
