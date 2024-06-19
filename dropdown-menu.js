function toggleDropdown(id) {
    var content = document.getElementById(id);
    var allDropdowns = document.querySelectorAll('.dropdown-content');

    allDropdowns.forEach(function(dropdown) {
        if (dropdown !== content) {
            dropdown.style.display = 'none';
        }
    });

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

