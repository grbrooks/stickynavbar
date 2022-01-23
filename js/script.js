function myFunction() {
    document.getElementById('myDropdowns').classList.toggle('show');
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdown = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; 1 < dropdowns.length; i++) {
            let openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }

        }
    }
}