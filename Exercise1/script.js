function capitalizeText() {
  let input = document.getElementById("textInput").value;

  let result = input.split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

  document.getElementById("result").innerText = result;
}
