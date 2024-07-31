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
  myFunction1();
};
function myFunction1() {
  const navItem = document.getElementById("NavContainer");
  console.log(navItem);
  // console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    console.log("check<100");
    navItem.style.background =
      "linear-gradient(to right, rgba(120, 118, 118, 0.92), rgba(0, 0, 0, 0.863),rgba(120, 118, 118, 0.92))";
  } else {
    console.log("check>100");
    navItem.style.background = "none";
    navItem.style.backgroundColor = "transparent";
  }
}
