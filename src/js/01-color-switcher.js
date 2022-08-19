function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
    bodyEl: document.body,
    startEl: document.querySelector('button[data-start]'),
    stopEl: document.querySelector('button[data-stop]'),
};
const COLOR_CHANGE_TIME = 1000;
// const startEl = document.querySelector('button[data-start]');
// const stopEl = document.querySelector('button[data-stop]');
// const COLOR_CHANGE_TIME = 1000;
const colorBtnEl = refs.startEl.addEventListener('click', onChengeColorBtn);
const colorStopBtnEl = refs.stopEl.addEventListener('click',colorStopBnt);
let intervalId = null;

function onChengeColorBtn() {
 intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startEl.disabled = true;
};

function colorStopBnt() {
     clearInterval(intervalId);
    refs.startEl.disabled = false;
}
    


    
    



