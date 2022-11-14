const inputChange = document.querySelector("input#font-size-control");
const text = document.querySelector("#text");

inputChange.addEventListener("change", (size) => {
  text.style.fontSize = `${size.target.value}px`;
});
