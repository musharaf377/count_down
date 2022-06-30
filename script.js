const daysBox = document.querySelector(".days");
const hourBox = document.querySelector(".hour");
const minBox = document.querySelector(".minute");
const secondBox = document.querySelector(".second");

const eidul_fitur = "10 jul 2022";

let count_down = () =>{

  let eid_day = new Date(eidul_fitur);
  let current_time = new Date();

  let total_time = (eid_day - current_time)/1000;
  let day = Math.floor(total_time/3600/24);
  let hour = Math.floor(total_time / 3600) % 24;
  let minute = Math.floor((total_time / 60) % 60);
  let second = Math.floor(total_time % 60);


  let current_day = day < 10 ? "0" + day : day;
  let current_hour = hour < 10 ? "0" + hour : hour;
  let current_minute = minute < 10 ? "0" + minute : minute;
  let current_second = second < 10 ? "0" + second : second;

  daysBox.innerText   = current_day;
  hourBox.innerHTML   = current_hour;
  minBox.innerHTML    = current_minute;
  secondBox.innerHTML = current_second;

  console.log(new Date());
}
setInterval(count_down,1000);
count_down();