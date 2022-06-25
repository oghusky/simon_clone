
const buttons = document.querySelectorAll(".box");
const colors = ["purple", "blue", "green", "orange"];
const gamePickedColors = [];
let colorsLength = 0;

window.addEventListener("load", () => {
    const startBtn = document.querySelector("#start");
    const main = document.querySelector("main");
    main.style.display = "none";
    startBtn.addEventListener("click", e => {
        main.style.display = "flex";
        gameChosenColors(colors)
        e.target.style.display = "none"
    });
})



buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnValue = button.getAttribute("value");
        pressBtnColorChange(button, btnValue);
        checkIfCorrect(button, btnValue);
    });
});

function checkIfCorrect(btn, btnValue) {
    let isTrue;
    for (let i = 0; i < gamePickedColors.length; i++) {
        if (btnValue !== gamePickedColors[colorsLength]) {
            isTrue = false
        } else {
            playColorAudio(btnValue);
            colorsLength++
        }
    }
    if (colorsLength === gamePickedColors.length) {
        isTrue = true;
        colorsLength = 0;
    }
    if (!colorsLength && isTrue) {
        gameChosenColors();
    }
    return isTrue
}

function gameChosenColors() {
    let length = gamePickedColors.length;
    gamePickedColors.push(pickRandomColor(colors));
    if (length >= 1 && gamePickedColors[length] === gamePickedColors[length - 1]) {
        gamePickedColors.pop();
        gameChosenColors();
    }
    console.log(gamePickedColors);
    setTimeout(() => {
        computerPressButton(gamePickedColors);
    }, 1000)
    return gamePickedColors;
}

function pickRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function playColorAudio(btnValue) {
    document.getElementById(`${btnValue}_mp3`).play()
}

function pressBtnColorChange(button, btnValue) {
    button.classList.add(`new_${btnValue}`);
    playColorAudio(btnValue);
    setTimeout(() => {
        button.classList.remove(`new_${btnValue}`)
    }, 100)
}

function computerPressButton(arr) {
    let i = 0;
    arr.forEach(color => {
        const btn = document.querySelector(`.${color}`);
        setTimeout(() => {
            pressBtnColorChange(btn, color);
        }, i * 1000);
        i++;
    })
}
