const searchForm = document.querySelector(".search-form");
const navBar = document.querySelector(".navBar");

document.getElementById("search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navBar.classList.remove("active");
};

document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
  searchForm.classList.remove("active");
};
