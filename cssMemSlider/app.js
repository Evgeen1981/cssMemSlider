import list from './list.js';

const sliderImg = document.querySelector('.slider__img');
const sliderText = document.querySelector('.slider__text');
const sliderControls = document.querySelector('.slider__controls');
const sliderControl = document.querySelectorAll('.slider__control');

function changeContent() {
  sliderControls.addEventListener('click', (event) => {
    const num = event.target.dataset.num;
    sliderControl.forEach(btn => {
      btn.classList.remove('slider__control--active', 'animation');
    })

    event.target.classList.add('slider__control--active');
    sliderImg.classList.add('animation__back');

    setTimeout(() => {

      sliderImg.classList.add('animation');
      sliderImg.classList.remove('animation__back');
    }, 1000);

    setTimeout(() => {
      sliderImg.src = `${list[num - 1]["img"]}`;
      sliderText.textContent = `${list[num - 1]["text"]}`;
    }, 1000);


    sliderImg.classList.remove('animation');
  })

}

changeContent();