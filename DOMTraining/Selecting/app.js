const allImages = document.getElementsByTagName('img');

// for(let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
// }

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

for (let link of links) {
    link.style.color = 'purple';
    link.style.textDecorationColor = 'pink';
    link.style.textDecorationStyle = 'wavy';
}