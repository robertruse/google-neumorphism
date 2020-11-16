/* Search icon */
const searchInput = document.querySelector("input[type=text]");
const searchIcon = document.querySelector(".fa-search");

searchInput.addEventListener("focus", selectIcon);

searchInput.addEventListener("blur", selectIcon);

function selectIcon(e) {
  searchIcon.classList.toggle("blue-text");
}

/* Menu */
const menuItem = document.querySelector("#menu");
const menuButton = document.querySelector("#btn-menu");

menuButton.addEventListener("click", selectMenu);

function selectMenu(e) {
  menuItem.classList.toggle("show");
  this.classList.toggle("btn-up-on");
}

/* Dark mode */
const htmlItem = document.querySelector("html");
const buttonDark = document.querySelector("#btn-dark");

buttonDark.addEventListener("click", selectButton);

function selectButton(e) {
  htmlItem.classList.toggle("dark-mode");
  this.classList.toggle("btn-up-on");
  //this.firstElementChild.classList.toggle("blue-text");
}
