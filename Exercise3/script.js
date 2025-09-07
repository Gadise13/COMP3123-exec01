function transformText() {
  let input = document.getElementById("textInput").value;

  if (input.length < 3) {
    document.getElementById("result").innerText = input;
    return;
  }

  let lastThree = input.slice(-3);
  let remaining = input.slice(0, input.length - 3);
  let result = lastThree + remaining;

  document.getElementById("result").innerText = result;

  console.log("Transformed:", result);
}
