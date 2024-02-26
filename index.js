function showInfo(event) {
    document.getElementById(String(document.querySelector(".active-about").getAttribute("name"))).classList.toggle("about-menu-matter-active");
    document.querySelector(".active-about").classList.toggle("active-about");
    event.target.classList.toggle("active-about");
    document.getElementById(String(event.target.getAttribute("name"))).classList.toggle("about-menu-matter-active");
}

function OpenMenu() {
    document.querySelector("#mainMenu").style.right = "0%";
}
function CloseMenu() {
    document.querySelector("#mainMenu").style.right = "-40%";
}
