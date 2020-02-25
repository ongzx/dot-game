export function calcDotValue(diameter) {
  return 11 - diameter * 0.1;
}

export function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateRandomNum10(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

export function removeElement(el) {
  el.classList.add("destroyed");
  setTimeout(() => {
    el.parentNode.removeChild(el);
  }, 500);
}
