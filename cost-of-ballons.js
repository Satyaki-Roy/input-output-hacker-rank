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

  let dataObj = {
    costOfBalloons: [],
    numberOfParticipants: 0,
    solvedLeft: 0,
    solvedRight: 0,
  };

  let dataStore = [];

  let j = 1;

  for (let i = 0; i < numberOfCases; i++) {
    dataStore.push({ ...dataObj });

    while (j < splitArrayInput.length) {
      dataStore[i]["costOfBalloons"] = splitArrayInput[j]
        .split(" ")
        .map((e) => +e);
      j++;

      dataStore[i]["numberOfParticipants"] = +splitArrayInput[j];
      j++;

      for (let k = 0; k < dataStore[i]["numberOfParticipants"]; k++) {
        let solution = splitArrayInput[j].split(" ");

        if (solution[0] === "1") {
          dataStore[i]["solvedLeft"]++;
        }

        if (solution[1] === "1") {
          dataStore[i]["solvedRight"]++;
        }

        j++;
      }
      break;
    }
  }

  const result = [];

  for (const data of dataStore) {
    const r1 =
      data["costOfBalloons"][0] * data.solvedLeft +
      data["costOfBalloons"][1] * data.solvedRight;
    const r2 =
      data["costOfBalloons"][0] * data.solvedRight +
      data["costOfBalloons"][1] * data.solvedLeft;
    if (r1 >= r2) {
      result.push(r2);
    } else {
      result.push(r1);
    }
  }

  process.stdout.write("\n");

  for (const r of result) {
    process.stdout.write(r.toString() + "\n"); // Writing output to STDOUT
  }
}
