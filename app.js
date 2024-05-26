
let form = document.querySelector("#wheather-form");
let myInput = document.querySelector("#my-input");
const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";

/* Api data ko show krwany ky liye kuch element ko select kiya hai */
let temp = document.querySelector("#citytemp");
let humidity = document.querySelector("#cityhumidity");
let wind = document.querySelector("#citywind");
let cityPrecipitation = document.querySelector("#city_precipitation");
let cityFeels = document.querySelector("#city_feelslike");
//let mybutton = document.querySelector("#my-button");

 const formHandler = async (event) => {

   event.preventDefault(); //is se page referesh nhi hota

   let city_temperature = myInput.value;

   const response = await axios( `https://api.openweathermap.org/data/2.5/weather?q=${city_temperature}&appid=${API_KEY}&units=metric`);
   console.log(response);
};

form.addEventListener("submit", formHandler)