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
/* function Item(event) {
  e.preventDefault();
  e.stopPropagation();
} */
document.getElementById("ItemRow").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked!");
    console.log(event); // Access event object
  } else if (event.target.tagName === "A") {
    console.log("Anchor clicked!");
    console.log(event); // Access event object
    event.stopPropagation(); // Optionally stop event propagation
  }
});
