window.onload = function() {
    var profiles = document.getElementsByClassName("profile");

    for (var i = 0; i < profiles.length; i++) {
        profiles[i].addEventListener("mouseover", effectOn);
        profiles[i].addEventListener("mouseout", effectOff);
        profiles[i].addEventListener("click", editTitle);
    }
};
var editTitle = function(e) {

    var titleElement = this.nextElementSibling.nextElementSibling;

  
    var newTitle = prompt("Enter a new title for " + this.nextElementSibling.textContent + ":");

    if (newTitle) {
        titleElement.textContent = newTitle;
    }
};

function effectOn() {
    this.classList.add("highlighted");
}


function effectOff() {
    this.classList.remove("highlighted");
}
