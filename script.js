// const display = document.querySelector('#display');
// const buttons = document.querySelectorAll('button');

// buttons.forEach((item) => {
//     item.oneclick = () => {
//         if (item.id == 'clear') {
//             display.innerText = '';
//         } else if (item.id == 'backspace') {
//             let string = display.innerText.toString();
//             display.innerText = string.substr(0, string.length - 1);
//         } else if (display.innerText != '' && item.id == 'equal') {
//             display.innerText = eval(display.innerText);
//         } else if (display.innerText == '' && item.id == 'equal') {
//             display.innerText = 'Empty!';
//             setTimeout(() => (display.innerText = ''), 2000);
//         } else {
//             display.innerText += item.id;
//         }
//     }
// })


// const themeToggleBtn = document.querySelector('.theme-toggler');
// const calculator = document.querySelector('.calculator');
// const toggleIcon = document.querySelector('.toggler-icon');
// let isDark = true;
// themeToggleBtn.onclick = () => {
//     calculator.classList.toggle('dark');
//     themeToggleBtn.classList.toggle('active');
//     isDark = !isDark;
// }

function  addValue(num) {
    var inputField = document.getElementById("inputField")
    console.log(inputField, "inputField")
    inputField.value += num
}

function result() {
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}

function allClearValue(){
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}

function singleClearValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0,-1)
}
