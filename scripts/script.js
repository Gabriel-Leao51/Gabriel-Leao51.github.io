const text = "Desenvolvedor Web Full Stack";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();
