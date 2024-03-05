
let myinput = document.querySelector("#my-input");
let form = document.querySelector("#wheather-form");
let screenparagraph = document.querySelector("#wheather-update");
//let mybutton = document.querySelector("#my-button");

form.addEventListener("submit", (event) => {

   event.preventDefault(); //is se page referesh nhi hota

   let temperature = myinput.value;
   let conditions = temperature < 20;

    if(conditions){
        screenparagraph.innerText = "Today Wheater Is Cold" 
    }
    else{
        screenparagraph.innerText = "Today Wheater Is Hot"
    }
});