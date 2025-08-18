const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    return a / b;
}
let a = 0;
let b = 0;
let op = "";
const operate = function(a, b, op) {
    if (op === "+") {
        add(a, b);
    } else if (op === "-") {
        subtract(a, b);
    } else if (op === "*") {
        multiply(a, b);
    } else if (op === "/") {
        divide(a, b);
    }
}
const btn = document.querySelectorAll(".btn");
const clr = document.querySelector("#clr");
const inp = document.querySelector("input");
btn.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let s = e.target.textContent;
        inp.value += s;
    });
});
clr.addEventListener("click", function(e) {
    inp.value = "";
});