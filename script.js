let file = document.getElementById("file");
let currentValue = file.value;
document.querySelectorAll(".value a").forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    console.log("e", e.target.className);
    if (e.target.className == "subtract") {
      if (file.value > 10) {
        file.value = file.value - 10;
      } else {
        console.log("minimum limit reached");
      }
    } else if (e.target.className == "add") {
      if (file.value < 100) {
        file.value = file.value + 10;
      } else {
        console.log("maximum limit reached");
      }
    }
    changeColor();
  }); 
});

function changeColor() {
  let color = ["red", "blue", "green", "red", "blue"];

  let currentValue = file.value;
  let n = currentValue / 20;
  file.className = color[n];
  let progress = document.getElementsByTagName("progress");
  progress[0].style.backgroundColor = color[n];
  console.log(file.style.background);
  console.log(n);
}
