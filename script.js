// &-----------------HTML ELEMENTS --------------
const panels = document.querySelectorAll(".panel");
const panelsArray = [...panels];
// &-----------------FUNCTIONS---------------
function removeActiveClass() {
  panelsArray.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// &-----------------EVENTS-------------------
panelsArray.forEach((panel) => {
  removeActiveClass();
  panel.addEventListener("click", function () {
    panel.classList.add("active");
  });
});

panelsArray.forEach((panel) => {
  panel.addEventListener("dblclick", function () {
    panel.classList.remove("active");
  });
});
