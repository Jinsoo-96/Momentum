const images = []

for (let i = 0; i <= 7; i++){
    images.push(`${i}.webp`);
}

const chosenImage = images[Math.floor(Math.random()*images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url('img/${chosenImage}`;
document.body.classList.add('background-image');