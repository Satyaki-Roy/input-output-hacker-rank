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

  process.stdout.write("\n");

  for (let i = 1; i <= numberOfCases; i++) {
    const seatNumber = +splitArrayInput[i];

    switch (seatNumber % 12) {
      case 1:
        process.stdout.write((seatNumber + 11).toString() + " WS");
        break;
      case 2:
        process.stdout.write((seatNumber + 9).toString() + " MS");
        break;
      case 3:
        process.stdout.write((seatNumber + 7).toString() + " AS");
        break;
      case 4:
        process.stdout.write((seatNumber + 5).toString() + " AS");
        break;
      case 5:
        process.stdout.write((seatNumber + 3).toString() + " MS");
        break;
      case 6:
        process.stdout.write((seatNumber + 1).toString() + " WS");
        break;
      case 7:
        process.stdout.write((seatNumber - 1).toString() + " WS");
        break;
      case 8:
        process.stdout.write((seatNumber - 3).toString() + " MS");
        break;
      case 9:
        process.stdout.write((seatNumber - 5).toString() + " AS");
        break;
      case 10:
        process.stdout.write((seatNumber - 7).toString() + " AS");
        break;
      case 11:
        process.stdout.write((seatNumber - 9).toString() + " MS");
        break;
      case 0:
        process.stdout.write((seatNumber - 11).toString() + " WS");
        break;
      default:
        process.stdout.write("Wrong Seat Number");
    }
    process.stdout.write("\n");
  }
}
