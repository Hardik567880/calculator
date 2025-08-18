const add = function(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
const subtract = function(...nums) {
    let sub = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sub -= nums[i];
    }
    return sub;
}
const multiply = function(...nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
    }
    return product;
}
const divide = function(...nums) {
    let quotient = nums[0];
    for (let i = 1; i < nums.length; i++) {
        quotient /= nums[i];
    }
    return quotient;
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
const opBtn = document.querySelectorAll(".opBtn");
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
inp.addEventListener("input", function(e) {
    const nums = inp.value.split(/([+\-*/])/);

});