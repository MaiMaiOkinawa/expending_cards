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

// const sounds = ["Train", "Truck"];

// sounds.forEach((sound) => {
//   // Creates sound buttons
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   // Name each buttons of sounds as it loops
//   btn.innerText = sound;

//   btn.addEventListener("click", () => {
//     // Adding a fnc pauses songs
//     stopSongs();

//     // This plays the song
//     document.getElementById(sound).play();
//   });

//   document.getElementById("buttons").appendChild(btn);
// });
