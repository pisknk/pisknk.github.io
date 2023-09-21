document.addEventListener('DOMContentLoaded', function() {
    var titlebar = document.getElementById('titlebar');
    var initialOffset = titlebar.offsetTop;

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > initialOffset + 20) {
            titlebar.style.position = 'fixed';
            titlebar.style.top = '20px';
            titlebar.style.left = '50%';
            titlebar.style.transform = 'translateX(-50%)';
            titlebar.style.zIndex = '999'; // Set a higher z-index to keep it on top
        } else {
            titlebar.style.position = 'absolute';
            titlebar.style.top = initialOffset + 'px';
            titlebar.style.left = '50%';
            titlebar.style.transform = 'translateX(-50%)';
            titlebar.style.zIndex = '0'; // Reset the z-index
        }
    });
});
