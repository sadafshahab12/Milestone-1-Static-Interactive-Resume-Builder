var accordionElement = document.querySelectorAll(".accordion");
accordionElement.forEach(function (accordion) {
    var toggleActive = function () {
        accordion.classList.toggle("active");
    };
    accordion.addEventListener("click", toggleActive);
});
