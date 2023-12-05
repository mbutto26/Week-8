let color = 255;

let darkColor = setInterval(() => {
  if (color > 0) {
    color--;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  } else {
    clearInterval(darkColor);
  }
}, 300);
