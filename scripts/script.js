const searchInput = document.querySelector("input[type=text]");
const searchIcon = document.querySelector(".fa-search");

searchInput.addEventListener("focus", selectIcon);
searchInput.addEventListener("blur", selectIcon);

function selectIcon(e) {
  searchIcon.classList.toggle("blue-color");
  console.log(this);
}
