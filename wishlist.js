let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let categorySelect = document.getElementById("category-select");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let category = categorySelect.value;
    let countStr = `${count} items added to ${category} - `;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}