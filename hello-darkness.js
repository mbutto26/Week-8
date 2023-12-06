let color = 255;

let colorChange = setInterval(() => {
  if (color > 0) {
    color--;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  } else {
    clearInterval(colorChange);
  }
}, 300);
