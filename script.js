const panels = document.querySelectorAll(".panel");

//A funciton which adds the active class of panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// A function which removes the active class of panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
