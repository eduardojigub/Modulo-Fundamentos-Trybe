var penColor = 'black';
function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

function setPenColor(pen) {
  penColor = pen;
};

function colorSelect(event) {
 const select = document.querySelector('.selected');
 select.classList.remove('selected');
 event.target.classList.add('selected');
}

const allPixels = document.querySelectorAll('.pixel');
function clearBoard() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}
const click = document.getElementById('clear-board');
click.addEventListener('click', allPixels);