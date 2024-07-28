window.onscroll = function () {
  myFunction();
};
function myFunction() {
  const navItem1 = document.querySelectorAll(".QuotesLine1");
  const navItem2 = document.querySelectorAll(".QuotesLine2");
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    navItem1.forEach((element) => {
      element.style.animation = "4s linear 1s infinite alternate rotateMotto1";
    });
    navItem2.forEach((element) => {
      element.style.animation = "4s linear 1s infinite alternate rotateMotto2";
    });
  }
}
