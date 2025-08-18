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
const operate = function(a, b, op) {
    if (op === "+") {
        return add(a, b);
    } else if (op === "-") {
        return subtract(a, b);
    } else if (op === "*") {
        return multiply(a, b);
    } else if (op === "/") {
        return divide(a, b);
    }
}
const opBtn = document.querySelectorAll(".opBtn");
const eqBtn = document.querySelector(".eqBtn");
const btn = document.querySelectorAll(".btn");
const clr = document.querySelector("#clr");
const inp = document.querySelector("input");
btn.forEach(function(button) {
    if (/^\d$/.test(button.textContent)) {
        button.addEventListener("click", function(e) {
            let s = e.target.textContent;
            if (inp.dataset.justEvaluated === "true") {
                inp.value = "";
                inp.dataset.justEvaluated = "false";
            }
            inp.value += s;
        });
    }
});
clr.addEventListener("click", function(e) {
    inp.value = "";
    inp.dataset.justEvaluated = "false";
});
opBtn.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let s = e.target.textContent;
        const nums = inp.value.split(/([+\-*/])/);
        if (nums.length === 3 && nums[2] !== "") {
            const a = Number(nums[0]);
            const op = nums[1];
            const b = Number(nums[2]);
            if (op === "/" && b === 0) {
                inp.value = "Nice try! Can't divide by 0.";
                inp.dataset.justEvaluated = "true";
                return;
            }
            let result = operate(a, b, op);
            if (typeof result === "number" && !Number.isInteger(result)) {
                result = Number(result.toFixed(6));
            }
            inp.value = result + s;
            inp.dataset.justEvaluated = "true";
        } else {
            if (inp.value.length > 0 && /[+\-*/]$/.test(inp.value)) {
                inp.value = inp.value.slice(0, -1) + s;
            } else {
                inp.value += s;
            }
        }
    });
});
eqBtn.addEventListener("click", function(e) {
    const nums = inp.value.split(/([+\-*/])/);
    if (nums.length === 3 && nums[2] !== "") {
        const a = Number(nums[0]);
        const op = nums[1];
        const b = Number(nums[2]);
        if (op === "/" && b === 0) {
            inp.value = "Nice try! Can't divide by 0.";
            inp.dataset.justEvaluated = "true";
            return;
        }
        let result = operate(a, b, op);
        if (typeof result === "number" && !Number.isInteger(result)) {
            result = Number(result.toFixed(6));
        }
        inp.value = result;
        inp.dataset.justEvaluated = "true";
    }
});