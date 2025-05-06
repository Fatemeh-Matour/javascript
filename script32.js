//document.getElementById("myClick").addEventListener("click",function(){
// event.preventDefault();
//})
//document.getElementById("check").addEventListener("click",event=>{
//event.preventDefault();
//});

const form = document.querySelector("form");
const day = document.getElementById("day");
const month = document.getElementById("month");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  if (day.value < 1 || day.value >= 31) {
    alert("روز باید عددی بین 1 تا 31 باشد");
    day.focus();
    event.preventDeault();
  } else if (month.value < 1 || month.value > 12) {
    alert("ماه باید بین 1 تا 12 باشد");
    month.focus();
    event.preventDefault();
  }
}
