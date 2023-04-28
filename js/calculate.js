const calculate = () => {
  const currentDot = objects[Math.floor(Math.random() * objects.length)]; 
  const object = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  object.setAttributeNS(null, "cx", currentPosition.x + (currentDot.cx.animVal.value - currentPosition.x) / 2);
  object.setAttributeNS(null, "cy", currentPosition.y + (currentDot.cy.animVal.value - currentPosition.y) / 2);
  object.setAttributeNS(null, "r", 3);
  object.setAttributeNS(null, "fill", "green");
  object.classList.add('dot');
  dotsHTML.appendChild(object);
  dots.push(object);
  currentPosition = {x: object.cx.animVal.value, y: object.cy.animVal.value};
}

const calcAnim = () => {
  calculate();
  count++;
  countHTML.innerHTML = count;
  


  setTimeout(() => {
    calcAnim();
  }, 10)
}