/* function func1(e) {
  e.preventDefault();

  console.log(e);
} */
function NavButton(e) {
  const itemColumn = document.getElementById("ItemColumn");
  if (itemColumn.style.display === "none") {
    itemColumn.style.display = "flex";
  } else {
    itemColumn.style.display = "none";
  }
}

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  const navItem = document.getElementById("NavContainer");
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navItem.style.background =
      "linear-gradient(to right, rgba(120, 118, 118, 0.92), rgba(0, 0, 0, 0.863),rgba(120, 118, 118, 0.92))";
  } else if (
    document.body.scrollTop < 100 ||
    document.documentElement.scrollTop < 100
  ) {
    navItem.style.background = "none";
    navItem.style.backgroundColor = "transparent";
  }
}
