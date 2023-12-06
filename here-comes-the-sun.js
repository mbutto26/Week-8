let rgb = 0;
const animate = function () {
  rgb++;
  if (rgb < 255) {
    const color = `rgb(${rgb}, ${rgb} ${rgb})`;
    document.body.style.backgroundColor.transform = color;
    requestAnimationFrame(animate);
  }
};
requestAnimationFrame(animate);

/*let x = 0;
const animate = function () {
  x++;
  if (x < window.innerWidth) {
    const transfrm = `translateX(${x}px)`;
    imgEl.style.transform = transfrm;
    requestAnimationFrame(animate);
  }
};
requestAnimationFrame(animate);



let color = 255;

let colorChange = setInterval(() => {
  if (color > 0) {
    color--;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  } else {
    clearInterval(colorChange);
  }
}, 300);
*/
