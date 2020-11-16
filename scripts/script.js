/* Dark mode */
// Toggle the .dark-mode class to the html element and change the inner text of the #btn-dark button
const htmlItem = document.querySelector("html");
const buttonDark = document.querySelector("#btn-dark");
const buttonText = document.querySelector("#btn-dark span");

buttonDark.addEventListener("click", selectButton);

function selectButton(e) {
  htmlItem.classList.toggle("dark-mode");
  isClicked();
}

function isClicked() {
  if (buttonText.innerText == "Dark Mode") {
    buttonText.innerText = "Light Mode";
  } else {
    buttonText.innerText = "Dark Mode";
  }
}

/* Menu */
// Toggle .show class to #menu div when #btn-menu is clicked
const menuCard = document.querySelector("#menu");
const menuButton = document.querySelector("#btn-menu");

menuButton.addEventListener("click", selectMenu);

function selectMenu(e) {
  menuCard.classList.toggle("show");
  this.classList.toggle("btn-up-on");
}

// Remove the .show class from #menu and #btn-menu divs if mouse click is outside of div
document.addEventListener("click", closeMenu);

function closeMenu(e) {
  const isMenuCard = e.target.closest("#menu");
  const isMenuButton = e.target.closest("#btn-menu");
  if (!isMenuCard && !isMenuButton) {
    menuCard.classList.remove("show");
    menuButton.classList.remove("btn-up-on");
  }
}

/* Search icon */
// Toggle the .blue-text class to the .fa-search icon when text input is in focus/blur
const searchInput = document.querySelector("input[type=text]");
const searchIcon = document.querySelector(".fa-search");

searchInput.addEventListener("focus", selectIcon);

searchInput.addEventListener("blur", selectIcon);

function selectIcon(e) {
  searchIcon.classList.toggle("blue-text");
}
