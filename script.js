const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const updateCountDown = (deadline) =>{
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;  // mili seconds
  // console.log(timeDifference);  
  let calSecs = Math.floor(timeDifference/1000 % 60);
  // console.log(calSecs);
  let calMins = Math.floor(timeDifference/1000/60 % 60);
  // console.log(calMins);
  let calHours = Math.floor(timeDifference/1000/60/60 % 24);
  // console.log(calHours);
  let calDays = Math.floor(timeDifference/1000/60/60/24);
  // console.log(calDays);  

  secs.innerText = calSecs<10 ? `0${calSecs}` : `${calSecs}`;
  mins.innerText = calMins<10 ? `0${calMins}` : `${calMins}`;
  hours.innerText = calHours<10 ? `0${calHours}` : `${calHours}`;
  days.innerText = calDays<10 ? `0${calDays}` : `${calDays}`;
}

const countDown = (targetDate) => {
  setInterval(()=> updateCountDown(targetDate), 1000);
};

let targetDate = new Date("October 01 2025 00:01");
// console.log(targetDate);
countDown(targetDate);

