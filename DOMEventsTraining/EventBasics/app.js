const btn2 = document.querySelector('#v2');
btn2.onclick = function() {
    console.log("You clicked me!");
}

function scream() {
    console.log("AAAHHHHHHAAAHAHAH!!!");
    console.log("STOP TOUCHING MEEEE!!!!");
}

btn2.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('Clicked!');
})

function twist() {
    console.log('Twist!');
}

function shout() {
    console.log('Shout!');
}

const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);