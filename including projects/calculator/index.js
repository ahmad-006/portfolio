let inputElement = document.querySelector(".text-input");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    const buttonText = button.value;
    switch (buttonText) {
      case "AC":
        inputElement.value = "";
        break;
      case "=":
        inputElement.value = eval(inputElement.value);
        break;
      case "DE":
        inputElement.value = inputElement.value.toString().slice(0, -1);
        break;
      default:
        inputElement.value += buttonText;
    }
  });
});
