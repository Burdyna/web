document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.querySelector('.filter-button');
    const filterDropdown = document.getElementById('filterDropdown');
    const profileButton = document.querySelector('.profile-button');
    const profileDropdown = document.getElementById('profileDropdown');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    // Toggle the filter dropdown
    filterButton.addEventListener('click', function(event) {
        event.stopPropagation();
        filterDropdown.style.display = (filterDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Toggle the profile dropdown
    profileButton.addEventListener('click', function(event) {
        event.stopPropagation();
        profileDropdown.style.display = (profileDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function(event) {
        if (!filterButton.contains(event.target)) {
            filterDropdown.style.display = 'none';
        }
        if (!profileButton.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    });

    // Toggle the sidebar
    sidebarToggle.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            sidebarToggle.style.left = '0';
        } else {
            sidebar.classList.add('open');
            sidebarToggle.style.left = '290px';
        }
    });

    // Sorting posts by date
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const sortDirection = this.dataset.sort;
            sortPosts(sortDirection);
            filterDropdown.style.display = 'none';
        });
    });

    function sortPosts(direction) {
        const postContainer = document.querySelector('.labels');
        const posts = Array.from(postContainer.querySelectorAll('.post-item'));
        posts.sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            return direction === 'asc' ? dateA - dateB : dateB - dateA;
        });
        postContainer.innerHTML = '';
        posts.forEach(post => postContainer.appendChild(post));
    }
});
