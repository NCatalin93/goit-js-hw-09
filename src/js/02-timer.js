import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const selector = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');

let setDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setDate = selectedDates[0];
    if (setDate < new Date()) {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr(selector, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
startButton.addEventListener('click', () => {
  const timeFrame = setInterval(() => {
    const remainingTime = setDate.getTime() - new Date().getTime();
    if (remainingTime <= 0) {
      clearInterval(timeFrame);
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      document.querySelector('[data-days]').textContent = addLeadingZero(
        days,
        2
      );
      document.querySelector('[data-hours]').textContent = addLeadingZero(
        hours,
        2
      );
      document.querySelector('[data-minutes]').textContent = addLeadingZero(
        minutes,
        2
      );
      document.querySelector('[data-seconds]').textContent = addLeadingZero(
        seconds,
        2
      );
    }
  }, 1000);
});
