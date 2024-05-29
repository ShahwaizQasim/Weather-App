let form = document.querySelector("#weatherForm");
let myInput = document.querySelector("#my-input");
let Button = document.querySelector("button[type='submit']");
const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";

/* Api data ko show krwany ky liye kuch element ko select kiya hai */
let message = document.querySelector("#message");
let temp = document.querySelector("#cityTemp");
let humidity = document.querySelector("#cityHumidity");
let wind = document.querySelector("#cityWind");
let cityPressure = document.querySelector("#city_Pressure");
let cityFeels = document.querySelector("#city_FeelsLike");
let navbar1 = document.querySelector(".navbar-light");
const icon = document.querySelector("#weather-icon");

const formHandler = async (event) => {
  try {
    event.preventDefault(); //is se page referesh nhi hota

    let city_temperature = myInput.value;

    message.innerText = "loading..."; // showing loading
    temp.innerText = "";
    humidity.innerText = "";
    wind.innerText = "";
    cityPressure.innerText = "";
    cityFeels.innerText = "";
    Button.disabled = true; // user ky ak bar click krny par button ko disable kiya hai

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${city_temperature}`
    );

    message.innerText = "";

    console.log(response);

    navbar1.style.backgroundColor = "transparent"; // response any par navbar ka color transparent kiya hai
    navbar1.style.boxShadow = "0px 0px 0px #ccc"; // response any par navbar ka box shadow 0 kiya hai
    temp.innerHTML = `${response.data.main.temp} °C <br/> ${response.data.name}`;
    humidity.innerText = `Humidity: ${response.data.main.humidity} %`;
    wind.innerText = `Wind: ${response.data.wind.speed} km/h`;
    cityPressure.innerText = `Pressure: ${response.data.main.pressure}hpa`;
    cityFeels.innerText = `Feels Like: ${response.data.main.feels_like}°C`;
    //  const iconLink = `https://openweathermap.org/img/wn/01d.png`

    //  icon.src = iconLink
  } catch (error) {
    //console.log(error);
    message.innerText = error?.response?.data?.message || "Unknown Error";
  } finally {
    form.reset(); // to clear input value only if form is submit successfully
    Button.disabled = false; // response any ky bad button ko wapis enable kiya hai
    console.log("finallay chala");
  }
};

form.addEventListener("submit", formHandler);

/* dark mode and light mode */

/* elements ko select kiya hai */
const body = document.querySelector("body");
const box = document.querySelector(".box-light");
const navbar = document.querySelector(".navbar-light");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

isDarkMode = true;

/* for desktop button1 light mode & dark mode */
button1.addEventListener("click", () => {
  if (isDarkMode === true) {
    body.className = `dark`;
    box.className = "box-dark";
    navbar.className = "navbar-dark";
    button1.innerHTML = "Light Mode <i class='fa-regular fa-sun'></i>";
    // isDarkMode = !isDarkMode;
  } else {
    body.className = "light";
    box.className = "box-light";
    navbar.className = "navbar-light";
    button1.innerHTML = "Dark Mode <i class='fa-solid fa-moon'></i>";
    // isDarkMode = !isDarkMode;
  }
  isDarkMode = !isDarkMode;
});

/* for mobile button2 light mode & dark mode */
button2.addEventListener("click", () => {
  if (isDarkMode === true) {
    body.className = `dark`;
    box.className = "box-dark";
    navbar.className = "navbar-dark";
    button2.innerHTML = "<i class='fa-regular fa-sun'></i>";
    // isDarkMode = !isDarkMode;
  } else {
    body.className = "light";
    box.className = "box-light";
    navbar.className = "navbar-light";
    button2.innerHTML = "<i class='fa-solid fa-moon'></i>";
    // isDarkMode = !isDarkMode;
  }
  isDarkMode = !isDarkMode;
});



/* error handling */
// try{                // try code ko run krta hai agr try me error a jaye tw wo catch ko run kr deta hai 
//   let a = "rrr";
//   console.log(v);
// }catch(error){ // try me jo bhi error hoga catch error ko catch kr lega
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
