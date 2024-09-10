var accordion_s = document.querySelectorAll(".accordion");
accordion_s.forEach(function (accordion) {
  var active = function () {
    accordion.classList.toggle("active");
  };
  accordion.addEventListener("click", active);
});
