const number = process.argv[2];

if (number === 'school') {
    console.log("Not a number");
} else if (number === undefined) {
   console.log("Not a number")
} else {
     console.log(`My number: ${number}`);
}

