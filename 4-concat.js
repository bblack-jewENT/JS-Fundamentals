const arg1 = process.argv[2];
const arg2 = process.argv[3];

function args(arg1, arg2) {
    console.log(`${arg1} is ${arg2}`);
}

if (arg1 === process.argv[2]) {
    console.log(args("Python", "fun"));
} else if (arg2 === process.argv[3]) {
    console.log(args("HBTN"));
} else {
    console.log(args());
}
