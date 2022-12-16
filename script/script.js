var screen_guardian = setInterval(fix_menu, 100)

function fix_menu() {
    var screen = document.body.clientWidth
    var nav = document.getElementById("nav_menu").querySelectorAll(".nav_options")
    var drop

    if (screen > 1080) {
        for (drop = 0; drop <nav.length; drop++) {
            nav[drop].style.display = "inline-block"
        }
    } else {
        if (nav[0].style.display === "inline-block") {
            for (drop = 0; drop < nav.length; drop++) {
                nav[drop].style.display = "none"
            }
        }
    }
}

drop_menu()
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

