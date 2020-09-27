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

  const result = {
    possible: "YES",
    solution: "",
  };

  for (let i = 0; i < numberOfCases; i++) {
    if (
      splitArrayInput[1][i] === "H" &&
      (splitArrayInput[1][i - 1] === splitArrayInput[1][i] ||
        splitArrayInput[1][i] === splitArrayInput[1][i + 1])
    ) {
      result.possible = "NO";
      break;
    }
    if (splitArrayInput[1][i] === ".") {
      result.solution += "B";
    } else {
      result.solution += "H";
    }
  }

  process.stdout.write("\n");

  if (result.possible === "YES") {
    process.stdout.write(`YES\n${result.solution}\n`);
  } else {
    process.stdout.write(`NO\n`);
  }
}
