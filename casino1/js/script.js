function displayToConsole() {
    var toConsole = "",
    fields = this.parentNode.getElementsByClassName("console");
    for (var i = 0; i < fields.length; i++) {
        toConsole += fields[i].id + " " + fields[i].value + "; ";
    }
    console.log(toConsole);
}
    var toggled = 0;
function showMenu () {
    var dropdown = document.getElementById("dropdown");
    if (toggled == 0) {
        dropdown.className += " adaptive";
        dropdown.style.display = "block";
        toggled = 1;
    }
    else {
        dropdown.style.display = "none";
        toggled = 0;
    }
}

document.getElementById("submit").onclick = displayToConsole;
document.getElementById("menu").onclick = showMenu;
