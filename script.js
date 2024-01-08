let count = 0;
let tag = document.querySelector("#count");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

increase.addEventListener("click",function(){
    tag.textContent = ++count
})
decrease.addEventListener("click",function(){
    tag.textContent = --count
})