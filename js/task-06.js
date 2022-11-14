const textInput = document.querySelector("#validation-input");
const controlValue = parseInt(textInput.getAttribute("data-length"), 10);

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === controlValue) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
