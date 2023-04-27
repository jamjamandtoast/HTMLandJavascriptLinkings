"Use strict";
console.log("the index.js has started executing...");

const greeting = document.getElementById("greeting");

const nameTextbox = document.getElementById("nameTextbox");

const pressMebutton = document.getElementById("pressMebutton");

function init() {
console.log("hello from inisde the init function!");
pressMeButton.oneclick = onPressMeButtonClicked;
}
window.onload = init;



function onPressMeButtonClicked(){

    console.log("hello from inside the onPressMeButtonClicked() function!");
    
    let username = nameTextbox.value;

    greeting.innerHTML = `Hello to ${username} from inside the onPressMeButtonClicked function!`;
    

}

console.log("the index.js has finished executing...");

