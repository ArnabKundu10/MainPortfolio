/* function func1(e) {
  e.preventDefault();

  console.log(e);
} */
const ex = document.getElementById("myLink");
if (ex) {
  ex.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
  });
} else {
  console.log("there is an error");
}
