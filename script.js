const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16 * 16; i++) {

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseover", () =>{
            
            gridItem.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(gridItem);
    
}


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}