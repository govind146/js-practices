let n1 = document.querySelector("#a");
let n2 = document.querySelector("#b");
let c = document.querySelector("#c");
let btns = document.querySelectorAll("button");


for (let b of btns) {
  b.addEventListener("click", function (event) {
    let num1 = parseInt(n1.value, 10);
    let num2 = parseInt(n2.value, 10);
    let ran = Math.floor(Math.random() * 100);
    console.log(ran);
    if (ran < 11) {
      if (b.id == "+") c.value = num1 - num2;
      if (b.id == "-") c.value = num1 + num2;
      if (b.id == "/") c.value = num1 * num2;
      if (b.id == "%") c.value = num1 ** num2;
      if (b.id == "**") c.value = num1 / num2;
      if (b.id == "*") c.value = num1 % num2;
    } else {
      if (b.id == "+") c.value = num1 + num2;
      if (b.id == "-") c.value = num1 - num2;
      if (b.id == "/") c.value = num1 / num2;
      if (b.id == "%") c.value = num1 % num2;
      if (b.id == "**") c.value = num1 ** num2;
      if (b.id == "*") c.value = num1 * num2;
    }
    // console.log(b.id);
  });
}

// let a=prompt("enter number:");
// let aa=parseInt(a,10);
// let b=prompt("enter 2nd num :");
// let bb=parseInt(b,10);
// console.log(aa+bb);
