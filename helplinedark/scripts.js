document.addEventListener('DOMContentLoaded', function() {
    // Fetch the poem data from the JSON file
    fetch('poems.json')
        .then(response => response.json())
        .then(data => {
            // Find the poem with the title
            const poem = data.find(poem => poem.title === "helpline");

            // Check if the poem was found
            if (poem) {
                // Update the HTML elements with the poem data
                document.querySelector('.mica-box h2').textContent = poem.title;
                document.querySelector('.poem-text').innerHTML = poem.text;
            } else {
                console.error('Poem not found in JSON data.');
            }
        })
        .catch(error => {
            console.error('Error fetching poem data:', error);
        });
});
