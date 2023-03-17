const hourHand = document.querySelector(".hour");
const minutesHand = document.querySelector(".min");
const secondsHand = document.querySelector(".sec");
const displayBox = document.querySelector(".display-time");
const displayDate = document.querySelector(".display-date");
const getTimeBtn = document.getElementById("get-time");

// const setClock = function () {
//   const time = new Date();
//   const currDate = String(time.getDate()).padStart(2, 0);
//   const secondsRatio = time.getSeconds() / 60;
//   const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
//   const hourRatio = (minutesRatio + time.getHours()) / 12;
//   setRotation(secondsHand, secondsRatio);
//   setRotation(minutesHand, minutesRatio);
//   setRotation(hourHand, hourRatio);
//   displayBox.textContent = `${String(time.getHours()).padStart(2, 0)}:${String(
//     time.getMinutes()
//   ).padStart(2, 0)} ${time.getHours() > 12 ? "PM" : "AM"}`;
//   displayDate.textContent = `${currDate}`;
// };

function getTime(zone) {
  const time = new Intl.DateTimeFormat("en-IN", {
    timeZone: zone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format();
  return time;
}

const setClock = function (
  zone,
  secondsHand,
  minutesHand,
  hourHand,
  displayBox,
  displayDate
) {
  let [hours, minutes, seconds] = getTime(zone)
    .split(":")
    .map((ele) => Number(ele));
  // console.log(hours, minutes, seconds);
  // * All the values are in 24 hour format here * //
  // ? If Hours==24 then set it to O
  hours == 24 && (hours -= 24);
  // ? Converting String Values to Numeric
  // hours = +hours;
  // minutes = +minutes;
  // seconds = +seconds;
  // const currDate = String(time.getDate()).padStart(2, 0);
  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hourRatio = (minutesRatio + hours) / 12;
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hourHand, hourRatio);
  displayBox.textContent = `${String(hours).padStart(2, 0)}:${String(
    minutes
  ).padStart(2, 0)} ${hours > 12 ? "PM" : "AM"}`;
  // displayDate.textContent = `${currDate}`;
  console.log(
    `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)} ${
      hours > 12 ? "PM" : "AM"
    }`
  );
};

// let allNum = document.querySelectorAll(".number");
// for (let num of allNum) {
//   num.style.transform = `rotate(${30 * num.innerText}deg)`;
// }
function setRotation(ele, rotationRatio) {
  ele.style.setProperty("--rotation", rotationRatio * 360);
}
// setInterval(setClock, 0);
// setClock();

const zone_selected = document.getElementById("Zone");
const selected_text = document.getElementById("selected-text");
zone_selected.addEventListener("change", function (e) {
  // selected_text.textContent = zone_selected.value;
  // e.preventDefault();
  selected_text.textContent = "You select " + this.value;

  console.log(this.value);
});
//

// ! Handling the Get time button

getTimeBtn.addEventListener("click", function () {
  setTime(zone_selected.value);
});
// setTime(zone_selected.value);
function setTime(zone) {
  // setInterval(
  //   setClock,
  //   3000,
  //   zone,
  //   secondsHand,
  //   minutesHand,
  //   hourHand,
  //   displayBox,
  //   displayDate
  // );
  setIntervalSynchronous(
    setClock,
    0,
    zone,
    secondsHand,
    minutesHand,
    hourHand,
    displayBox,
    displayDate
  );
}

// document.getElementById("selected-text").textContent = zone_selected;

// *Function to call setInterval synchronously
var setIntervalSynchronous = function (func, delay) {
  var intervalFunction, timeoutId, clear;
  // Call to clear the interval.
  clear = function () {
    clearTimeout(timeoutId);
  };
  intervalFunction = function () {
    func();
    timeoutId = setTimeout(intervalFunction, delay);
  };
  // Delay start.
  timeoutId = setTimeout(intervalFunction, delay);
  // You should capture the returned function for clearing.
  return clear;
};

const selected = document.querySelector("#Zone");
selected.addEventListener("change", function () {
  console.log("Something is selected now in list");
});
