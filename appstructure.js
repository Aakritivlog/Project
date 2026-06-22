const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.hidemenu');

menuBtn.onclick = function () {
    menuList.classList.toggle('show');
};
document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message submitted successfully!");
});

const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }
});

/* api*/
fetch("https://api.openweathermap.org/data/2.5/weather?q=Gurugram&appid=ed8efe9c4202b10263467718556cc634&units=metric")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    document.getElementById("temp").innerText =
      "Temperature: " + data.main.temp + "°C";
  })
  .catch(error => {
    console.log(error);
    document.getElementById("temp").innerText =
      "Unable to load weather";
  });
