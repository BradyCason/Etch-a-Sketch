// Create array of arrays (16x16 grid)
gridDiv = document.querySelector(".grid")
function createGrid(numSquares){
    // Remove previous grid
    const columns = document.querySelectorAll(".column")
    columns.forEach(column => {
        gridDiv.removeChild(column)
    });

    // Create new grid
    for (let i = 0; i < numSquares; i++){
        let column = document.createElement("div")
        column.setAttribute("style", "display: flex; flex: 1; flex-direction: column; height: 100%;")
        column.setAttribute("class", "column")
    
        for (let j = 0; j < numSquares; j++){
            let square = document.createElement("div")
            square.addEventListener("mouseover", () => {
                let randColor = Math.floor(Math.random()*16777215).toString(16);
                square.setAttribute("style", square.getAttribute("style") + "background-color: #"+randColor.toString()+";")
            })
            square.setAttribute("style",'flex: 1; border-style: solid; border-width: 1px;')
            column.appendChild(square)
        }
        gridDiv.appendChild(column)
    }
}

btn = document.querySelector(".numSquares")
btn.addEventListener("click", () => {
    let numSquares = Number(prompt("Number of squares: "))
    createGrid(numSquares)
})

createGrid(20)