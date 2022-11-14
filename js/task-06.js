const textInput = document.querySelector("#validation-input");
const controlValue = parseInt(textInput.getAttribute("data-length"), 10);

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === controlValue) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
    textInput.classList.add("invalid");
  }
});
