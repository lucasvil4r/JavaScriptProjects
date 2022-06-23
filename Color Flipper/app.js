const colors = ['Green','Red','Yellow','Blue','White'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //get random number beetween 0 - 3 color[3]
    const randomNumber = getRandomNumber ();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber () {
    return Math.floor(Math.random()*colors.length);
}