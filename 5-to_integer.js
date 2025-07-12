const number = process.argv[2];

if (number === String || number === undefined) {
    console.log("Not a number");
} else {
     console.log(`My number: ${number}`);
}

