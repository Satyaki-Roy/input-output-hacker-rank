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
  const splitArrayInput = input.split("\n");

  let numberOfCases = +splitArrayInput[0];

  let dataObj = {};

  let dataStore = [];

  for (let i = 0; i < numberOfCases; i++) {
    dataStore.push({ ...dataObj });
  }

  process.stdout.write("\n");

  const result = [];

  for (const r of result) {
    process.stdout.write(r.toString() + "\n"); // Writing output to STDOUT
  }
}
