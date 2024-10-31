let accordionElement = document.querySelectorAll<HTMLElement>(".accordion");

accordionElement.forEach((accordion) => {
  const toggleActive = () => {
    accordion.classList.toggle("active");
  };

  accordion.addEventListener("click", toggleActive);
});
