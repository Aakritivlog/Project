const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.hidemenu');

menuBtn.onclick = function () {
    menuList.classList.toggle('show');
};
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message submitted successfully!");
});
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.onclick = function () {
  document.body.classList.toggle("dark");
};

/* api*/
fetch("https://api.openweathermap.org/data/2.5/weather?q=Gurugram&appid=YOUR_API_KEY&units=metric")
  .then(res => res.json())
  .then(data => {
    document.getElementById("temp").innerText =
      "Temperature: " + data.main.temp + "°C";
  })
  .catch(() => {
    document.getElementById("temp").innerText = "Unable to load weather";
  });