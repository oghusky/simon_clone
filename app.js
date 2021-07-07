const buttons = document.querySelectorAll(".box");
const gamePickedColors = [];
const userPickedColors = [];

gameChosenColors();

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnValue = button.getAttribute("value");
        pushUserPicks(btnValue);
        button.style.backgroundColor = changePressedColors(btnValue);
    });
});

function gameChosenColors() {
    const colors = ["purple", "blue", "green", "orange"];
    const newPick = colors[Math.floor(Math.random() * colors.length)];
    gamePickedColors.push(newPick);
    showPressedButton(gamePickedColors);
    console.log(gamePickedColors);
    return gamePickedColors;
}

function pressButton(btnValue) {
    switch (btnValue) {
        case "purple":
            console.log("Button Pressed: ",btnValue);
            break;
        case "blue":
            console.log("Button Pressed: ",btnValue);
            break;
        case "green":
            console.log("Button Pressed: ",btnValue);
            break;
        case "orange":
            console.log("Button Pressed: ",btnValue);
            break;
        default:
            console.log("Error");
            break;
    }
}

function showPressedButton(colors) {
    colors.forEach((color, index) => {
        const timer = setTimeout(() => pressButton(color), index * 1000);
        // clearInterval(timer);
    });
}

function pushUserPicks(color) {
    userPickedColors.push(color);
    gameChosenColors();
    return userPickedColors;
}

function changePressedColors(color) {
    let newColor;
    switch (color) {
        case "purple":
            newColor = "#BA68C8"
            break;
        case "blue":
            newColor = "#536DFE"
            break;
        case "green":
            newColor = "#00E676"
            break;
        case "orange":
            newColor = "#FBC02D"
            break;
        default:
            console.log("Error");
            break;
    }
    return newColor;
}
