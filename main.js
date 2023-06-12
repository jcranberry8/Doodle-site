const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

// ctx is the context of our canvas
// we use ctx to draw on the canvas
const ctx = canvas.getContext("2d")

// previous mouse positions
let prevX = null
let prevY = null

//line thickness
ctx.lineWidth = 3

let draw = false

// Selecting all the div that has a class of clr
let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)

clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    // Clearning the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


//make draw true when mouse is pressed
window.addEventListener("mousedown", (e) => draw = true)
//make draw false when mouse is released
window.addEventListener("mouseup", (e) => draw = false)

//to get the mouse position
window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
		prevX = e.clientX
		prevY = e.clientY
		return
	}
// current mouse position
let currentX = e.clientX
let currentY = e.clientY

// Draws a line from previous mouse position to current mouse position
ctx.beginPath()
ctx.moveTo(prevX, prevY)
ctx.lineTo(currentX, currentY)
ctx.stroke()
	
// Update previous mouse position
prevX = currentX
prevY = currentY
})
	