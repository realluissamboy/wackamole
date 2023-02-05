//Steps to completion
//Step 1: Create a scoreboard
//Step 2: Create 9 boxes within the body element
//Step 3: Modify the cursor
//Step 4: Make the mole image appear, disappear, then reappear in various boxes at random times
//Step 5: Increase the score by 1 each time the user successful wack's the mole
//Step 6: Create a countdown clock to limit the amount of time the user can play. Must have a start button of some kind to begin the countdown. I decided against it since it was too much work.

const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreboard = document.querySelector(".score span");
let score = 0;

function peekaboo() {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = "./images/classyguy.png";

  img.addEventListener("click", () => {
    score += 1;
    scoreboard.textContent = score;
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    peekaboo();
  }, 800);
}
peekaboo();

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});

// let time = 10000;
// let count_down = document.getElementById("timer");
// count_down.innerHTML = time;

// function runInterval() {
//   let timerInterval = setInterval(() => {
//     count_down -= 100;
//     count_down.innerHTML = count_down;

//     if (count_down == -100) {
//       alert("Game over!");
//       location.reload();
//     }
//   }, 100);
// }

// const startButton = document.getElementById("startbutton");

// startButton.addEventListener("click", validate);
