inputDiv = document.createElement("div");
inputDiv.className = "input";
newInput = document.createElement("input");
newInput.type = "text";
newInput.className = "inputValue";
newInput.placeholder = "Enter Location";
newButton = document.createElement("button");
newButton.className = "button";
newP = document.createElement("p")
name_of_button = document.createTextNode("Press")
newP.appendChild(name_of_button)
newButton.appendChild(newP)
inputDiv.append(newInput, newButton)
let currentDiv = document.querySelector(".container")
currentDiv.append(inputDiv)

secondDiv = document.createElement("div");
secondDiv.className = "displayWeather";
secondH1 = document.createElement("h1")
secondH1.className = "temp";
let name_of_h = document.createTextNode("----°C");
secondH1.appendChild(name_of_h);
secondP = document.createElement("p");
secondP.className = "desc";
let name_of_p = document.createTextNode("----°C");
secondP.appendChild(name_of_p);
secondDiv.append(secondH1, secondP);
currentDiv.appendChild(secondDiv);

newButton.addEventListener('click', function(){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newInput.value}&appid=79996d4c6895e03666143da2826e7b87`)
.then(response => response.json())
.then(displayData); 
});

const displayData = (weather) => {
secondH1.innerHTML = `${Math.round(weather.main.temp - 273,15)}°C`;
secondP.innerHTML = weather.weather[0].main;
}





