let rgb = 0;
const animate = () => {
  if (rgb < 255) {
    rgb++;
    document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
  }
  requestAnimationFrame(animate);
};
requestAnimationFrame(animate, 3000);

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
