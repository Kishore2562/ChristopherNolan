// 🎠 Movie Carousel
const images = [
  { src: "img/imgnolan1.jpg", info: "Oppenheimer (2023) - The story of J. Robert Oppenheimer, the father of the atomic bomb." },
  { src: "img/imgnolan2.jpg", info: "Tenet (2020) - A CIA agent must stop an organization from using technology to alter time." },
  { src: "img/imgnolan3.jpg", info: "Dunkirk (2017) -  The story of the evacuation of Allied soldiers during World War II." },
  { src: "img/imgnolan4.jpg", info: "Interstellar (2014) -A crew embarks on a perilous journey through a wormhole in space to find a new home for humanity." },
  { src: "img/imgnolan5.jpg", info: "The Dark Knight Rises (2012) -  Bruce Wayne must make a final stand against Bane and his chaos." },
  { src: "img/imgnolan6.jpg", info: "The Dark Knight (2008) -  Batman faces the Joker in a battle of wills." },
  { src: "img/imgnolan7.jpg", info: "Inception (2010) - A thief who can steal secrets from people's dreams is hired to perform the impossible task: to implant an idea." },
  { src: "img/imgnolan8.jpg", info: "Batman Begins (2005) - Bruce Wayne returns to Gotham City to fight crime." }
];

let index = 0;

function showImage(i) {
  document.getElementById("carousel-image").src = images[i].src;
  document.getElementById("carousel-image").onclick = () => {
    alert(images[i].info);
  };
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

setInterval(nextImage, 3000);
window.onload = () => showImage(index);

// ❓ Quiz Logic
function checkAnswer(choice) {
  const result = document.getElementById("quiz-result");
  if (choice === 2) {
    result.innerHTML = `<strong>Correct!</strong> Christopher Nolan has won 2 Oscars.<br>
    <em>He has also received 2 BAFTAs, 1 Golden Globe, and awards from the Directors, Producers, and Writers Guilds of America.</em>`;
  } else {
    result.textContent = "Incorrect. Try again!";
  }
}

// 🌦️ Weather API
function getWeather() {
  const city = document.getElementById("city-input").value;
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("weather-result").innerText = 
        `Temperature: ${data.temperature}, Wind: ${data.wind}, Description: ${data.description}`;
    })
    .catch(() => {
      document.getElementById("weather-result").innerText = "Could not fetch weather data.";
    });
}
