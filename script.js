// take notes you forgetful bitch...
// sidebar toggle functionality

const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

// function to close the sidebar
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show-sidebar');
}

const closeSidebarButton = document.getElementById('close-sidebar');
closeSidebarButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeSidebar();
});

// link and platter images references
const exploreLink = document.querySelector('.explore-link');
const platterImages = document.querySelectorAll('.platter1, .platter2, .platter3, .platter4');
const exploreText = document.querySelector('.explore-link h6');

const imagesWithLinks = [
    { src: 'images/platter5.png', link: 'https://example.com/link1' },
    { src: 'images/platter6.png', link: 'https://pisknk.github.io/vent/' },
    { src: 'images/platter7.png', link: 'https://pisknk.github.io/genza/genza.html' },
    { src: 'images/platter8.png', link: 'https://pisknk.github.io/poems/574195/' }
];

// initial image URLs
const originalImageSrc = [
    'images/platter1.png',
    'images/platter2.png',
    'images/platter3.png',
    'images/platter4.png'
];

// text replacements
const newText = {
    explore: 'EXPLORE BETA PROJECTS',
    goBack: '  GO BACK TO RELEASES'
};

let isExploreState = true;

// function to handle clicking on "EXPLORE BETA PROJECTS" link
exploreLink.addEventListener('click', (event) => {
    event.preventDefault();

    // switch back to orig
    platterImages.forEach((image, index) => {
        image.src = isExploreState ? imagesWithLinks[index].src : originalImageSrc[index];
        if (image.parentNode.tagName.toLowerCase() === 'a') {
            image.parentNode.href = isExploreState ? imagesWithLinks[index].link : '#';
        }
    });

    exploreText.textContent = isExploreState ? newText.goBack : newText.explore;

    isExploreState = !isExploreState;
});

// dark or light theming

let isDarkMode = false;

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const darkModeText = document.querySelector('#dark-mode-toggle span');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (isDarkMode) {
        darkModeToggle.innerHTML = '🌙 Dark Mode';
    } else {
        darkModeToggle.innerHTML = '☀️ Light Mode';
    }

    isDarkMode = !isDarkMode;
});