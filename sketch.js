let container = document.getElementById("container");
container.style.display = "grid";
container.style.gridTemplateRows = `repeat(16, 1fr)`;
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.width = "600px";
container.style.height = "600px";

function drawGrid(num) {
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    var count = 0;

    for (x = 0; x < num; x++) {
        for (y = 0; y < num; y++) {
            let squareDiv = document.createElement("div");
            squareDiv.style.border = "solid 0.5px";
            document.getElementById("container").appendChild(squareDiv);
            squareDiv.addEventListener("mouseover", function () {
                //squareDiv.style.background = "orange";
                squareDiv.style.background = rgb;
                count++;
                console.log(count);
                let opacity = count/30;
                squareDiv.style.opacity = `${opacity}`;
            });
            
        }
    };
}

drawGrid(16);

document.getElementById("button").addEventListener("click", promptMe);

function promptMe() {
    let customNumber = prompt("What's the number of squares per side? (Max: 100)");
    if (customNumber > 0 && 100 >= customNumber) {
        container.innerHTML = '';
        drawGrid(Number(customNumber));
    }
};



