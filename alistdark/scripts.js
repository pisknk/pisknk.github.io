document.addEventListener('DOMContentLoaded', function () {
    // Fetch the poem data from the JSON file
    fetch('poems.json')
        .then(response => response.json())
        .then(data => {
            // Assuming you want to display the first poem in the JSON array
            const poem = data[0];

            // Update the HTML elements with the poem data and use innerHTML
            document.querySelector('.mica-box h2').textContent = poem.title;
            document.querySelector('.poem-text').innerHTML = poem.text;
        })
        .catch(error => {
            console.error('Error fetching poem data:', error);
        });
});
