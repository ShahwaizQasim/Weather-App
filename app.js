// https://rapidapi.com/hub api's ki website
// skeleton loading animation 

const form = document.querySelector("#weatherForm");
const myInput = document.querySelector("#my-input");
const Button = document.querySelector("button[type='submit']");
const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";

/* Api data ko show krwany ky liye kuch element ko select kiya hai */
const message = document.querySelector(".square");
const temp = document.querySelector("#cityTemp");
const humidity = document.querySelector("#cityHumidity");
const wind = document.querySelector("#cityWind");
const cityPressure = document.querySelector("#city_Pressure");
const cityFeels = document.querySelector("#city_FeelsLike");
const navbar = document.querySelector(".navbar-light");
const footer = document.querySelector(".footer-light")
const cityShow = document.querySelector("#cityShow");
const conditionShow = document.querySelector("#cityCondition");
const icon = document.querySelector("#weather-icon");
const CurrentDateShow = document.querySelector("#dateShow");

const formHandler = async (event) => {
  try {
    event.preventDefault(); //is se page referesh nhi hota

    let city_temperature = myInput.value;

    message.style.display = 'block'; // showing loading
    cityShow.innerText = "";
    conditionShow.innerText = "";
    temp.innerText = "";
    humidity.innerText = "";
    wind.innerText = "";
    cityPressure.innerText = "";
    cityFeels.innerText = "";
    icon.src = "";
    CurrentDateShow.innerText = "";
    Button.disabled = true; // user ky ak bar click krny par button ko disable kiya hai

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${city_temperature}`
    );
    console.log(response);

    message.style.display = 'none';


    navbar.style.backgroundColor = "transparent"; // response any par navbar ka color transparent kiya hai
    navbar.style.boxShadow = "0px 0px 0px #ccc"; // response any par navbar ka box shadow 0 kiya hai
    footer.style.backgroundColor = "transparent"; // response any par footer ka color transparent kiya hai
    footer.style.boxShadow = "0px 0px 0px #ccc"; // response any par footer ka box shadow 0 kiya hai

  //  Api se weather ka data aya hai ussy print krwaya hai 
    cityShow.innerText = `Weather of ${response.data.name}`;
    conditionShow.innerText = response.data.weather[0].description;
    temp.innerHTML = `${Math.round(response.data.main.temp)} °C <br/>`;
    humidity.innerText = `Humidity: ${response.data.main.humidity} %`;
    wind.innerText = `Wind: ${response.data.wind.speed} km/h`;
    cityPressure.innerText = `Pressure: ${response.data.main.pressure} mb`;
    cityFeels.innerText = `Feels Like: ${response.data.main.feels_like}°C`;

    // weather kay icon show kiye hain api se 
    const iconLink = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
    icon.src = iconLink;

    // current date show 
    const CurrentDate = new Date();
    const Time = CurrentDate.toDateString();
    //console.log(Time);
    CurrentDateShow.innerText = Time;
    
  } catch (error) {
    //console.log(error);
    swal({
      icon: "error",
      title: "Error",
      text:  error?.response?.data?.message || "Unknown Error",
    });
   
    //message.innerText = error?.response?.data?.message || "Unknown Error";
  } finally {
    form.reset(); // to clear input value only if form is submit successfully
    Button.disabled = false; // response any ky bad button ko wapis enable kiya hai
    //console.log("finallay chala");
    message.style.display = 'none';

  }
};

form.addEventListener("submit", formHandler);



/* dark mode and light mode */
/* elements ko select kiya hai */
const body = document.querySelector("body");
const box = document.querySelector(".box-light");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

isDarkMode = true;

/* for desktop button1 light mode & dark mode */
button1.addEventListener("click", () => {
  if (isDarkMode === true) {
    body.className = `dark`;
    box.className = "box-dark";
    navbar.className = "navbar-dark";
    footer.className = "footer-dark";
    button1.innerHTML = "Light Mode <i class='fa-regular fa-sun'></i>";
    // isDarkMode = !isDarkMode;
  } else {
    body.className = "light";
    box.className = "box-light";
    navbar.className = "navbar-light";
    footer.className = "footer-light";
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
