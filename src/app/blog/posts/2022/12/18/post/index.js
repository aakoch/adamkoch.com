function run() {
const boxes = document.querySelectorAll(".box");

function transform(prop, amt, event) {
  console.log("prop=", prop, ", amt=", amt)
  Array.from(boxes).forEach(box => {
    box.dataset[prop] = parseInt(box.dataset[prop]) + amt
    box.style.transform = 'translateZ(-100px) rotateX(' + box.dataset.rotx + 'deg) rotateY(' + box.dataset.roty + 'deg) rotateZ(' + box.dataset.rotz + 'deg)'
    box.style.transitionTimingFunction = 'ease-out';
  });
  event.preventDefault()
}

document.getElementById("rotateRightLink").addEventListener("click", transform.bind(this, "roty", 90))
document.getElementById("rotateLeftLink").addEventListener("click", transform.bind(this, "roty", -90))
document.getElementById("rotateUpLink").addEventListener("click", transform.bind(this, "rotx", 90))
document.getElementById("rotateDownLink").addEventListener("click", transform.bind(this, "rotx", -90))

document.addEventListener("keypress", (event) => {
  console.log(event)
  transform("roty", Math.round(Math.random() * 200));
  transform("rotx", Math.round(Math.random() * 200));
})

let isMouseButtonDown = false;
document.addEventListener("mousedown", (event) => {
  // console.log("mouse down")
  isMouseButtonDown = true;
})
document.addEventListener("mouseup", (event) => {
  // console.log("mouse up")
  isMouseButtonDown = false;
})

function handleMouseMove(event) {
  console.log(event)
  if (event.target.type != "input" && !isMouseButtonDown)  {
    const rangeVal = parseInt(document.getElementById("mouseMoveRangeInput").value);
    const amt = 101 - rangeVal;
    console.log("amt=", amt, ", event.movementX=", event.movementX, ", event.movementY=", event.movementY);
    transform("roty", Math.round(event.movementX  / amt), event);
    transform("rotx", -Math.round(event.movementY * 2 / amt), event);
  }
}

document.getElementById("moveWith").addEventListener("change", (event) => document[event.target.checked ? "addEventListener" : "removeEventListener"]("mousemove", handleMouseMove))
}
export default run;