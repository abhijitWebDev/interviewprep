const baseURL = 'https://source.unsplash.com/all';
const container = document.querySelector('.content')

const rows = 7;

// this url gives an image. Use this and NO API calls
for (let i = 0; i < rows*3; i++) {
    const img = document.createElement('img');

    img.src = `${baseURL}${randomSize()}`;
    container.appendChild(img);
    
}
function randomSize() {
    return `${randomNumber()} * ${randomNumber()}`
}

function randomNumber() {
    return Math.floor(Math.random()*10) + 300;
}