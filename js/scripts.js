const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theBtn');

console.log('Hello, world!');




btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
} )


//import { review } from '../data/review.js';
//console.log(review);

//const myTarget = document.querySelector('#review');

//for (let x = 0; x < review.length; x++) {
//let barCap = document.createElement('figcaption')
//barCap.innerHTML = `<h3>${review[x].name}</h3> <br> ${review[x].rate} <br> <p>${review[x].comment}</p> <br> <p>${review[x].date}</p>`


//myTarget.appendChild(barCap);
//}// end of loop

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //autoplay
    autoplay: {
        delay: 5000,
    }

  });


const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();
