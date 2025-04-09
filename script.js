/*console.log("Javascript is connected!");

alert("Welcome to my website!");

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        alert("Button Clicked!");
    });
});*/

const button = document.getElementById("changeTextBtn");
const title = document.getElementById("title");

button.addEventListener("click", function ()
{
    title.textContent = "You just changed me! ";
});


