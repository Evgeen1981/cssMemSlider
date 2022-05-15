import list from './list.js';

const sliderImg = document.querySelector('.slider__img');
const sliderText = document.querySelector('.slider__text');
const sliderControls = document.querySelector('.slider__controls');
const sliderControl = document.querySelectorAll('.slider__control');

function changeContent() {
  sliderControls.addEventListener('click', (event) => {
    sliderControl.forEach(btn => {
      btn.classList.remove('slider__control--active');
    })
    event.target.classList.add('slider__control--active');
    const num = event.target.dataset.num;
    sliderImg.src = `${list[num - 1]["img"]}`;
    sliderText.textContent = `${list[num - 1]["text"]}`;
  })
}

changeContent();