const text = [
  "Frontend Developer",
  "React Developer",
  "Web Designer"
];

let index = 0;

function changeText() {
  document.getElementById("typing").textContent = text[index];

  index++;

  if (index >= text.length) {
    index = 0;
  }
}

changeText();
setInterval(changeText, 2000);