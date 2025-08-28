document.addEventListener("DOMContentLoaded", () => {
  const typeWriter = (element, delay = 50, callback) => {
    const text = element.getAttribute("data-text"); // use data-text to store raw text
    element.innerHTML = "";
    let i = 0;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.innerHTML = "_";
    element.appendChild(cursor);

    const typing = setInterval(() => {
      if (i < text.length) {
        element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        i++;
      } else {
        clearInterval(typing);
        if (callback) callback();
      }
    }, delay);
  };

  const lines = document.querySelectorAll(".typing");
  let index = 0;

  const runTyping = () => {
    if (index < lines.length) {
      typeWriter(lines[index], 40, () => {
        index++;
        setTimeout(runTyping, 500); // short pause before next line
      });
    }
  };

  runTyping();
});
