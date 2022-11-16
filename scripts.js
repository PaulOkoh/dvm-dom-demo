let count = 0;

//get DOM element
let counter = document.querySelector("#counter");

let plusBtn = document.querySelector("#plus-btn");
let minusBtn = document.querySelector("#minus-btn");
let resetBtn = document.querySelector("#reset-btn");

//create callback function
const increment = () => {
  count++;
  counter.textContent = count;
};

const decrement = () => {
  count--;

  if (count < 0) {
    alert();
    count++;
  } else {
    counter.textContent = count;
    console.log(count);
  }
};

const reset = () => {
  count = 0;
  counter.textContent = count;
  console.log(count);
};

//bring DOM element and callback together with addEventlListener
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

const buttons = document.querySelectorAll(".theme-buttons");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", selectThemes);
}

function selectThemes(event) {
  const theme = event.target.textContent;
  console.log(theme);

  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;

  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}
