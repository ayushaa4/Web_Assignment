const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

colorPicker.addEventListener("input", function () {
  colorBox.style.backgroundColor = colorPicker.value;
});

resetBtn.addEventListener("click", function () {
  colorBox.style.backgroundColor = "blueviolet";
});