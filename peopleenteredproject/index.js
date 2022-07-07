let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
        count += 1
        countEl.textContent = count
}

//1. Create a function Save(), which logs out the count when it's called
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway hahahaa =DDD!! =)!!")