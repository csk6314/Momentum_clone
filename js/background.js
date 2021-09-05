const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];
//const bgImage = document.createElement("img");
//bgImage.src=`img/${todaysImage}`;
if(savedUsername==null) {
    document.querySelector("#bgimg").style.backgroundImage=`url(img/main.jpg)`;
} else {
    document.querySelector("#bgimg").style.backgroundImage=`url(img/${todaysImage})`;
}


