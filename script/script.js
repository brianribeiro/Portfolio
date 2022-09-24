function drop_menu() {
    var nav = document.getElementById("nav_menu").querySelectorAll(".nav_options")
    var drop
    if (nav[0].style.display === "none") {
        for (drop = 0; drop < nav.length; drop++) {
            nav[drop].style.display = "block"
        }
    } else {
        for (drop = 0; drop < nav.length; drop++) {
            nav[drop].style.display = "none"
        }
    }
}