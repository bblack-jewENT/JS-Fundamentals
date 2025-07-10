const arg1 = process.argv[2];
const arg2 = process.argv[3];

function args(arg1, arg2) {
    console.log(`${arg1} is ${arg2}`);
}

args("Python", "fun");

function args1(arg1, arg2) {
    console.log(`${arg1} is ${arg2}`);
}

args1("HBTN");

function args2(arg1, arg2) {
    console.log(`${arg1} is ${arg2}`);
}

args2();