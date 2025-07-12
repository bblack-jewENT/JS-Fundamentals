const size = parseInt(process.argv[2]);

if (isNaN(size)) {
    console.log('Missing size');
} else {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}