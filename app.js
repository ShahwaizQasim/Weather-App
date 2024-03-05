
let myinput = document.querySelector("#my-input");
let mybutton = document.querySelector("#my-button");

mybutton.addEventListener("click", () => {

    if(myinput.value <= 20){
        document.querySelector("#wheather-update").innerText = "Today Wheater Is Cold" 
    }
    else{
        document.querySelector("#wheather-update").innerText = "Today Wheater Is Hot"
    }
});