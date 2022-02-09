const dark = document.getElementById("btnDark");
btnDark.addEventListener("click", function () {
  const html = document.getElementsByTagName("html")[0];
  html.classList.toggle("dark");
});

const ham = document.querySelector("#hamburger");
ham.addEventListener("click", function () {
  const mobile = document.querySelector("#mobile");
  mobile.classList.toggle("hidden");
});
