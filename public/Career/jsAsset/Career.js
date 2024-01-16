function careerOpen(e) {
  if (e.textContent.includes("Get")) {
    console.log(e.nextElementSibling);
    const open = e.nextElementSibling;
    open.style.animationName = "upAndDown";
    open.style.display = "flex";
    e.innerHTML = ` <b> Close Details <i class="fa-regular fa-hand-point-up"></i></b>`;
    e.style.backgroundColor = "rgba(19, 191, 19, 0.715)";
  } else {
    console.log(e.nextElementSibling);
    const open = e.nextElementSibling;
    open.style.animationName = "downAndUp";
    open.style.display = "none";
    e.innerHTML = `<b> Get Details <i class="fa-regular fa-hand-point-down"></i></b>`;
    e.style.backgroundColor = "rgba(255, 238, 0, 0.915)";
  }
}
function eduCation(e) {
  e.style.color = "red";
  console.log(e);
}
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (window.innerWidth > 770) {
    if (
      document.body.scrollTop > 900 ||
      document.documentElement.scrollTop > 900
    ) {
      document.getElementById("subCareer2").style.backgroundColor = "black";
      document.getElementById("subCareer1").style.backgroundColor =
        "transparent";
    } else {
      document.getElementById("subCareer1").style.backgroundColor = "black";
      document.getElementById("subCareer2").style.backgroundColor =
        "transparent";
    }
    const fixCareer = document.getElementsByClassName("fixCareer");

    if (
      document.body.scrollTop > 1420 ||
      document.documentElement.scrollTop > 1420
    ) {
      fixCareer[0].style.display = "none";
    } else {
      fixCareer[0].style.display = "flex";
    }
  } else {
    if (
      document.body.scrollTop > 1350 ||
      document.documentElement.scrollTop > 1350
    ) {
      document.getElementById("subCareer2").style.backgroundColor = "black";
      document.getElementById("subCareer1").style.backgroundColor =
        "transparent";
    } else {
      document.getElementById("subCareer1").style.backgroundColor = "black";
      document.getElementById("subCareer2").style.backgroundColor =
        "transparent";
    }
    const fixCareer = document.getElementsByClassName("fixCareer");
    if (
      document.body.scrollTop > 1700 ||
      document.documentElement.scrollTop > 1700
    ) {
      fixCareer[0].style.display = "none";
    } else {
      fixCareer[0].style.display = "flex";
    }
  }
}
