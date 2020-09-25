process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const splitStr = input.split("\n");
  const resultNumber = splitStr[0] * 2;
  const resultString = splitStr[1];
  process.stdout.write(resultNumber.toString() + "\n" + resultString); // Writing output to STDOUT
}
