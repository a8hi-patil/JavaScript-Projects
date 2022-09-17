const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  return showWeather(data);
};
// https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png

const showWeather = (data) => {
  console.log(data);
  const time = data.sys.sunrise / 1000;
  const hour = Math.floor((time / 3600) % 24);
  const mins = Math.floor((time / 60) % 60);
  const second = Math.floor(time % 60);
  weather.innerHTML = `<div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> <br> <span>${data.weather[0].main}</span></div>
            
            <div class="info">
                <span> Temperature : ${data.main.temp} C</span><br>

                <span>Sunrise : ${hour}H:${mins}M:${second}S</span>
            </div>`;
};

form.addEventListener("submit", function (event) {
  console.log(search.value);
  getWeather(search.value);
  event.preventDefault();
});
