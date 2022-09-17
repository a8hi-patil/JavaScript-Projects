const endDate = "17 September 2022 04:11 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.getElementsByClassName("inputs");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  //   console.log(end);
  console.log(now);
  const diff = (end - now) / 1000;
  if (diff < 0) {
    inputs[0].innerHTML = "Yaye !";
    inputs[1].innerHTML = "Yaye !";
    inputs[3].innerHTML = "Yaye !";
    inputs[2].innerHTML = "Yaye !";
    clearInterval(myInterval);
  } else {
    inputs[0].innerHTML = Math.floor(diff / 3600 / 24); //days
    inputs[1].innerHTML = Math.floor((diff / 3600) % 24); //hous
    inputs[2].innerHTML = Math.floor((diff / 60) % 60); //mins
    inputs[3].innerHTML = Math.floor(diff % 60); //sec
  }

  ///converting into days
};
const myInterval = setInterval(() => {
  clock();
}, 1000);
