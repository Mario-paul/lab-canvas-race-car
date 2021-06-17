const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

class Road {
  constructor(img, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}

// class Car extends Road {
//   constructor(img,x,y,w,h){
//     super(img,x,y,w,h);
//   }
//   draw = () => {
//     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//   };
// }

// setInterval(function () {

//   // let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
//   let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//   //Create new obstacle with random height
//   let obs = new Obstacle(canvas.width, Math.random() * canvas.height, 40, 40, color)

//   //Push that obstacle into the array
//   obstacles.push(obs)

// }, 1000)

//Input detection
// window.onkeydown = function (e) {
//   if (e.key === 'ArrowLeft') {
//       lichking.x -= 10
//   }
//   if (e.key === 'ArrowRight') {
//       lichking.x += 10
//   }
//   if (e.key === 'ArrowUp') {
//       lichking.y -= 10
//   }
//   if (e.key === 'ArrowDown') {
//       lichking.y += 10
//   }
// }

//Collision detection
// function detectCollision(rect1, rect2) {
//   if (rect1.x < rect2.x + rect2.w &&
//       rect1.x + rect1.w > rect2.x &&
//       rect1.y < rect2.y + rect2.h &&
//       rect1.y + rect1.h > rect2.y) {
//       // collision detected!
//       console.log("collision")
//       cancelAnimationFrame(animatedId)
//   }
// }

//Create roadImg and road object
let roadImg = new Image();
roadImg.src = "../images/road.png";
let road = new Road(roadImg, 0, 0, canvas.width, canvas.height);

//Create carImg and car object
let carImg = new Image();
carImg.src = "../images/car.png";
let car = new Road(carImg, canvas.width / 2, canvas.height - 319, 63, 127); //2.5 times smaller than original PNG file

function animate() {
  //Game engine, Flip book
  let animatedId = null;
  animatedId = requestAnimationFrame(animate);

  //Clear entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Road
  road.draw();

  //Car
  car.draw();

  //Loop through array and draw each obstacle one at a time
  //   for (let obs of obstacles) {
  //     obs.move()
  //     detectCollision(obs, lichking)
  // }
}

//Start game
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    console.log("Start button clicked!");
    startGame();
  };

  function startGame() {
    console.log("startGame() function called!");
    animate();
  }
};
