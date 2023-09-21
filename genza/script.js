// script.js
function generateRandomBrightColors() {
    function getRandomColor() {
        const brightnessThreshold = 128;
        const randomColor = () => Math.floor(Math.random() * 256);
        const r = randomColor();
        const g = randomColor();
        const b = randomColor();

        // Ensure the color is bright (higher brightness values)
        if (r + g + b < brightnessThreshold * 3) {
            return getRandomColor();
        }

        return `rgb(${r},${g},${b})`;
    }

    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    document.querySelector('.wallpaper-container').style.backgroundImage = gradient;
}

document.getElementById('generate-btn').addEventListener('click', generateRandomBrightColors);

// Generate an initial wallpaper when the page loads
generateRandomBrightColors();

// Add this to script.js
function generateRandomMeshPoints() {
    const svg = document.getElementById('mesh-svg');
    svg.innerHTML = ''; // Clear previous mesh points

    const numPoints = 10; // Adjust this number to control the density of mesh points

    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', `${x}%`);
        circle.setAttribute('cy', `${y}%`);
        circle.setAttribute('r', '2');
        circle.setAttribute('fill', '#000');

        svg.appendChild(circle);
    }
}

document.getElementById('generate-btn').addEventListener('click', function() {
    generateRandomBrightColors();
    generateRandomMeshPoints();
});

// Generate an initial wallpaper when the page loads
generateRandomBrightColors();
generateRandomMeshPoints();
