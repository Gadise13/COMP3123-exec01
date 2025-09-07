
function max(a, b, c) {
  return Math.max(a, b, c);
}

r
function findLargest() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = parseInt(document.getElementById("num3").value);

  let largest = max(a, b, c);

  document.getElementById("result").innerText = largest;

  console.log("Largest of", a, b, c, "is", largest);
}


console.log(max(1, 0, 1));        // 1
console.log(max(0, -10, -20));    // 0
console.log(max(1000, 510, 440)); // 1000
