import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from "notiflix";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

refs = {
    inputEl: document.querySelector('#datetime-picker'),
    BtnEl: document.querySelector('button[data-start]'),
    dataDaysEl: document.querySelector('[data-days]'),
    dataHoursEl: document.querySelector('[data-hours]'),
    dataMinutesEl: document.querySelector('[data-minutes]'),
    dataSecondsEl: document.querySelector('[data-seconds]')
};
let interval = null;

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     if (selectedDates[0].getTime() - Date.now() <= 0) {
            Notify.warning('Please choose a date in the future');
            ref.BtnEl.setAttribute('disabled', 'disabled');
            return;
        }
        refs.BtnEl.removeAttribute('disabled');
    },
};

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
};




refs.BtnEl.addEventListener('click', handleStartData);


function handleStartData() {
    refs.BtnEl.setAttribute('disabled', 'true');
    refs.inputEl.setAttribute('disabled', 'true');
    const date = new Date(refs.inputEl.value).getTime();
    interval = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(date - Date.now());

        refs.dataDaysEl.textContent = addLeadingZero(days);
        refs.dataHoursEl.textContent = addLeadingZero(hours);
        refs.dataMinutesEl.textContent = addLeadingZero(minutes);
        refs.dataSecondsEl.textContent = addLeadingZero(seconds);
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
            Notify.success('end');
            refs.BtnEl.removeAttribute('disabled');
            refs.inputEl.removeAttribute('disabled');
        }
    }, 1000);
};
flatpickr('#datetime-picker', options);