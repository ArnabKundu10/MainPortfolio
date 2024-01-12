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
