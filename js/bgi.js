const images = ["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg"]

const todayBgi = images[Math.floor(Math.random() * images.length)];

const bgi = document.createElement("img");

bgi.src = `img/${todayBgi}`;

document.body.appendChild(bgi);
