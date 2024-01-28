import Notiflix from 'notiflix';

const selector = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position);
      }, delay);
    });
  } else {
    // Reject
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(position);
      }, delay);
    });
  }
}

selector.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(document.querySelector('[name="delay"]').value);
  const step = parseInt(document.querySelector('[name="step"]').value);
  const amount = parseInt(document.querySelector('[name="amount"]').value);
  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    let currentDelay = delay + step * i;
    createPromise(position, currentDelay)
      .then(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${currentDelay} ms`
        );
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${currentDelay} ms`
        );
      });
  }
});
