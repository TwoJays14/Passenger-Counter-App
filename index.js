let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); // pass an argument
console.log(countEl);
let count = 0;

function increment() {
    count += 1;    
    countEl.textContent = count;
}

function save () {
    let saver = count + " - " + " ";
    saveEl.textContent += saver;
    countEl.textContent = 0;
    count = 0;
}