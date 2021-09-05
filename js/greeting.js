const LoginInput = document.querySelector("#login-form input");
const LoginForm = document.querySelector("#login-form");
const greet = document.querySelector("#greeting");
const mainTitle = document.querySelector(".main-title");
const quoteDiv = document.querySelector("div#quote");
const toDoDiv = document.querySelector(".todo-main");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
    document.querySelector("#bgimg").style.backgroundImage=`url(img/${todaysImage})`;
}
function paintGreeting(username) {
    const date = new Date();
    const hours = date.getHours();
    if(hours>=21 || hours < 6) {
        greet.innerText = `오늘도 고생많았어, ${username}.`;
    } else if(hours >= 6 && hours < 12) {
        greet.innerText = `좋은 아침! ${username}.`;
    } else if (hours >= 12 && hours < 18) {
        greet.innerText = `좋은 하루야! ${username}.`;
    } else {
        greet.innerText = `저녁이야, ${username}.`;
    }

    greet.classList.remove(HIDDEN_CLASSNAME);
    mainTitle.classList.remove(HIDDEN_CLASSNAME);
    quoteDiv.classList.remove(HIDDEN_CLASSNAME);
    toDoDiv.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername==null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}