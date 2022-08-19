import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const form = document.querySelector('.form');

function createPromise(position, delay) {
     const shouldResolve = Math.random() > 0.3;
   return new Promise((resolve, rejekt) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({position,delay})
      }
      else rejekt({position,delay})
    },delay);
  })
};

form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
});