window.onload = function() {
    loadTab('home.html');
};

function loadTab(page, element) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('tab-content').innerHTML = data;
            // Highlight the selected tab
            if (element) {
                document.querySelectorAll('.nav-box').forEach(navItem => {
                    navItem.classList.remove('active');
                });
                element.classList.add('active');
            }
            // Check if the clicked tab is the portfolio
            if (page === 'portfolio.html') {
                document.querySelector('header').innerHTML = ''; // Clear the content of main
            }
            if (page === 'portfolio.html') {
                document.querySelector('head').innerHTML = ''; // Clear the content of main
            }
        })
        .catch(error => console.error('Error:', error));
}
