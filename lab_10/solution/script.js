const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");

const showDateTime = () => {
  const date = new Date();
  let todayDate = `${date.getFullYear()} / ${
    date.getMonth() + 1
  } / ${date.getDate()}`;
  let todayTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  currentDate.textContent = todayDate;
  currentTime.textContent = todayTime;
};

setInterval(showDateTime, 1000);
