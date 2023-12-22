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

