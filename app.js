
let form = document.querySelector("#weatherForm");
let myInput = document.querySelector("#my-input");
const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";

/* Api data ko show krwany ky liye kuch element ko select kiya hai */
let temp = document.querySelector("#cityTemp");
let humidity = document.querySelector("#cityHumidity");
let wind = document.querySelector("#cityWind");
let cityPrecipitation = document.querySelector("#city_Precipitation");
let cityFeels = document.querySelector("#city_FeelsLike");
//let mybutton = document.querySelector("#my-button");

 const formHandler = async (event) => {
 try{
  event.preventDefault(); //is se page referesh nhi hota

   let city_temperature = myInput.value;
   temp.innerText = "loading...";

   const response = await axios( `https://api.openweathermap.org/data/2.5/weather?q=${city_temperature}&appid=${API_KEY}&units=metric`);
   temp.innerText = `${response.data.main.temp}°C`;
   humidity.innerText = `${response.data.main.temp}°C`;
   wind.innerText = `${response.data.main.temp}°C`;
   cityPrecipitation.innerText = `${response.data.main.temp}°C`;
   cityFeels.innerText = `${response.data.main.temp}°C`;
   console.log(response);

 }catch(error){
   //console.log(error);
   temp.innerText = error?.response?.data?.message || "Unknown Error"
 }
};

form.addEventListener("submit", formHandler);



















/* error handling */
// try{
//   let a = "rrr";
//   console.log(v);
// }catch(error){
//   console.log("Shehzad");
// }


// try{
//   try{
//     ayesha;
//   }catch(error){
//     maria;
//   }
// }catch(shehzad){
//   console.log("shehzad", shehzad);
// }