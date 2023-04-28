let device = "pc"; //* mobile | pc

let count = 0;
const countHTML = document.querySelector('.count');
const modalLine = document.querySelector('.lineValueModal');
const valueBtn = document.querySelector('.valueBtn');
const inputLine = document.querySelector('#inputLine');
const next = document.querySelector('.btn');
const task = document.querySelector('.text');

const canvas = document.querySelector('.svgCanvas');
const mainCanvas = document.querySelector('.canvas');
const circles = document.querySelector('.circles');
const dotsHTML = document.querySelector('.dots');

let objects = [];
let dots = [];

let stage = "objects"; // objects | ribs | completion 
let currentObject = null; // chosen object as start pos
let currentPosition
const taskTexts = {
  objects: `1. Locate objects on canvas`,
  position: `2. Select start position`,
  completion: ``,
}
task.innerHTML = taskTexts[stage];

let scheme = [];

addEventListener('click', (event) => {
  if (event.target === next) {
    if (stage == "objects") {
      stage = "position";
      task.innerHTML = taskTexts[stage];
      next.disabled = true;
    }
    else if(stage == "position") {
      stage = "completion";
      next.innerHTML = "again";
      setTimeout(() => { // waiting for anim end
        calcAnim(0);  // first element [0]
      }, 1000)  
    }
    else if (stage == "completion") {
      window.location.reload();
    }
  }
})
