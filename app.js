const buttons = document.querySelectorAll(".box");
const pickedColors = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.getAttribute("value"))
        console.log(chooseColor());
    })
});

function chooseColor() {
    const colors = ["purple", "blue", "green", "orange"];
    const newPick = colors[Math.floor(Math.random() * colors.length)];
    pickedColors.push(newPick);
    showPressedButton(pickedColors);
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
        setTimeout(() => pressButton(color), index * 1000);
    });
}


