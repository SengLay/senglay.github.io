function loadTab(page, element) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('tab-content').innerHTML = data;
            // Highlight the selected tab
            document.querySelectorAll('.nav-box').forEach(navItem => {
                navItem.classList.remove('active');
            });
            element.classList.add('active');
        })
        .catch(error => console.error('Error:', error));
}
