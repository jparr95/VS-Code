let content = document.querySelector('h1');
let button = document;
let randomColor = () => {
    let value = () => {
        return Math.floor(Math.random()*256)
    }
    // console.log(value)
    return `rgb(${value()}, ${value()}, ${value()})`
}

const changeColor = () => {
    content.style.color = randomColor();
}

button.onclick = changeColor;