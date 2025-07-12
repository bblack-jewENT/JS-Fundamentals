const square = process.argv[2];

if (square) {
    const num = parseInt(square);
    if (isNaN(num)) {
        console.log('Missing size');
    } else {
        for (let i = 0; i < num; i++) {
            row = '';
            for (let j = 0; j < num; j++) {
                row += 'X';
            }
            console.log(row);
        }
    }
}