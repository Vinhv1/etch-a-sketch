const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16; i++)
 {
    for (let j = 0; j < 16; j++)
    {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "black"; // Change color on hover
        });
        gridContainer.appendChild(gridItem);
    }
}