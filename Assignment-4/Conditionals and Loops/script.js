// 1. Even or Odd Checker
function checkEvenOdd() {
  let num = document.getElementById("evenOddInput").value;
  let result = document.getElementById("evenOddResult");

  if (num % 2 === 0) {
    result.textContent = num + " is an even number.";
  } else {
    result.textContent = num + " is an odd number.";
  }
}

// 2. Multiplication Table
function generateTable() {
  let num = document.getElementById("tableInput").value;
  let output = "";

  for (let i = 1; i <= 10; i++) {
    output += num + " x " + i + " = " + (num * i) + "\n";
  }

  document.getElementById("tableResult").textContent = output;
}

// 3. FizzBuzz
function runFizzBuzz() {
  let output = "";

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz\n";
    } else if (i % 3 === 0) {
      output += "Fizz\n";
    } else if (i % 5 === 0) {
      output += "Buzz\n";
    } else {
      output += i + "\n";
    }
  }

  document.getElementById("fizzBuzzResult").textContent = output;
}

// 4. Right-Angled Triangle
function printTriangle() {
  let n = document.getElementById("triangleInput").value;
  let stars = "";
  let result = "";

  for (let i = 1; i <= n; i++) {
    stars += "*";
    result += stars + "\n";
  }

  document.getElementById("triangleResult").textContent = result;
}
