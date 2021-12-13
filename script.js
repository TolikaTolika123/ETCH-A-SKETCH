const r = document.querySelector(':root');
const btn = document.querySelector('.clearing__button');
const grid = document.querySelector('.grid');

let num = 16;

for (let i = 0; i < num ** 2; i++) {
  grid.innerHTML += '<div class="pixel"></div>';
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
  pixel.style.width = 800 / num + 'px';
  pixel.style.height = 800 / num + 'px';
  pixel.addEventListener('mouseover', () => {
    pixel.classList.add('colored')
  })
})


btn.addEventListener('click', () => {
  num = Math.min(Math.max(+prompt('Enter resoultion (from 1 to 40)', 16), 1), 40);
  r.style.setProperty('--pixel-column', num);

  grid.innerHTML = '';
  for (let i = 0; i < num ** 2; i++) {
    grid.innerHTML += '<div class="pixel"></div>';
  }

  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach(pixel => {
    pixel.style.width = 800 / num + 'px';
    pixel.style.height = 800 / num + 'px';
    pixel.addEventListener('mouseover', () => {
      pixel.classList.add('colored')
    })
  })
})