let accordion_s = document.querySelectorAll(".accordion");

accordion_s.forEach((accordion) => {
  const active = () => {
    accordion.classList.toggle("active");
  };

  accordion.addEventListener("click", active);
});

