function mycop() {
  alert("متن مورد نظر با موفقیت کپی شد");
}
function mycut() {
  alert("متن مورد نظر کات شد");
}
function myprint() {
  alert("شروع پرینت");
}
function myprintend() {
  alert("پایان پرینت");
}

function mychange() {
  var text = document.getElementsByTagName("p")[0];
  var option = document.getElementsByTagName("select")[0];
  text.innerHTML = "شما شهر" + option.value + "را انتخاب کردید";
  if (option.value == "تبریز") {
    document.getElementById("op1").innerHTML = "جلفا";
    document.getElementById("op2").innerHTML = "مرند";
  }
}
