const hourHand = document.querySelector(".hour");
const minutesHand = document.querySelector(".min");
const secondsHand = document.querySelector(".sec");
const displayBox = document.querySelector(".display-time");
const displayDate = document.querySelector(".display-date");
let allNum = document.querySelectorAll(".number");

const setClock = function () {
  const time = new Date();
  const currDate = String(time.getDate()).padStart(2, 0);
  const secondsRatio = time.getSeconds() / 60;
  const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
  const hourRatio = (minutesRatio + time.getHours()) / 12;
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hourHand, hourRatio);
  displayBox.textContent = `${String(time.getHours()).padStart(2, 0)}:${String(
    time.getMinutes()
  ).padStart(2, 0)} ${time.getHours() > 12 ? "PM" : "AM"}`;
  displayDate.textContent = `${currDate}`;
};

// for (let num of allNum) {
//   num.style.transform = `rotate(${30 * num.innerText}deg)`;
// }
function setRotation(ele, rotationRatio) {
  ele.style.setProperty("--rotation", rotationRatio * 360);
}
setInterval(setClock, 0);
setClock();
